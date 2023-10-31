import "./index.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { General } from "./pages/General";
import { Registration } from "./pages/Registration";
import { Approvals } from "./pages/Approvals";
import { Users } from "./pages/Users";
import { Login } from "./pages/Login"
import { Signup } from "./pages/Signup"
import { Page404 } from "./pages/Page404";
import { useEffect, useState } from "react";



function App() {
const [userLogedIn,setUserLogedIn]=useState(false)

useEffect(()=>{
setUserLogedIn(localStorage.getItem("token"))
},[])
  return (
    <div className="App">
      <Router>
      { userLogedIn &&(<Sidebar/>)}
        <Routes>
       

          <Route path="/" element={userLogedIn ? <General />: <Login/>} />
          <Route path="/General" element={userLogedIn ? <General />: <Login/>  } />
          <Route path="/Registration" element={userLogedIn ? <Registration />: <Login/>  } />
          <Route path="/Approvals" element={userLogedIn ? <Approvals />: <Login/>  } />
          <Route path="/Users" element={userLogedIn ? <Users />: <Login/>  } />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="*" element={userLogedIn ? <Page404 />: <Login/>  } />




        </Routes>
      </Router>
    </div>
  );
}

export default App;
