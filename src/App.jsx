import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import profile from "./assets/profile.png";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div>
      {showIntro ? (
        <div className="intro">
          <img src={profile} className="profile" />
          <h1>Claire Vancleemput</h1>
          <p className="read-the-docs">Commerciale</p>
        </div>
      ) : (
        <div>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
