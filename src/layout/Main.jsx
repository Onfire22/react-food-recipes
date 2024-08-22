import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Main = () => {
  return (
    <main className="main">
      <section className="container main_section">
        <Header />
          <Outlet />
        <Footer />
      </section>
    </main>
  );
};

export default Main;