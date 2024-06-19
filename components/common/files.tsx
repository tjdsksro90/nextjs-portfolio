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
          wrap="w-[710px] max-w-full mb-2"
          width={710}
          height={710}
        />
      ))}
    </div>
  );
};

export default CommonFiles;
