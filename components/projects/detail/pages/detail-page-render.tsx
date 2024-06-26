import CommonDescription from '@/components/common/description';
import CommonImage from '@/components/common/image';
import CommonLink from '@/components/common/link';
import CommonPeriod from '@/components/common/period';
import CommonTags from '@/components/common/tags';
import CommonTitle from '@/components/common/title';
import { ProjectResultType } from '@/types/projects';

interface Props {
  data: ProjectResultType;
}

const PageRender = ({ data }: Props) => {
  const id = data.id;
  const title = data.properties.Name.title[0].plain_text;
  const github = data.properties.Github.url;
  const youtube = data.properties.Youtube.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;
  const site = data.properties.Site.url;
  const site2 = data.properties.Site2.url;

  return (
    <div className="container mx-auto">
      <CommonImage
        src={imgSrc}
        wrap="w-[500px] max-w-full border rounded-xl overflow-hidden"
        width={500}
        height={500}
      />
      <div className="flex flex-col flex-1 py-4">
        <CommonTitle title={title} />
        <CommonDescription description={description} />
        {site && <CommonLink href={site} text="사이트 링크 바로가기" />}
        {site2 && <CommonLink href={site2} text="사이트2 링크 바로가기" />}
        {github && <CommonLink href={github} text="깃허브 바로가기" />}
        {youtube && <CommonLink href={github} text="유튜브 시연영상 보러가기" />}
        <CommonPeriod start={start} end={end} />
        <CommonTags wrap="flex flex-wrap items-start gap-2 mt-2" tags={tags} />
      </div>
    </div>
  );
};

export default PageRender;
