import { useEffect, useState } from 'react';

interface Character {
  char: string;
  key: number;
}

interface Props {
  text: string;
  className?: string;
  highlight?: string; // 강조할 단어 (예: '윤호준')
  highlightClassName?: string; // 강조 단어에 줄 클래스
}

const TitleAnimaion = ({ text, className, highlight, highlightClassName = '' }: Props) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [visible, setVisible] = useState<boolean[]>([]);

  // props로 받은 text를 한 글자씩 chars 배열에 넣어준다.
  useEffect(() => {
    let chars: Character[] = [];
    for (let i = 0; i < text.length; i++) {
      chars.push({
        char: text[i],
        key: i,
      });
    }
    setVisible(new Array(text.length).fill(false));
    setCharacters(chars);
  }, [text]);

  const handleAnimationEnd = (index: number) => {
    setVisible(prev => {
      const newVisible = [...prev];
      newVisible[index] = true;
      return newVisible;
    });
  };

  // 강조 단어의 시작 위치 (없으면 -1)
  const highlightStart = highlight ? text.indexOf(highlight) : -1;
  const isHighlighted = (index: number) =>
    highlightStart !== -1 && index >= highlightStart && index < highlightStart + (highlight?.length ?? 0);

  return (
    <span className={className}>
      {characters.map((char, index) =>
        // <br/>은 잘 안쓰는 #으로 구분
        char.char === '#' ? (
          <br key={char.key} />
        ) : (
          <span
            key={char.key}
            className={`inline-block whitespace-pre ${visible[index] ? 'opacity-100' : 'opacity-0'} ${
              isHighlighted(index) ? highlightClassName : ''
            }`}
            style={{
              animation: `fadeIn 0.5s ease-in-out ${0.5 + index * 0.05}s forwards`,
            }}
            onAnimationEnd={() => handleAnimationEnd(index)}
          >
            {char.char}
          </span>
        ),
      )}
    </span>
  );
};

export default TitleAnimaion;
