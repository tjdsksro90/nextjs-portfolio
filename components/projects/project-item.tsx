import React from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import { ProjectResultType, PropertiesType } from "@/types/projects";

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

  // 색상 매핑 객체
  const colorMap: { [key: string]: string } = {
    red: "bg-custom-red dark:bg-custom-red-dark",
    orange: "bg-custom-orange dark:bg-custom-orange-dark",
    yellow: "bg-custom-yellow dark:bg-custom-yellow-dark",
    green: "bg-custom-green dark:bg-custom-green-dark",
    blue: "bg-custom-blue dark:bg-custom-blue-dark",
    purple: "bg-custom-purple dark:bg-custom-purple-dark",
    pink: "bg-custom-pink dark:bg-custom-pink-dark",
    brown: "bg-custom-brown dark:bg-custom-brown-dark",
    gray: "bg-custom-gray dark:bg-custom-gray-dark",
  };

  // 클래스 네임 설정 함수
  const getColorClassName = (color: string) => {
    return colorMap[color] || "bg-custom-default dark:bg-custom-default-dark"; // 기본값 설정 가능
  };

  const calculatedPeriod = (start: string, end: string): number => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      Number(startDateStringArray[0]),
      Number(startDateStringArray[1]) - 1, // 월은 0부터 시작하므로 -1 필요
      Number(startDateStringArray[2])
    );
    var endDate = new Date(
      Number(endDateStringArray[0]),
      Number(endDateStringArray[1]) - 1, // 월은 0부터 시작하므로 -1 필요
      Number(endDateStringArray[2])
    );

    const diffInMs = Math.abs(endDate.getTime() - startDate.getTime());
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="1920"
        height="1080"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />

      <div className="flex flex-col flex-1 p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        {github && (
          <Link className="mr-5" href={github}>
            깃허브 바로가기
          </Link>
        )}
        {youtube && (
          <Link className="mr-5" href={youtube}>
            유튜브 시연영상 보러가기
          </Link>
        )}
        <p className="my-1 ">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex flex-wrap items-start gap-2 mt-2">
          {tags.map(aTag => (
            <h6
              className={classNames(
                "px-2 py-1 rounded-md w-30",
                getColorClassName(aTag.color) // 동적 클래스 설정
              )}
              key={aTag.id}
            >
              {aTag.name}
            </h6>
          ))}
        </div>
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
