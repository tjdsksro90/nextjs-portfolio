import person from '../public/me.jpg';
import Seo from '@/components/Seo';
import CommonImage from '@/components/common/image';

const About = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col px-5 py-24 mx-auto">
        <Seo title="About" />
        <div className="mx-auto lg:w-4/6">
          <div className="flex flex-col mt-10 sm:flex-row">
            <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 overflow-hidden text-gray-400 bg-gray-200 rounded-full">
                <CommonImage
                  src={person}
                  width={100}
                  height={100}
                  wrap="w-full h-full flex justify-center"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <h2 className="mt-4 text-lg font-medium text-primary title-font">윤호준</h2>
                <div className="w-12 h-1 mt-2 mb-4 bg-indigo-500 rounded"></div>
                <p className="text-base">FE Engineer</p>
              </div>
            </div>
            <div className="pt-4 mt-4 text-center border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
              <p className="mb-4 text-lg leading-relaxed break-keep">
                <span className="block mb-4 text-2xl font-semibold leading-normal text-primary">
                  경험은 어디든 도움이 된다고 생각하는 개발자
                </span>
                전공은 <span className="text-indigo-500">시각디자인</span>학과로 디자인 회사에서 4년정도 근무했습니다.
                회사 내에 웹팀이 있었고, 웹팀과의 업무협업을 하면서 개발일에 관심을 가지게 되었습니다. 이후 개발 공부를
                하게 되었고 <span className="text-indigo-500">UI/UX를 잘 고려</span>할 줄 알기 때문에 많은 의견을 내고
                <span className="text-indigo-500">프로젝트의 퀄리티를 향상시키는데 많은 도움을 주는 개발자</span>라고
                생각합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
