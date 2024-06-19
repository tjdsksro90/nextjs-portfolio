import Image from "next/image";
import React from "react";

interface Props {
  wrap?: string;
  src: string;
  className?: string;
  width: number;
  height: number;
}

const CommonImage = ({ src, className, wrap, width, height }: Props) => {
  return (
    <div className={wrap}>
      <Image
        className={className}
        src={src}
        alt="cover image"
        width={width}
        height={height}
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

export default CommonImage;
