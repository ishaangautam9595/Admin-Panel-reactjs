import "./App.css";
import Register from "./Pages/Credentials/Register";
import Signin from "./Pages/Credentials/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Protectedd from "./Pages/Credentials/Protectedd";
import ProfileContext from "./Context/ProfileContext";
import Layout from "./Layout/Layout";
import NotFound from "./Pages/Others/NotFound";
import { store } from "./store/store";
const App = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  axios.defaults.baseURL = "http://localhost:4000/api/";
  axios.defaults.headers = {
    Authorization: `Bearer ${token}`,
  };
  console.log("token");

  return (
    <div className="App">
      <BrowserRouter>
        <ProfileContext>
          {/* <Layout /> */}
          <Routes>
            <Route path="/" element={<Protectedd Component={Signin} />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Protectedd Component={Signin} />} />
            <Route path="/*" element={<Layout />} />
          </Routes>
        </ProfileContext>
      </BrowserRouter>
    </div>
  );
};
export default App;
