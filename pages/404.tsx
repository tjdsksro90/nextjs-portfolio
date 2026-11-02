import Seo from '@/components/Seo';
import { MENU_ITEMS } from '@/config/site';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-5">
      <Seo title="404" />
      <section className="flex flex-col items-center text-center animate-fade-in">
        <h1 className="mb-6 text-7xl font-bold md:text-9xl">404</h1>
        <p className="mb-10 text-base leading-relaxed">
          죄송합니다. 페이지를 찾을 수 없습니다.
          <br />
          존재하지 않는 주소를 입력하셨거나, <br className="sm:hidden" />
          요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
        </p>
        <Link className="btn-project" href={MENU_ITEMS.home.path}>
          홈으로
        </Link>
      </section>
    </div>
  );
};

export default NotFound;
