export interface BlockText {
  type: string;
  text: {
    content: string;
    link?: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href?: string | null;
}

export interface ProjectDetailType {
  object: string;
  id: string;
  parent: {
    type: string;
    page_id: string;
  };
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  has_children: boolean;
  archived: boolean;
  in_trash: boolean;
  type: string;
  heading_1: { rich_text: BlockText[] };
  heading_2: { rich_text: BlockText[] };
  heading_3: { rich_text: BlockText[] };
  bulleted_list_item: { rich_text: BlockText[] };
  paragraph: { rich_text: BlockText[] };
}
