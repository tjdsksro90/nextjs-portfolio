import Seo from '@/components/Seo';
import Hero from '@/components/home/Hero';

export default function Home() {
  return (
    <div className="container px-5 mx-auto md:px-14">
      <Seo title="Home" />
      <section className="flex flex-col items-center justify-center min-h-screen text-gray-600 body-font">
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <Hero />
        </div>
      </section>
    </div>
  );
}
