import Footer from './Footer';
import Header from './Header';

type AppLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: AppLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
