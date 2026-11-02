import Link from 'next/link';
import Animation from './Animation';
import TitleAnimaion from '../common/title-animaion';
import { SocialLinks } from '../Footer';
import { MENU_ITEMS } from '@/config/site';
import ArrowIcon from '/public/icons/arrow.svg';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center md:items-start md:text-left md:w-1/2 animate-fade-in">
        <h1 className="mb-6 text-4xl font-bold leading-[1.15] md:text-5xl xl:text-6xl">
          <TitleAnimaion
            text="안녕하세요!#윤호준입니다."
            highlight="윤호준"
            highlightClassName="text-indigo-600 dark:text-indigo-400"
          />
        </h1>
        <p className="max-w-lg mb-8 text-base leading-relaxed md:text-lg">
          시각디자인을 전공하고 디자인 회사에서 4년을 일한 뒤,{' '}
          <span className="font-medium text-primary">7년째 프론트엔드를 개발</span>하고 있습니다. 디자인을 이해하는
          눈으로 화면의 완성도를 끝까지 끌어올립니다.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <Link className="btn-project" href={MENU_ITEMS.projects.path}>
            <span>프로젝트 보러가기</span>
            <ArrowIcon
              className="w-4 h-4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              aria-hidden
            />
          </Link>
          <Link className="btn-ghost" href={MENU_ITEMS.about.path}>
            소개 보기
          </Link>
        </div>
        <SocialLinks className="mt-10" />
      </div>
      <div className="w-4/5 max-w-md md:w-1/2 lg:max-w-lg" aria-hidden>
        <Animation />
      </div>
    </>
  );
};

export default Hero;
