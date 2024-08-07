import Link from 'next/link';
import MailIcon from '/public/icons/mail.svg';
import GithubIcon from '/public/icons/github.svg';
import TistoryIcon from '/public/icons/tistory.svg';
import InstagramIcon from '/public/icons/instagram.svg';
import CommonLink from './common/link';

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
            © 2024 Portfolio —
            <a href="https://tailwindcss.com/" rel="noopener noreferrer" className="ml-1 text-gray-600" target="_blank">
              Tailwind Nextjs Theme
            </a>
          </p>
          <span className="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
            <CommonLink
              href="mailto:tjdsksro90@gmail.com"
              text={<MailIcon className="w-5 h-5" fill="currentColor" />}
              className="flex items-center justify-center text-gray-500 cursor-pointer"
            />
            <CommonLink
              href="https://github.com/tjdsksro90"
              text={<GithubIcon className="w-5 h-5" fill="currentColor" />}
              className="flex items-center justify-center ml-3 text-gray-500 cursor-pointer"
            />
            <CommonLink
              href="https://gmrdlsrkswnl.tistory.com/"
              text={<TistoryIcon className="w-4 h-4" fill="currentColor" />}
              className="flex items-center justify-center ml-3 text-gray-500 cursor-pointer"
            />
            <CommonLink
              href="https://www.instagram.com/hojun456"
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
