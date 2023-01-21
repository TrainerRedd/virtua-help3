import Navbar from "./pages/Navbar";
import "./styles.css";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import JoinUs from "./pages/JoinUs";
import MyProfile from "./pages/MyProfile";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/joinus" element={<JoinUs />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
