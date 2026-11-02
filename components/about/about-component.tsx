import person from '/public/me.jpg';
import Image from 'next/image';
import TitleAnimaion from '../common/title-animaion';
import { SocialLinks } from '../Footer';

const HIGHLIGHTS = [
  { label: 'Experience', value: '프론트엔드 개발 7년차' },
  { label: 'Role', value: 'Frontend Engineer' },
  { label: 'Strength', value: 'UI/UX를 고려한 개발' },
];

const AboutComponent = () => {
  return (
    <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-16">
      <aside className="flex flex-col items-center p-8 text-center surface md:items-start md:text-left md:self-start md:sticky md:top-24">
        <div className="relative w-24 h-24 overflow-hidden rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
          <Image className="object-cover" src={person} alt="윤호준 프로필 사진" fill
            sizes="96px"
            placeholder="blur"
            blurDataURL={person}
          />
        </div>
        <h3 className="mt-5 text-xl font-semibold">윤호준</h3>
        <p className="mt-1 text-sm">FE Engineer</p>
        <SocialLinks className="mt-6" />
      </aside>
      <div>
        <h3 className="mb-6 text-2xl font-semibold leading-snug md:text-3xl">
          <TitleAnimaion text="경험은 어디든 도움이 된다고 생각하는 개발자" />
        </h3>
        <p className="mb-10 text-base leading-loose md:text-lg">
          전공은 <span className="font-medium text-main">시각디자인</span>학과로 디자인 회사에서 4년정도 근무했습니다.
          회사 내에 웹팀이 있었고, 웹팀과의 업무협업을 하면서 개발일에 관심을 가지게 되었습니다. 이후 개발 공부를
          하게 되었고 <span className="font-medium text-main">UI/UX를 잘 고려</span>할 줄 알기 때문에 많은 의견을 내고
          <span className="font-medium text-main"> 프로젝트의 퀄리티를 향상시키는데 많은 도움을 주는 개발자</span>라고
          생각합니다.
        </p>
        <dl className="grid gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map(({ label, value }) => (
            <div key={label} className="p-5 surface">
              <dt className="mb-2 font-mono text-[11px] tracking-widest uppercase text-zinc-400">{label}</dt>
              <dd className="text-sm font-medium text-primary">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default AboutComponent;
