import profile from "./assets/profile.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src={profile} className="profile" />
      </div>
      <h1>Claire Vancleemput</h1>
      <div className="card"></div>
      <p className="read-the-docs">Commerciale</p>
    </>
  );
}

export default App;
