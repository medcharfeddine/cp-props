import "./App.css";
import Profile from "./profile/Profile";
import Me from "./images/med.jpg";
import { styleImage } from "./profile/Profile.jsx";

function App() {
  const styleBack = {
    background: "#f3f3f3",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  return (
    <div style={styleBack} className="App">
      <Profile
        fullName="Mohamed Charfeddine"
        bio="i'm working on it"
        profession="Junior FS-JS Web Developer"
      >
        <img src={Me} alt="" style={styleImage} />
      </Profile>
    </div>
  );
}

export default App;
