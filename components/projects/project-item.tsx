import React from 'react';
import Link from 'next/link';
import { ProjectResultType } from '@/types/projects';
import CommonImage from '../common/image';
import CommonTitle from '../common/title';
import CommonDescription from '../common/description';
import CommonPeriod from '../common/period';
import CommonTags from '../common/tags';
import ProjectLinks from './project-links';
import ArrowIcon from '/public/icons/arrow.svg';

interface Props {
  data: ProjectResultType;
}

const ProjectItem = ({ data }: Props) => {
  const title = data.properties.Name.title[0]?.plain_text ?? '';
  const github = data.properties.Github.url ?? '';
  const youtube = data.properties.Youtube.url ?? '';
  const description = data.properties.Description.rich_text[0]?.plain_text ?? '';
  const imgSrc = data.cover?.file?.url ?? data.cover?.external?.url ?? '';
  const tags = data.properties.Tags.multi_select ?? '';
  const start = data.properties.WorkPeriod.date?.start ?? '';
  const end = data.properties.WorkPeriod.date?.end ?? '';
  const site = data.properties.Site.url ?? '';
  const site2 = data.properties.Site2?.url ?? '';
  const site3 = data.properties.Site3?.url ?? '';
  const href = `/projects/${encodeURIComponent(title)}`;

  return (
    <article className="group project-card">
      <div className="overflow-hidden border-b border-zinc-100 dark:border-zinc-800">
        <CommonImage
          src={imgSrc}
          fill
          wrap="aspect-[16/10] w-full"
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col flex-1 gap-3 p-5">
        <CommonPeriod start={start} end={end} />
        {title ? (
          <Link href={href} className="text-primary hover:text-primary after:absolute after:inset-0 after:content-['']">
            <CommonTitle title={title} className="transition-colors group-hover:text-main" />
          </Link>
        ) : (
          <CommonTitle title={title} />
        )}
        <CommonDescription description={description} />
        <CommonTags wrap="flex flex-wrap gap-1.5" tags={tags} />
        <ProjectLinks
          site={site}
          site2={site2}
          site3={site3}
          github={github}
          youtube={youtube}
          className="relative z-10 pt-1"
        />
        {title && (
          <div className="flex items-center gap-1 pt-3 mt-auto text-sm font-semibold border-t border-zinc-100 text-zinc-500 group-hover:text-main dark:border-zinc-800">
            <span>자세히 보기</span>
            <span className="w-4 transition-transform group-hover:translate-x-1">
              <ArrowIcon
                width="auto"
                height="auto"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectItem;
