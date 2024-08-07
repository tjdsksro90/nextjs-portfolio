import Link from 'next/link';
import Animation from './Animation';
import TitleAnimaion from '../common/title-animaion';
import ArrowIcon from '/public/icons/arrow.svg';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-14 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-bold title-font md:text-4xl/tight xl:text-5xl/tight">
          <TitleAnimaion text="안녕하세요!#윤호준입니다." />
        </h1>
        <p className="mb-8 leading-relaxed break-keep">
          저의 포트폴리오에 오신 것을 환영합니다 - 현재 사이트는 NEXTJS로 개발되있습니다. 여가 시간에는 사이드
          프로젝트를 개발하고 그에 대해 블로그에 글을 올리는 것을 좋아합니다. 방문해주셔서 감사합니다!
        </p>
        <div className="flex justify-center">
          <Link className="flex items-center gap-2 btn-project" href={'/projects'}>
            <span>프로젝트 보러가기</span>
            <span className="w-5">
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
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Animation />
      </div>
    </>
  );
};

export default Hero;
