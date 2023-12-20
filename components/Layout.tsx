import Footer from "./Footer";
import Header from "./Header";
import type { AppType } from "next/app";

type AppLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => {
  return (
    <div className="bg-primary">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
