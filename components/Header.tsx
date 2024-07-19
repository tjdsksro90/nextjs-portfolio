import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useRouter } from 'next/router';
import MainIcon from '/public/icons/main.svg';

type MenuItemType = [string, string, boolean];

function Header() {
  const router = useRouter();
  const MENU_ITEM: Record<string, MenuItemType> = {
    home: ['홈', '/', false],
    about: ['소개', '/about', false],
    projects: ['프로젝트', '/projects', false],
    blog: ['블로그', '/blog', false],
    contact: ['연락하기', 'https://open.kakao.com/o/sKGqxszg', true],
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="flex flex-col flex-wrap items-center p-5 md:container md:mx-auto md:flex-row">
        <Link href="/" className="flex items-center mb-4 font-medium title-font md:mb-0">
          <MainIcon
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
          />
          <span className="ml-3 text-xl">포트폴리오</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          {Object.values(MENU_ITEM).map((item, index) => {
            const activeClass = `mr-5 relative after:content-[''] text-indigo-500 font-semibold after:bg-indigo-500 after:w-full after:absolute after:left-0 after:bottom-[-10px] after:h-[3px] after:rounded-md`;
            const passiveClass = 'mr-5';
            const isActive = item[1] === '/' ? router.pathname === item[1] : router.pathname.startsWith(item[1]);
            const linkClass = isActive ? activeClass : passiveClass;
            if (item[2]) {
              return (
                <Link legacyBehavior href={item[1]} key={Object.keys(MENU_ITEM)[index]}>
                  <a className={linkClass} target="_blank" rel="noopener noreferrer">
                    {item[0]}
                  </a>
                </Link>
              );
            } else {
              return (
                <Link className={linkClass} href={item[1]} key={Object.keys(MENU_ITEM)[index]}>
                  {item[0]}
                </Link>
              );
            }
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
