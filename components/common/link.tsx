import Link from 'next/link';
import ExternalIcon from './external-icon';

interface Props {
  href: string;
  text: string | React.ReactNode; // html 형태로 그대로 넘기고 싶을 때 필요;
  className?: string;
  disabled?: boolean;
  disabledText?: string;
  label?: string; // 아이콘만 있는 링크의 이름 (스크린리더용)
  preferSiteName?: boolean; // URL에 [사이트명]이 있으면 text 대신 사이트명을 보여준다
  showIcon?: boolean; // 새 창으로 열린다는 표시 아이콘
}

const CommonLink = ({
  href,
  text,
  className = 'mb-1',
  disabled = false,
  disabledText = '서비스 종료',
  label,
  preferSiteName = false,
  showIcon = false,
}: Props) => {
  // URL에서 실제 URL과 상태 텍스트 분리
  const parseUrl = (url: string) => {
    // "(서비스 종료)" 같은 패턴이 포함되어 있는지 확인 (소괄호만)
    const disabledPattern = /\(서비스\s*종료\)|\(종료\)|\(서비스\s*중단\)/i;
    const isDisabled = disabledPattern.test(url);

    // 대괄호 안의 텍스트 추출 (사이트명 정보)
    const squareBracketMatch = url.match(/\[([^\]]+)\]/);
    const siteName = squareBracketMatch ? squareBracketMatch[1] : null;

    // 실제 URL 추출 (대괄호와 소괄호 모두 제거)
    const cleanUrl = url
      .replace(/\s*\[[^\]]*\]\s*/g, '')
      .replace(/\s*\([^)]*\)\s*/g, '')
      .trim();

    return {
      url: cleanUrl,
      isDisabled,
      siteName, // 대괄호 안의 사이트명
    };
  };

  const { url: cleanUrl, isDisabled: urlDisabled, siteName } = parseUrl(href);
  const isLinkDisabled = disabled || urlDisabled;
  const content = preferSiteName && siteName ? siteName : text;
  const suffix = !preferSiteName && siteName ? <span className="ml-1 opacity-70">[{siteName}]</span> : null;

  // 종료된 링크: 링크 모양(아이콘)을 빼고 한 줄로, 상태를 글자로 표시
  if (isLinkDisabled) {
    return (
      <span className={`${className} whitespace-nowrap opacity-60 cursor-not-allowed`} aria-disabled="true">
        <span className="line-through">{content}</span>
        {suffix}
        <span className="ml-1.5 no-underline">{disabledText}</span>
      </span>
    );
  }

  return (
    <Link href={cleanUrl} legacyBehavior>
      <a className={className} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
        {content}
        {suffix}
        {showIcon && <ExternalIcon />}
      </a>
    </Link>
  );
};

export default CommonLink;
