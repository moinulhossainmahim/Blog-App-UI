import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Topbar from "./components/Topbar/Topbar";
import Login from "./components/pages/login/Login";
import Home from "./components/pages/home/Home";
import Register from "./components/pages/register/Register";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import { useGlobalContext } from "./context/context";

function App() {
  const { user } = useGlobalContext();
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
        <Route path='/write' element={user ? <Write /> : <Register />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/settings' element={user ? <Settings /> : <Register />} />
        <Route path='/posts/:postId' element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
