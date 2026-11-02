import CommonLink from '../common/link';

interface Props {
  site?: string | null;
  site2?: string | null;
  site3?: string | null;
  github?: string | null;
  youtube?: string | null;
  className?: string;
}

const ProjectLinks = ({ site, site2, site3, github, youtube, className = '' }: Props) => {
  const links = [
    { href: site, text: '사이트' },
    { href: site2, text: '사이트 2' },
    { href: site3, text: '사이트 3' },
    { href: github, text: 'GitHub' },
    { href: youtube, text: '시연 영상' },
  ].filter((link): link is { href: string; text: string } => !!link.href);

  if (links.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map(({ href, text }) => (
        <CommonLink key={text} href={href} text={`${text} ↗`} className="chip-link" />
      ))}
    </div>
  );
};

export default ProjectLinks;
