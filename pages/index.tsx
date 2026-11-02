import Seo from '@/components/Seo';
import Hero from '@/components/home/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';

const Home = () => {
  return (
    <>
      <Seo title="Home" />
      {/* 히어로 영역에만 격자 바탕 (가운데에서 바깥으로 흐려짐) */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
          aria-hidden
        />
        {/* 히어로를 화면 높이에 고정하지 않아 아래 '최근 프로젝트'가 첫 스크롤 안에 보인다 */}
        <section className="relative flex items-center max-w-6xl px-5 py-16 mx-auto md:py-24 md:px-8">
          <div className="flex flex-col-reverse items-center w-full gap-12 md:flex-row md:gap-16">
            <Hero />
          </div>
        </section>
      </div>
      <FeaturedProjects />
    </>
  );
};

export default Home;
