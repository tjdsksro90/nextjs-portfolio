import { PropertiesFilesType } from "@/types/projects";
import React from "react";
import CommonImage from "./image";

interface Props {
  files: PropertiesFilesType[] | [];
}

const CommonFiles = ({ files }: Props) => {
  return (
    <div className="">
      {files.map(aFile => (
        <CommonImage
          src={aFile.file.url}
          wrap="w-[500px] max-w-full"
          width={500}
          height={500}
        />
      ))}
    </div>
  );
};

export default CommonFiles;
