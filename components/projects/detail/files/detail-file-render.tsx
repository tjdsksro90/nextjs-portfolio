import CommonFiles from "@/components/common/files";
import { ProjectResultType } from "@/types/projects";

interface Props {
  data: ProjectResultType;
}

const FileRender = ({ data }: Props) => {
  const files = data.properties.Files.files;

  return (
    <CommonFiles files={files} />
  );
};

export default FileRender;
