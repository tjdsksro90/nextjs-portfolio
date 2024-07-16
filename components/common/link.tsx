import Link from 'next/link';

interface Props {
  href: string;
  text: string | React.ReactNode; // html 형태로 그대로 넘기고 싶을 때 필요;
  className?: string;
}

const CommonLink = ({ href, text, className = 'mb-1' }: Props) => {
  return (
    <Link href={href} legacyBehavior>
      <a className={className} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </Link>
  );
};

export default CommonLink;
