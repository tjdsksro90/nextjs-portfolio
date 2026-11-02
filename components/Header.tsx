import Link from 'next/link';
import classNames from 'classnames';
import ThemeToggle from './ThemeToggle';
import { useRouter } from 'next/router';
import MainIcon from '/public/icons/main.svg';
import { MENU_ITEMS } from '@/config/site';

const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/75 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/75">
      <div className="flex items-center justify-between h-16 max-w-6xl gap-3 px-4 sm:px-5 mx-auto md:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <MainIcon
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 p-1.5 text-white transition-colors bg-zinc-900 rounded-lg group-hover:bg-indigo-600 dark:bg-zinc-50 dark:text-zinc-900 dark:group-hover:bg-indigo-400"
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline text-primary">윤호준 포트폴리오</span>
        </Link>
        <div className="flex items-center min-w-0 gap-2">
          <nav className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto text-[13px] sm:text-sm [scrollbar-width:none]">
            {Object.entries(MENU_ITEMS).map(([key, { label, path, isExternal }]) => {
              const isActive =
                path === MENU_ITEMS.home.path ? router.pathname === path : router.pathname.startsWith(path);
              const linkClass = classNames(
                'px-2.5 sm:px-3 py-1.5 rounded-full whitespace-nowrap font-medium',
                isActive
                  ? 'bg-zinc-100 text-zinc-900 hover:text-zinc-900 dark:bg-zinc-800/80 dark:text-zinc-50 dark:hover:text-zinc-50'
                  : 'text-zinc-500 dark:text-zinc-400',
              );

              return isExternal ? (
                <Link legacyBehavior href={path} key={key}>
                  <a className={linkClass} target="_blank" rel="noopener noreferrer">
                    {label}
                  </a>
                </Link>
              ) : (
                <Link className={linkClass} href={path} key={key} aria-current={isActive ? 'page' : undefined}>
                  {label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
