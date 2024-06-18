import React from "react";
import classNames from "classnames";
import { ProjectDetailType } from "@/types/project-detail";

export const Heading1Block = ({ block }: { block: ProjectDetailType }) => (
  <li key={block.id} className="mt-10 text-4xl font-semibold mb-7 sm:text-6xl">
    {block.heading_1.rich_text.map(text => text.plain_text).join(" ")}
  </li>
);

export const Heading2Block = ({ block }: { block: ProjectDetailType }) => (
  <li key={block.id} className="mt-5 text-2xl font-semibold mb-7 sm:text-4xl">
    {block.heading_2.rich_text.map(text => text.plain_text).join(" ")}
  </li>
);

export const Heading3Block = ({ block }: { block: ProjectDetailType }) => (
  <li key={block.id} className="mt-5 mb-3 text-xl font-semibold sm:text-2xl">
    {block.heading_3.rich_text.map(text => text.plain_text).join(" ")}
  </li>
);

export const ParagraphBlock = ({ block }: { block: ProjectDetailType }) => (
  <li key={block.id} className="mb-2">
    {block.paragraph.rich_text.map((text, index) => (
      <span
        key={index}
        className={classNames({
          "font-bold": text.annotations.bold,
          italic: text.annotations.italic,
          "line-through": text.annotations.strikethrough,
          underline: text.annotations.underline,
          "px-1 bg-code text-red-500": text.annotations.code,
        })}
      >
        {text.plain_text}
      </span>
    ))}
  </li>
);

export const BulletedListItemBlock = ({
  block,
}: {
  block: ProjectDetailType;
}) => (
  <li key={block.id} className="mb-2 ml-6 list-disc">
    {block.bulleted_list_item.rich_text.map((text, index) => (
      <span
        key={index}
        className={classNames({
          "font-bold": text.annotations.bold,
          italic: text.annotations.italic,
          "line-through": text.annotations.strikethrough,
          underline: text.annotations.underline,
          "px-1 bg-code text-red-500": text.annotations.code,
        })}
      >
        {text.plain_text}
      </span>
    ))}
  </li>
);
