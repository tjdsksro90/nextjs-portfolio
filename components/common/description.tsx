import React from "react";

interface Props {
  description: string;
}

const CommonDescription = ({ description }: Props) => {
  return <h3 className="mt-4 text-xl">{description}</h3>;
};

export default CommonDescription;
