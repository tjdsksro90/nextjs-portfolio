import { getColorClassName } from "@/utils/color-mapping";
import classNames from "classnames";
import React from "react";

interface Props {
  tags: {
    id: string;
    name: string;
    color: string;
  }[];
}

const CommonTags = ({ tags }: Props) => {
  return (
    <div className="flex flex-wrap items-start gap-2 mt-2">
      {tags.map(aTag => (
        <h6
          className={classNames(
            "px-2 py-1 rounded-md w-30",
            getColorClassName(aTag.color) // 동적 클래스 설정
          )}
          key={aTag.id}
        >
          {aTag.name}
        </h6>
      ))}
    </div>
  );
};

export default CommonTags;
