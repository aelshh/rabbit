import { Outlet } from "react-router";
import Footer from "../Common/Footer";
import Header from "../Common/Header";

const UserLayout = () => {
  return (
    <>
      {/* header */}
      <Header />
      {/* main content  */}
      <main>
        <Outlet />
      </main>
      {/* footer  */}
      <Footer />
    </>
  );
};

export default UserLayout;
