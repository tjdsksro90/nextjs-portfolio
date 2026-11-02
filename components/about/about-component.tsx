import person from '/public/me.jpg';
import Image from 'next/image';
import TitleAnimaion from '../common/title-animaion';
import { SocialLinks } from '../Footer';

// 문단에 없는 전공·이전 경력은 하이라이트 박스로 (역할은 프로필 카드에 이미 있음)
const HIGHLIGHTS = [
  { label: '경력', value: '프론트엔드 개발 7년차' },
  { label: '이전', value: '시각디자인 전공 · 디자인 회사 4년' },
  { label: '강점', value: 'UI/UX를 고려한 개발' },
];

const AboutComponent = () => {
  return (
    <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-16">
      <aside className="flex flex-col items-center p-8 text-center surface md:items-start md:text-left md:self-start md:sticky md:top-24">
        <div className="relative w-24 h-24 overflow-hidden rounded-2xl ring-1 ring-zinc-200 dark:ring-zinc-800">
          <Image
            className="object-cover"
            src={person}
            alt="윤호준 프로필 사진"
            fill
            sizes="96px"
            placeholder="blur"
            blurDataURL={person}
          />
        </div>
        <p className="mt-5 text-xl font-semibold text-primary">윤호준</p>
        <p className="mt-1 text-sm">Frontend Engineer</p>
        <p className="mt-4 text-sm leading-relaxed">경험은 어디든 도움이 된다고 생각합니다.</p>
        <SocialLinks className="mt-6" />
      </aside>
      <div>
        <h2 className="mb-6 text-2xl font-semibold leading-snug md:text-3xl">
          <TitleAnimaion text="디자인을 아는 개발자" />
        </h2>
        <p className="mb-10 text-base leading-loose md:text-lg">
          디자인 회사에서 웹팀과 협업하다 개발에 빠져 직접 만들기 시작했습니다. 화면을 그리던 눈으로 코드를 짜기
          때문에, 기획 단계부터 <span className="font-medium text-main">UI와 사용 흐름</span>에 의견을 내고{' '}
          <span className="font-medium text-main">결과물의 완성도를 끌어올리는 일</span>을 잘합니다.
        </p>
        <dl className="grid gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map(({ label, value }) => (
            <div key={label} className="p-5 surface">
              <dt className="mb-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400">{label}</dt>
              <dd className="text-sm font-medium text-primary">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default AboutComponent;
