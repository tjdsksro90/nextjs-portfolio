import { ProjectDetailType } from "@/types/project-detail";
import {
  BulletedListItemBlock,
  Heading1Block,
  Heading2Block,
  Heading3Block,
  ParagraphBlock,
} from "./detail-blocks";

const BlockRender = ({ block }: { block: ProjectDetailType }) => {
  switch (block.type) {
    case "heading_1":
      return <Heading1Block block={block} />;
    case "heading_2":
      return <Heading2Block block={block} />;
    case "heading_3":
      return <Heading3Block block={block} />;
    case "paragraph":
      return <ParagraphBlock block={block} />;
    case "bulleted_list_item":
      return <BulletedListItemBlock block={block} />;
    default:
      return null;
  }
};

export default BlockRender;
