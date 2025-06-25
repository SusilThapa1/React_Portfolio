import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Mainpage from "./Pages/Mainpage";

function App() {
  return (
    <>
      <Header />
      <Mainpage />
      <Footer />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
