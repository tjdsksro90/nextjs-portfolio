import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useRouter } from 'next/router';

type MenuItemType = [string, string, boolean];

function Header() {
  const router = useRouter();
  const MENU_ITEM: Record<string, MenuItemType> = {
    home: ['홈', '/', false],
    about: ['소개', '/about', false],
    projects: ['프로젝트', '/projects', false],
    contact: ['연락하기', 'https://open.kakao.com/o/sKGqxszg', true],
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="flex flex-col flex-wrap items-center p-5 md:container md:mx-auto md:flex-row">
        <Link href="/" legacyBehavior>
          <a className="flex items-center mb-4 font-medium title-font md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">포트폴리오</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          {Object.values(MENU_ITEM).map((item, index) => {
            const activeClass = `mr-5 relative after:content-[''] text-indigo-500 font-semibold after:bg-indigo-500 after:w-full after:absolute after:left-0 after:bottom-[-10px] after:h-[3px] after:rounded-md`;
            const passiveClass = 'mr-5';
            const isActive = router.pathname.startsWith(item[1]);
            const linkClass = isActive ? activeClass : passiveClass;
            if (item[2]) {
              return (
                <Link legacyBehavior href={item[1]}>
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
