import { TOKEN } from "@/config";
import { ProjectDetailType } from "@/types/project-detail";
import { ProjectResultType } from "@/types/projects";
import classNames from "classnames";
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
    <ul>
      <li>Project Detail for ID: {projectId}</li>
      {blocksData.map(block => {
        if (block.type === "heading_1") {
          return (
            <li
              key={block.id}
              className="mt-10 text-4xl font-semibold mb-7 sm:text-6xl"
            >
              {block.heading_1.rich_text.map(text => text.plain_text).join(" ")}
            </li>
          );
        } else if (block.type === "heading_2") {
          return (
            <li
              key={block.id}
              className="mt-5 text-2xl font-semibold mb-7 sm:text-4xl"
            >
              {block.heading_2.rich_text.map(text => text.plain_text).join(" ")}
            </li>
          );
        } else if (block.type === "heading_3") {
          return (
            <li
              key={block.id}
              className="mt-5 mb-3 text-xl font-semibold sm:text-2xl"
            >
              {block.heading_3.rich_text.map(text => text.plain_text).join(" ")}
            </li>
          );
        } else if (block.type === "paragraph") {
          return (
            <li key={block.id} className="mb-2">
              {block.paragraph.rich_text.map((text, index) => (
                <span
                  key={index}
                  className={classNames({
                    "font-bold": text.annotations.bold,
                    italic: text.annotations.italic,
                    "line-through": text.annotations.strikethrough,
                    underline: text.annotations.underline,
                    "px-1 bg-code text-red-500": text.annotations.code, // Example class for code
                  })}
                >
                  {text.plain_text}
                </span>
              ))}
            </li>
          );
        } else if (block.type === "bulleted_list_item") {
          return (
            <li key={block.id} className="mb-2 ml-6 list-disc">
              {block.bulleted_list_item.rich_text.map((text, index) => (
                <span
                  key={index}
                  className={classNames({
                    "font-bold": text.annotations.bold,
                    italic: text.annotations.italic,
                    "line-through": text.annotations.strikethrough,
                    underline: text.annotations.underline,
                    "px-1 bg-code text-red-500": text.annotations.code, // Example class for code
                  })}
                >
                  {text.plain_text}
                </span>
              ))}
            </li>
          );
        }
        // Add more cases for different types if needed
        return null;
      })}
      <pre>{JSON.stringify(pagesData, null, 2)}</pre>
      {/* Render your data as needed */}
    </ul>
  );
};

export default ProjectDetail;

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const id = ctx.params?.pageId;

  // Make a request to the Notion API
  const resBlocks = await fetch(
    `https://api.notion.com/v1/blocks/${id}/children`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Notion-Version": "2022-06-28",
      },
    }
  );

  const resPages = await fetch(`https://api.notion.com/v1/pages/${id}`, {
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
      projectId: id,
      blocksData: blocksData.results,
      pagesData,
    },
  };
};
