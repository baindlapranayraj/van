import "./App.css";
import { Navigate, Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./server";

function App() {
  let UserAuth = true;

  return (
    <>
      <Nav />
      <div className="min-h-screen">
        {!UserAuth ? <Navigate to={"/login"} /> : <Outlet />}
      </div>
      <Footer />
    </>
  );
}

export default App;
