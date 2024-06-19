import Image from "next/image";
import React from "react";

interface Props {
  src: string;
}

const CommonImage = ({ src }: Props) => {
  return (
    <Image
      className="rounded-t-xl"
      src={src}
      alt="cover image"
      width="1920"
      height="1080"
      layout="responsive"
      objectFit="cover"
      quality={100}
    />
  );
};

export default CommonImage;
