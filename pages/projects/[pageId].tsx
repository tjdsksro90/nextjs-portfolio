import Seo from "@/components/Seo";
import BlockRender from "@/components/projects/detail/blocks/detail-block-render";
import FileRender from "@/components/projects/detail/files/detail-file-render";
import PageRender from "@/components/projects/detail/pages/detail-page-render";
import { TOKEN } from "@/config";
import { ProjectDetailType } from "@/types/project-detail";
import { ProjectResultType } from "@/types/projects";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

interface ProjectDetailProps {
  projectId: string;
  blocksData: ProjectDetailType[];
  pagesData: ProjectResultType;
}

const ProjectDetail = ({
  projectId,
  blocksData,
  pagesData,
}: ProjectDetailProps) => {
  return (
    <div className="min-h-screen px-3 mb-10">
      <Seo title="Project Detail" />
      <ul>
        <li>Project Detail for ID: {projectId}</li>
        <PageRender key={pagesData.id} data={pagesData} />
        {blocksData.map(block => (
          <BlockRender key={block.id} block={block} />
        ))}
        <FileRender key={pagesData.id} data={pagesData} />
      </ul>
    </div>
  );
};

export default ProjectDetail;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const { pageId } = ctx.params as { pageId: string };

  const resBlocks = await fetch(
    `https://api.notion.com/v1/blocks/${pageId}/children`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Notion-Version": "2022-06-28",
      },
    }
  );

  const resPages = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Notion-Version": "2022-06-28",
    },
  });

  const blocksData = await resBlocks.json();
  const pagesData = await resPages.json();

  return {
    props: {
      projectId: pageId,
      blocksData: blocksData.results,
      pagesData,
    },
  };
};
