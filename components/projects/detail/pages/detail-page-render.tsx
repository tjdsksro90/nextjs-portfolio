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

const PageRender = ({ data }: Props) => {
  if (!data || !data.properties) {
    return <div>프로젝트 데이터를 불러올 수 없습니다.</div>;
  }

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
        <CommonImage src={imgSrc} fill wrap="aspect-[16/10] w-full" />
      </div>
      <div className="flex flex-col gap-5">
        <CommonTitle title={title} className="text-3xl font-bold md:text-4xl" />
        <CommonDescription description={description} className="text-base md:text-lg" />
        <dl className="grid gap-4 p-5 text-sm surface">
          {(start || end) && (
            <div>
              <dt className="mb-1.5 eyebrow !text-zinc-400 !text-[11px]">Period</dt>
              <dd>
                <CommonPeriod start={start} end={end} className="!text-sm" />
              </dd>
            </div>
          )}
          {tags.length > 0 && (
            <div>
              <dt className="mb-2 eyebrow !text-zinc-400 !text-[11px]">Stack</dt>
              <dd>
                <CommonTags wrap="flex flex-wrap gap-1.5" tags={tags} />
              </dd>
            </div>
          )}
          {(site || site2 || site3 || github || youtube) && (
            <div>
              <dt className="mb-2 eyebrow !text-zinc-400 !text-[11px]">Links</dt>
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
