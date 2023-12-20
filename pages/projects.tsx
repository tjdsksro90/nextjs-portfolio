import { getLists } from "@/api/lists";
import Seo from "@/components/Seo";
import { DATABASE_ID, TOKEN } from "@/config";
import axios from "axios";
import { useEffect } from "react";

declare type MovieResultType = {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: {
    object: string;
    id: string;
  };
};

interface Props {
  projectNames: MovieResultType[] | undefined;
}

function projects() {
  return (
    <div className="container">
      <Seo title="Projects" />
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          {/* {projectNames} */}
          {/* {projectNames?.map((movie) => {
            <div key={movie.id}></div>;
          })} */}
        </div>
      </section>
    </div>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  // const options = {
  //   method: "POST",
  //   headers: {
  //     accept: "application/json",
  //     "Notion-Version": "2022-06-28",
  //     "content-type": "application/json",
  //     Authorization: `Bearer ${TOKEN}`,
  //   },
  //   body: JSON.stringify({ page_size: 100 }),
  // };

  // const res = await fetch(
  //   `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
  //   options
  // );

  // const projects = await res.json();

  // const projectNames = projects.results.map((item: any) => {
  //   item.properties.Name.title;
  // });

  // console.log(projectNames);
  return {
    props: {
      // projectNames,
    },
  };
}

export default projects;
