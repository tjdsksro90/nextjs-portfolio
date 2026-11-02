import CommonDescription from '@/components/common/description';
import CommonImage from '@/components/common/image';
import CommonPeriod from '@/components/common/period';
import CommonTags from '@/components/common/tags';
import CommonTitle from '@/components/common/title';
import ProjectLinks from '@/components/projects/project-links';
import { ProjectResultType } from '@/types/projects';

interface Props {
  data: ProjectResultType | null;
}

// 상세 패널 항목 이름 (제목 위 작은 영문 라벨 대신 한글 항목명)
const FactLabel = ({ children }: { children: string }) => (
  <dt className="mb-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400">{children}</dt>
);

const PageRender = ({ data }: Props) => {
  if (!data || !data.properties) return null;

  const title = data.properties.Name?.title[0]?.plain_text || '';
  const github = data.properties.Github?.url;
  const youtube = data.properties.Youtube?.url;
  const description = data.properties.Description?.rich_text[0]?.plain_text || '';
  const imgSrc = data.cover?.file?.url || data.cover?.external?.url || '';
  const tags = data.properties.Tags?.multi_select || [];
  const start = data.properties.WorkPeriod?.date?.start;
  const end = data.properties.WorkPeriod?.date?.end;
  const site = data.properties.Site?.url;
  const site2 = data.properties.Site2?.url;
  const site3 = data.properties.Site3?.url;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_1fr] lg:gap-12 animate-fade-in">
      <div className="overflow-hidden surface">
        <CommonImage src={imgSrc} alt={title ? `${title} 화면` : ''} fill wrap="aspect-[16/10] w-full" />
      </div>
      <div className="flex flex-col gap-5">
        <CommonTitle as="h1" title={title} className="text-3xl font-bold md:text-4xl" />
        <CommonDescription description={description} className="text-base md:text-lg" />
        <dl className="grid gap-4 p-5 text-sm surface">
          {(start || end) && (
            <div>
              <FactLabel>작업 기간</FactLabel>
              <dd>
                <CommonPeriod start={start} end={end} className="!text-sm" />
              </dd>
            </div>
          )}
          {tags.length > 0 && (
            <div>
              <FactLabel>사용 기술</FactLabel>
              <dd>
                <CommonTags wrap="flex flex-wrap gap-1.5" tags={tags} />
              </dd>
            </div>
          )}
          {(site || site2 || site3 || github || youtube) && (
            <div>
              <FactLabel>링크</FactLabel>
              <dd>
                <ProjectLinks site={site} site2={site2} site3={site3} github={github} youtube={youtube} />
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
};

export default PageRender;
