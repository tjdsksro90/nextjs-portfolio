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
  FilesText?: {
    rich_text: { plain_text: string }[];
  };
  FilesSize?: {
    rich_text: { plain_text: string }[];
  };
  FilesFirst: {
    files: PropertiesFilesType[] | [];
  };
  FilesFirstText?: {
    rich_text: { plain_text: string }[];
  };
  FilesFirstSize?: {
    rich_text: { plain_text: string }[];
  };
  FilesSlide: {
    files: PropertiesFilesType[] | [];
  };
  FilesSlideText?: {
    rich_text: { plain_text: string }[];
  };
  FilesSlideSize?: {
    rich_text: { plain_text: string }[];
  };
  FilesSlide2: {
    files: PropertiesFilesType[] | [];
  };
  FilesSlideText2?: {
    rich_text: { plain_text: string }[];
  };
  FilesSlideSize2?: {
    rich_text: { plain_text: string }[];
  };
  FilesSlide3: {
    files: PropertiesFilesType[] | [];
  };
  FilesSlideText3?: {
    rich_text: { plain_text: string }[];
  };
  FilesSlideSize3?: {
    rich_text: { plain_text: string }[];
  };
  Site: {
    url: string;
  };
  Site2: {
    url: string;
  };
  Site3: {
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
