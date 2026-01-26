import Link from 'next/link';

interface Props {
  href: string;
  text: string | React.ReactNode; // html 형태로 그대로 넘기고 싶을 때 필요;
  className?: string;
  disabled?: boolean;
  disabledText?: string;
}

const CommonLink = ({ 
  href, 
  text, 
  className = 'mb-1',
  disabled = false,
  disabledText = '(서비스 종료)'
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
    const cleanUrl = url.replace(/\s*\[[^\]]*\]\s*/g, '').replace(/\s*\([^)]*\)\s*/g, '').trim();
    
    return { 
      url: cleanUrl, 
      isDisabled,
      siteName // 대괄호 안의 사이트명
    };
  };

  const { url: cleanUrl, isDisabled: urlDisabled, siteName } = parseUrl(href);
  const isLinkDisabled = disabled || urlDisabled;

  if (isLinkDisabled) {
    return (
      <div className={`${className} text-gray-500`}>
        <span>{text}</span>
        {siteName && <span className="ml-2 text-sm">[{siteName}]</span>}
        <span className="ml-2 text-sm">{disabledText}</span>
      </div>
    );
  }

  return (
    <Link href={cleanUrl} legacyBehavior>
      <a className={className} target="_blank" rel="noopener noreferrer">
        {text}
        {siteName && <span className="ml-2 text-sm text-gray-600">[{siteName}]</span>}
      </a>
    </Link>
  );
};

export default CommonLink;
