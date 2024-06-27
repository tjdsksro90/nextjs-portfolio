import Link from 'next/link';

interface Props {
  href: string;
  text: string;
}

const CommonLink = ({ href, text }: Props) => {
  return (
    <Link className="mr-5" href={href} legacyBehavior>
      <a className="mb-1" target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </Link>
  );
};

export default CommonLink;
