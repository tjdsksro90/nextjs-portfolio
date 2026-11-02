interface Props {
  text: string;
  className?: string;
  highlight?: string; // 강조할 단어 (예: '윤호준')
  highlightClassName?: string; // 강조 단어에 줄 클래스
}

/**
 * 글자가 하나씩 나타나는 제목
 * 서버 렌더 단계부터 글자를 바로 그려서 JS가 늦어도 제목이 보이고(애니메이션은 CSS만 사용),
 * 스크린리더는 sr-only 문장 전체를 한 번에 읽는다(글자 조각은 aria-hidden). 움직임 줄이기 설정이면 애니메이션 없이 표시.
 */
const TitleAnimaion = ({ text, className, highlight, highlightClassName = '' }: Props) => {
  // 강조 단어의 시작 위치 (없으면 -1)
  const highlightStart = highlight ? text.indexOf(highlight) : -1;
  const isHighlighted = (index: number) =>
    highlightStart !== -1 && index >= highlightStart && index < highlightStart + (highlight?.length ?? 0);

  return (
    <span className={className}>
      <span className="sr-only">{text.replace(/#/g, ' ')}</span>
      {text.split('').map((char, index) =>
        // <br/>은 잘 안쓰는 #으로 구분
        char === '#' ? (
          <br key={index} />
        ) : (
          <span
            key={index}
            aria-hidden
            className={`inline-block whitespace-pre motion-reduce:![animation:none] ${
              isHighlighted(index) ? highlightClassName : ''
            }`}
            style={{ animation: `fadeIn 0.5s ease-out ${0.2 + index * 0.04}s both` }}
          >
            {char}
          </span>
        ),
      )}
    </span>
  );
};

export default TitleAnimaion;
