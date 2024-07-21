import Seo from '@/components/Seo';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen mx-auto">
      <Seo title="404" />
      <section className="mx-4 my-10">
        <h2 className="mb-8 text-6xl font-semibold text-center md:mb-10 md:text-8xl">404 ERROR</h2>
        <div className="flex flex-col items-center justify-center gap-10 break-keep">
          <p className="text-base text-center text-primary">
            죄송합니다. 페이지를 찾을 수 없습니다.
            <br />
            존재하지 않는 주소를 입력하셨거나, <br />
            요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다
          </p>
          <Link className="btn-project" href={'/'}>
            홈으로
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
