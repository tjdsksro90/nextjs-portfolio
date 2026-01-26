import Seo from '@/components/Seo';
import MainTitle from '@/components/common/main-title';
import ProjectDetailComponent from '@/components/projects/detail/project-detail';
import { DATABASE_ID, TOKEN } from '@/config';
import { ProjectDetailProps } from '@/types/project-detail';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Link from 'next/link';
import ArrowIcon from '/public/icons/arrow.svg';

const ProjectDetail = ({ blocksData, pagesData }: ProjectDetailProps) => {
  return (
    <div className="container min-h-screen px-5 mx-auto mb-10 md:px-14">
      <Seo title="Project Detail" />
      <MainTitle
        main="Project Detail"
        sub={
          <span>
            프로젝트 상세내용 화면입니다.
            <Link className="flex items-center gap-1 mt-1 font-semibold" href={`/projects`}>
              <span className="w-5 rotate-180">
                <ArrowIcon
                  width="auto"
                  height="auto"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </span>
              <span>뒤로가기</span>
            </Link>
          </span>
        }
      />
      <ProjectDetailComponent blocksData={blocksData} pagesData={pagesData} />
    </div>
  );
};

export default ProjectDetail;

// undefined를 null로 변환하는 헬퍼 함수
const removeUndefined = (obj: any): any => {
  if (obj === undefined) {
    return null;
  }
  if (obj === null) {
    return null;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => removeUndefined(item));
  }
  if (typeof obj === 'object') {
    const cleaned: any = {};
    for (const key in obj) {
      if (obj[key] !== undefined) {
        cleaned[key] = removeUndefined(obj[key]);
      }
    }
    return cleaned;
  }
  return obj;
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  // 동적 라우트에서 title을 가져옴
  const pageId = ctx.query.pageId;
  const title = Array.isArray(pageId) ? decodeURIComponent(pageId[0]) : decodeURIComponent(pageId as string);
  
  if (!title) {
    console.error('title is missing:', ctx.query);
    return {
      props: {
        blocksData: [],
        pagesData: null,
      },
    };
  }

  try {
    // 데이터베이스에서 title로 프로젝트 찾기
    const searchRes = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        filter: {
          property: 'Name',
          title: {
            equals: title,
          },
        },
        page_size: 1,
      }),
    });

    if (!searchRes.ok) {
      console.error('Database query failed:', searchRes.status);
      return {
        props: {
          blocksData: [],
          pagesData: null,
        },
      };
    }

    const searchData = await searchRes.json();
    
    if (!searchData.results || searchData.results.length === 0) {
      console.error('Project not found with title:', title);
      return {
        props: {
          blocksData: [],
          pagesData: null,
        },
      };
    }

    const projectId = searchData.results[0].id;

    // 찾은 id로 blocks와 pages 데이터 가져오기
    const resBlocks = await fetch(`https://api.notion.com/v1/blocks/${projectId}/children`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Notion-Version': '2022-06-28',
      },
    });

    const resPages = await fetch(`https://api.notion.com/v1/pages/${projectId}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Notion-Version': '2022-06-28',
      },
    });

    const blocksData = await resBlocks.json();
    const pagesData = await resPages.json();

    // undefined를 null로 변환하여 JSON 직렬화 가능하게 만듦
    const cleanedBlocksData = blocksData.results ? removeUndefined(blocksData.results) : [];
    const cleanedPagesData = removeUndefined(pagesData);

    return {
      props: {
        blocksData: cleanedBlocksData,
        pagesData: cleanedPagesData,
      },
    };
  } catch (error) {
    console.error('Error fetching project data:', error);
    return {
      props: {
        blocksData: [],
        pagesData: null,
      },
    };
  }
};
