import MailIcon from '/public/icons/mail.svg';
import GithubIcon from '/public/icons/github.svg';
import TistoryIcon from '/public/icons/tistory.svg';
import InstagramIcon from '/public/icons/instagram.svg';
import CommonLink from './common/link';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/config/site';

export const SocialLinks = ({ className = '' }: { className?: string }) => {
  // 아이콘만 있는 링크라 label(스크린리더용 이름)과 title(마우스 툴팁)을 함께 준다. 누르기 쉬운 44px
  const iconClass =
    'flex items-center justify-center w-11 h-11 transition-colors border rounded-full border-zinc-200 text-zinc-500 hover:text-indigo-600 hover:border-indigo-300 dark:border-zinc-800 dark:text-zinc-400 dark:hover:text-indigo-400 dark:hover:border-indigo-500/50';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <CommonLink
        href={SOCIAL_LINKS.email}
        label="이메일 보내기"
        text={<MailIcon className="w-4 h-4" fill="currentColor" aria-hidden />}
        className={iconClass}
      />
      <CommonLink
        href={SOCIAL_LINKS.github}
        label="GitHub (새 창)"
        text={<GithubIcon className="w-4 h-4" fill="currentColor" aria-hidden />}
        className={iconClass}
      />
      <CommonLink
        href={SOCIAL_LINKS.blog}
        label="티스토리 블로그 (새 창)"
        text={<TistoryIcon className="w-3.5 h-3.5" fill="currentColor" aria-hidden />}
        className={iconClass}
      />
      <CommonLink
        href={SOCIAL_LINKS.instagram}
        label="Instagram (새 창)"
        text={
          <InstagramIcon className="w-4 h-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden />
        }
        className={iconClass}
      />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-4 px-5 py-8 mx-auto sm:flex-row md:px-8">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-primary">윤호준 · Frontend Engineer</p>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            © {SITE_CONFIG.year} 윤호준 · Next.js와 Notion으로 만들었습니다
          </p>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
