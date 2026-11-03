import { useState } from 'react';

interface Props {
  skills: { name: string; count: number }[];
  selected: string | null;
  totalCount: number;
  onSelect: (skill: string | null) => void;
}

const chipClass = (active: boolean) =>
  `inline-flex items-center gap-1.5 min-h-[36px] px-3.5 text-sm font-medium transition-colors border rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 ${
    active
      ? 'text-white bg-zinc-900 border-zinc-900 dark:bg-zinc-50 dark:text-zinc-900 dark:border-zinc-50'
      : 'text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-900 dark:text-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:text-zinc-50'
  }`;

const countClass = (active: boolean) =>
  `text-xs tabular-nums ${active ? 'text-zinc-300 dark:text-zinc-500' : 'text-zinc-400 dark:text-zinc-500'}`;

// 기술이 많아 처음에는 많이 쓴 것만 보여주고 나머지는 펼쳐보기로
const COLLAPSED_COUNT = 12;

// 프로젝트에 쓴 기술을 한곳에 모아, 누르면 그 기술을 쓴 프로젝트만 보이게
const SkillFilter = ({ skills, selected, totalCount, onSelect }: Props) => {
  const [expanded, setExpanded] = useState(false);

  // 접혀 있어도 선택한 기술은 항상 보이게
  const visibleSkills = expanded
    ? skills
    : skills.filter((skill, index) => index < COLLAPSED_COUNT || skill.name === selected);
  const hiddenCount = skills.length - visibleSkills.length;

  return (
    <div role="group" aria-label="사용 기술로 프로젝트 거르기" className="flex flex-wrap w-full gap-2 mb-8">
      <button type="button" className={chipClass(selected === null)} aria-pressed={selected === null} onClick={() => onSelect(null)}>
        전체
        <span className={countClass(selected === null)}>{totalCount}</span>
      </button>
      {visibleSkills.map(skill => {
        const active = selected === skill.name;
        return (
          <button
            key={skill.name}
            type="button"
            className={chipClass(active)}
            aria-pressed={active}
            onClick={() => onSelect(active ? null : skill.name)}
          >
            {skill.name}
            <span className={countClass(active)}>{skill.count}</span>
          </button>
        );
      })}
      {(hiddenCount > 0 || expanded) && (
        <button
          type="button"
          className="inline-flex items-center min-h-[36px] px-3.5 text-sm font-medium transition-colors rounded-full text-main hover:bg-indigo-50 dark:hover:bg-indigo-400/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-expanded={expanded}
          onClick={() => setExpanded(prev => !prev)}
        >
          {expanded ? '접기' : `+${hiddenCount}개 더보기`}
        </button>
      )}
    </div>
  );
};

export default SkillFilter;
