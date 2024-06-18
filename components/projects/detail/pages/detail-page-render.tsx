import { ProjectResultType } from "@/types/projects";
import { getColorClassName } from "@/utils/color-mapping";
import { calculatedPeriod } from "@/utils/period-mapping";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

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
      </div>
    </div>
  );
};

export default PageRender;
