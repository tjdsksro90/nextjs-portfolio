import Link from "next/link";
import React from "react";

interface Props {
  href: string;
  text: string;
}

const CommonLink = ({ href, text }: Props) => {
  return (
    <Link className="mr-5" href={href} legacyBehavior>
      <a target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </Link>
  );
};

export default CommonLink;
