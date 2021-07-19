import Footer from '../Footer';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="LayoutContainer">
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
