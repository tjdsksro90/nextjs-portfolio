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
        <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium border rounded-full border-zinc-200 bg-white/60 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-300">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-emerald-400 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-500" />
          </span>
          Frontend Engineer
        </span>
        <h1 className="mb-6 text-4xl font-bold leading-[1.15] md:text-5xl xl:text-6xl">
          <TitleAnimaion
            text="안녕하세요!#윤호준입니다."
            highlight="윤호준"
            highlightClassName="text-indigo-600 dark:text-indigo-400"
          />
        </h1>
        <p className="max-w-lg mb-8 text-base leading-relaxed md:text-lg">
          저의 포트폴리오에 오신 것을 환영합니다. 현재 사이트는{' '}
          <span className="font-medium text-primary">Next.js</span>와{' '}
          <span className="font-medium text-primary">Notion</span>으로 만들어졌습니다. 여가 시간에는 사이드 프로젝트를
          개발하고, 그 과정을 블로그에 기록하는 것을 좋아합니다.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <Link className="btn-project" href={MENU_ITEMS.projects.path}>
            <span>프로젝트 보러가기</span>
            <span className="w-4">
              <ArrowIcon
                width="auto"
                height="auto"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </span>
          </Link>
          <Link className="btn-ghost" href={MENU_ITEMS.about.path}>
            소개 보기
          </Link>
        </div>
        <SocialLinks className="mt-10" />
      </div>
      <div className="relative w-4/5 max-w-md md:w-1/2 lg:max-w-lg">
        <div className="absolute rounded-full -inset-8 bg-indigo-500/10 blur-3xl dark:bg-indigo-500/15" aria-hidden />
        <div className="relative">
          <Animation />
        </div>
      </div>
    </>
  );
};

export default Hero;
