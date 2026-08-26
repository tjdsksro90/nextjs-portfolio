import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { useRouter } from 'next/router';
import MainIcon from '/public/icons/main.svg';
import { MENU_ITEMS } from '@/config/site';

const Header = () => {
  const router = useRouter();

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
          {Object.entries(MENU_ITEMS).map(([key, [label, path, isExternal]]) => {
            const isActive = path === '/' ? router.pathname === path : router.pathname.startsWith(path);
            const linkClass = `mr-5 ${isActive ? "relative after:content-[''] text-indigo-500 font-semibold after:bg-indigo-500 after:w-full after:absolute after:left-0 after:bottom-[-10px] after:h-[3px] after:rounded-md" : ''}`;

            return isExternal ? (
              <Link legacyBehavior href={path} key={key}>
                <a className={linkClass} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </Link>
            ) : (
              <Link className={linkClass} href={path} key={key}>
                {label}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
