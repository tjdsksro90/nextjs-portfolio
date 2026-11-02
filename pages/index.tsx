import Seo from '@/components/Seo';
import Hero from '@/components/home/Hero';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      <Seo title="Home" />
      <div
        className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        aria-hidden
      />
      <section className="relative flex items-center max-w-6xl min-h-[calc(100vh-4rem)] px-5 py-20 mx-auto md:px-8">
        <div className="flex flex-col-reverse items-center w-full gap-12 md:flex-row md:gap-16">
          <Hero />
        </div>
      </section>
    </div>
  );
};

export default Home;
