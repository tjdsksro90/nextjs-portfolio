import Seo from '@/components/Seo';
import MainTitle from '@/components/common/main-title';
import AboutComponent from '@/components/about/about-component';

const About = () => {
  return (
    <section className="container min-h-screen px-5 mx-auto text-gray-600 body-font md:px-14">
      <Seo title="About" />
      <MainTitle main="About" />
      <AboutComponent />
    </section>
  );
};

export default About;
