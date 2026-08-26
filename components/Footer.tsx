import Link from 'next/link';
import MailIcon from '/public/icons/mail.svg';
import GithubIcon from '/public/icons/github.svg';
import TistoryIcon from '/public/icons/tistory.svg';
import InstagramIcon from '/public/icons/instagram.svg';
import CommonLink from './common/link';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/config/site';

const Footer = () => {
  return (
    <footer className="body-font">
      <div>
        <div className="container flex flex-col items-center px-5 py-6 mx-auto sm:flex-row">
          <Link href="/" legacyBehavior>
            <a className="flex items-center justify-center font-medium title-font md:justify-start">
              <span className="ml-3 text-xl">윤호준</span>
            </a>
          </Link>
          <p className="mt-4 text-sm text-gray-500 sm:ml-6 sm:mt-0">
            © {SITE_CONFIG.year} {SITE_CONFIG.title} —
            <a href={SITE_CONFIG.themeUrl} rel="noopener noreferrer" className="ml-1 text-gray-600" target="_blank">
              Tailwind Nextjs Theme
            </a>
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
            <CommonLink
              href={SOCIAL_LINKS.email}
              text={<MailIcon className="w-5 h-5" fill="currentColor" />}
              className="flex items-center justify-center text-gray-500 cursor-pointer"
            />
            <CommonLink
              href={SOCIAL_LINKS.github}
              text={<GithubIcon className="w-5 h-5" fill="currentColor" />}
              className="flex items-center justify-center ml-3 text-gray-500 cursor-pointer"
            />
            <CommonLink
              href={SOCIAL_LINKS.blog}
              text={<TistoryIcon className="w-4 h-4" fill="currentColor" />}
              className="flex items-center justify-center ml-3 text-gray-500 cursor-pointer"
            />
            <CommonLink
              href={SOCIAL_LINKS.instagram}
              text={<InstagramIcon className="w-5 h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />}
              className="flex items-center justify-center ml-3 text-gray-500 cursor-pointer"
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
