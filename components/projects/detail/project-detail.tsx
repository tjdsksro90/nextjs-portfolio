import Link from 'next/link';
import { ProjectDetailProps } from '@/types/project-detail';
import { ProjectResultType } from '@/types/projects';
import { useAllProjects } from '@/hooks/useAllProjects';
import { MENU_ITEMS } from '@/config/site';
import PageRender from './pages/detail-page-render';
import BlockRender from './blocks/detail-block-render';
import FileRender from './files/detail-file-render';
import ArrowIcon from '/public/icons/arrow.svg';

type TextKey = 'FilesFirstText' | 'FilesSlideText' | 'FilesSlideText2' | 'FilesSlideText3' | 'FilesText';

// 이미지 묶음 앞에 붙는 설명 문장 (노션 속성)
const FilesCaption = ({ data, textKey }: { data: ProjectResultType; textKey: TextKey }) => {
  const text = data.properties?.[textKey]?.rich_text?.[0]?.plain_text;
  if (!text) return null;

  return <p className="mt-12 mb-5 text-lg font-medium text-zinc-900 dark:text-zinc-50 max-w-[68ch]">{text}</p>;
};

// 상세 끝: 목록 순서상 다음 프로젝트로 이어지게 (마지막이면 첫 프로젝트)
const NextProject = ({ currentId }: { currentId: string }) => {
  const { projects } = useAllProjects();
  const index = projects.findIndex(project => project.id === currentId);
  if (index === -1 || projects.length < 2) return null;

  const next = projects[(index + 1) % projects.length];
  const nextTitle = next.properties.Name.title[0]?.plain_text ?? '';
  if (!nextTitle) return null;

  return (
    <nav aria-label="다른 프로젝트" className="flex flex-wrap items-center justify-between gap-4 pt-10 mt-20 border-t border-zinc-200 dark:border-zinc-800">
      <Link href={MENU_ITEMS.projects.path} className="btn-ghost">
        전체 프로젝트
      </Link>
      <Link href={`/projects/${encodeURIComponent(nextTitle)}`} className="btn-project">
        <span>다음 프로젝트: {nextTitle}</span>
        <ArrowIcon
          className="w-4 h-4"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          aria-hidden
        />
      </Link>
    </nav>
  );
};

const ProjectDetailComponent = ({ blocksData, pagesData }: ProjectDetailProps) => {
  if (!pagesData) {
    return (
      <div className="py-24 text-center">
        <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300">프로젝트 내용을 불러오지 못했습니다.</p>
        <Link href={MENU_ITEMS.projects.path} className="btn-project">
          프로젝트 목록으로
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageRender key={`page-${pagesData.id}`} data={pagesData} />
      <div className="w-full h-px my-16 bg-zinc-200 dark:bg-zinc-800" />

      <FilesCaption data={pagesData} textKey="FilesFirstText" />
      <FileRender key={`filesFirst-top-${pagesData.id}`} data={pagesData} fileType="FilesFirst" />
      <FilesCaption data={pagesData} textKey="FilesSlideText" />
      <FileRender key={`filesSlide-${pagesData.id}`} data={pagesData} fileType="FilesSlide" />
      <FilesCaption data={pagesData} textKey="FilesSlideText2" />
      <FileRender key={`filesSlide2-${pagesData.id}`} data={pagesData} fileType="FilesSlide2" />
      <FilesCaption data={pagesData} textKey="FilesSlideText3" />
      <FileRender key={`filesSlide3-${pagesData.id}`} data={pagesData} fileType="FilesSlide3" />

      {/* 본문은 읽기 좋은 폭(68자)으로 제한 */}
      {blocksData && blocksData.length > 0 && (
        <div className="max-w-[68ch]">
          <BlockRender blocks={blocksData} />
        </div>
      )}

      <FilesCaption data={pagesData} textKey="FilesText" />
      <FileRender key={`files-bottom-${pagesData.id}`} data={pagesData} />

      <NextProject currentId={pagesData.id} />
    </>
  );
};

export default ProjectDetailComponent;
