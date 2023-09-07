import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import pathnames from "./routes/index.route";
import MainLayout from "./layouts";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Translate from "./Pages/Translate/Translate";
import Profile from "./Pages/Profile";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={pathnames.home} element={<MainLayout />}>
          <Route path={pathnames.home} element={<Home />} />
          <Route path={pathnames.profile} element={<Profile />} />
        </Route>
        <Route path={pathnames.translate} element={<Translate />} />
        <Route path={pathnames.login} element={<Login />} />
        <Route path={pathnames.signUp} element={<SignUp />} />
      </Routes>
    </div>
  );
};  

export default App;
