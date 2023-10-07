import "./index.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { General } from "./pages/General";
import { Registration } from "./pages/Registration";
import { Approvals } from "./pages/Approvals";
import { Repair } from "./pages/Repair";
import { Login } from "./pages/Login";
import { Page404 } from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar/>
        <Routes>
          <Route path="/" element={<General />} />
          <Route path="/General" element={<General />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Approvals" element={<Approvals />} />
          <Route path="/Repair" element={<Repair />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
