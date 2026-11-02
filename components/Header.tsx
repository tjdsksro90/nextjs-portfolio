import Link from 'next/link';
import classNames from 'classnames';
import ThemeToggle from './ThemeToggle';
import { useRouter } from 'next/router';
import MainIcon from '/public/icons/main.svg';
import ExternalIcon from './common/external-icon';
import { MENU_ITEMS } from '@/config/site';

const Header = () => {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/75 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/75">
      <div className="flex items-center justify-between h-16 max-w-6xl gap-3 px-5 mx-auto md:px-8">
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="윤호준 포트폴리오 홈">
          <MainIcon
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 p-1.5 text-white transition-colors bg-zinc-900 rounded-lg group-hover:bg-indigo-600 dark:bg-zinc-50 dark:text-zinc-900 dark:group-hover:bg-indigo-400"
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline text-primary">윤호준 포트폴리오</span>
        </Link>
        <div className="flex items-center min-w-0 gap-1 sm:gap-2">
          <nav aria-label="주요 메뉴" className="flex items-center gap-0.5 sm:gap-1 text-[13px] sm:text-sm">
            {Object.entries(MENU_ITEMS).map(([key, { label, path, isExternal }]) => {
              const isHome = path === MENU_ITEMS.home.path;
              const isActive = isHome ? router.pathname === path : router.pathname.startsWith(path);
              const linkClass = classNames(
                // 휴대폰에서도 누르기 쉬운 44px 높이. '홈'은 로고가 대신하므로 휴대폰에서 숨겨 가로 넘침을 막는다
                'inline-flex items-center gap-1 min-h-[44px] sm:min-h-0 px-2 sm:px-3 sm:py-1.5 rounded-full whitespace-nowrap font-medium',
                isHome && 'hidden sm:inline-flex',
                isActive
                  ? 'bg-zinc-100 text-zinc-900 hover:text-zinc-900 dark:bg-zinc-800/80 dark:text-zinc-50 dark:hover:text-zinc-50'
                  : 'text-zinc-600 dark:text-zinc-400',
              );

              return isExternal ? (
                <Link legacyBehavior href={path} key={key}>
                  <a
                    className={linkClass}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} (카카오톡 오픈채팅, 새 창)`}
                  >
                    {label}
                    <ExternalIcon className="w-3 h-3" />
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
