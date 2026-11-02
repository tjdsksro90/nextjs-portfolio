interface Props {
  tags: {
    id: string;
    name: string;
    color: string;
  }[];
  wrap: string;
  max?: number; // 카드처럼 좁은 곳에서는 개수를 줄이고 나머지는 +N으로
}

// 기술 태그: 노션 색 대신 무채색 하나로 (포인트 색은 인디고 하나만)
const CommonTags = ({ tags, wrap, max }: Props) => {
  const visibleTags = max ? tags.slice(0, max) : tags;
  const hiddenCount = tags.length - visibleTags.length;

  return (
    <ul className={wrap}>
      {visibleTags.map(tag => (
        <li
          className="px-2 py-0.5 rounded-md text-xs font-medium border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
          key={tag.id}
        >
          {tag.name}
        </li>
      ))}
      {hiddenCount > 0 && (
        <li className="px-1 py-0.5 text-xs font-medium text-zinc-500 dark:text-zinc-400" aria-label={`외 ${hiddenCount}개`}>
          +{hiddenCount}
        </li>
      )}
    </ul>
  );
};

export default CommonTags;
