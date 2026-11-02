import Seo from '@/components/Seo';
import MainTitle from '@/components/common/main-title';
import AboutComponent from '@/components/about/about-component';

const About = () => {
  return (
    <section className="max-w-6xl min-h-screen px-5 pb-24 mx-auto md:px-8">
      <Seo title="About" />
      <MainTitle main="About" />
      <AboutComponent />
    </section>
  );
};

export default About;
