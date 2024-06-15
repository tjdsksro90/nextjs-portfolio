import Seo from "@/components/Seo";
import { DATABASE_ID, TOKEN } from "@/config";
import { GetStaticProps } from "next";
import ProjectItem from "@/components/projects/project-item";
import { ProjectResultType } from "@/types/projects";

interface Props {
  projectsList: ProjectResultType[];
}

const Projects = ({ projectsList }: Props) => {
  const sortedProjectsList = projectsList.sort((a, b) => {
    const startDateA = new Date(a.properties.WorkPeriod.date.start);
    const startDateB = new Date(b.properties.WorkPeriod.date.start);
    return startDateA.getTime() - startDateB.getTime();
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
      <Seo title="Projects" />

      <h1 className="text-4xl font-bold sm:text-6xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{projectsList.length}</span>
      </h1>

      <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
        {sortedProjectsList.map(item => (
          <ProjectItem data={item} />
        ))}
      </div>
    </div>
  );
};

export default Projects;

// 빌드 타임에 호출
export const getStaticProps: GetStaticProps = async () => {
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };
  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      options
    );

    const projects = await res.json();
    const projectsList = projects.results;

    return {
      props: {
        projectsList,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error); // 에러 로그 추가
    return {
      props: {
        projects: [],
      },
    };
  }
};
