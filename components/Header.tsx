import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
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
          <Link className="mr-5" href={"/"}>
            홈
          </Link>
          <Link className="mr-5" href={"/projects"}>
            프로젝트
          </Link>
          <Link className="mr-5" href={"/"}>
            연락하기
          </Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
