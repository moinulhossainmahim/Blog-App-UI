import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import Register from "./components/pages/register/Register";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/write' element={<Write />} />
        <Route path='/login' element={<Login />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/post/:postId' element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
