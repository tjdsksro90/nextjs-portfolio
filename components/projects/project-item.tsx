import React from 'react';
import Link from 'next/link';
import { ProjectResultType, PropertiesType } from '@/types/projects';
import CommonImage from '../common/image';
import CommonTitle from '../common/title';
import CommonDescription from '../common/description';
import CommonLink from '../common/link';
import CommonPeriod from '../common/period';
import CommonTags from '../common/tags';

interface Props {
  data: ProjectResultType;
}

const ProjectItem = ({ data }: Props) => {
  console.log(data);
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
    <div className="project-card">
      <CommonImage src={imgSrc} width={1920} height={1080} className="rounded-t-xl" />
      <div className="flex flex-col flex-1 p-4">
        <CommonTitle title={title} />
        <CommonDescription description={description} />
        {site && <CommonLink href={site} text="사이트 링크 바로가기" />}
        {site2 && <CommonLink href={site2} text="사이트2 링크 바로가기" />}
        {github && <CommonLink href={github} text="깃허브 바로가기" />}
        {youtube && <CommonLink href={github} text="유튜브 시연영상 보러가기" />}
        <CommonPeriod start={start} end={end} />
        <CommonTags wrap="flex flex-wrap items-start gap-2 mt-2" tags={tags} />
        <div className="mt-auto text-right">
          <Link
            className="flex items-center justify-end gap-1 mt-5 font-semibold text-indigo-500"
            href={`/projects/${id}`}
          >
            <span>자세히 보기</span>
            <span className="w-5">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
