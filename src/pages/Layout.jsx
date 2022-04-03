import { Outlet } from "react-router-dom";
import Nav from './navbar/nav';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <>
      <Nav/>
      <Outlet />
      <Footer/>

 </>
  )
};

export default Layout;