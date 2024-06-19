export interface Rroperties {}

export interface ProjectResultType {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: {
    object: string;
    id: string;
  };
  properties: PropertiesType;
  cover: {
    file: { url: string };
    external: { url: string };
  };
}

interface PropertiesType {
  Name: {
    title: { plain_text: string }[];
  };
  Description: {
    rich_text: { plain_text: string }[];
  };
  Files: {
    files: PropertiesFilesType[] | [];
  };
  Site: {
    url: string;
  };
  Site2: {
    url: string;
  };
  Github: {
    url: string;
  };
  Youtube: {
    url: string;
  };
  Tags: {
    multi_select: { id: string; name: string; color: string }[];
  };
  WorkPeriod: {
    date: {
      start: string;
      end: string;
    };
  };
}

interface PropertiesFilesType {
  file: {
    url: string;
  };
}
