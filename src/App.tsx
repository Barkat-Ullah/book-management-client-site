import { Outlet } from "react-router";
import Navbar from "./shared/Navbar/Navbar";
import Footer from "./shared/Footer/Footer";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    </>
  );
}

export default App;
