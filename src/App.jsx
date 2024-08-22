import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Main />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
