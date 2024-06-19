import React from "react";
import Link from "next/link";
import { ProjectResultType, PropertiesType } from "@/types/projects";
import CommonImage from "../common/image";
import CommonTitle from "../common/title";
import CommonDescription from "../common/description";
import CommonLink from "../common/link";
import CommonPeriod from "../common/period";
import CommonTags from "../common/tags";

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

  return (
    <div className="project-card">
      <CommonImage src={imgSrc} />
      <div className="flex flex-col flex-1 p-4">
        <CommonTitle title={title} />
        <CommonDescription description={description} />
        {github && <CommonLink href={github} text="깃허브 바로가기" />}
        {youtube && (
          <CommonLink href={github} text="유튜브 시연영상 보러가기" />
        )}
        <CommonPeriod start={start} end={end} />
        <CommonTags tags={tags} />
        <div className="mt-auto text-right">
          <Link className="mt-5 btn-project" href={`/projects/${id}`}>
            작업물 자세히 보기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
