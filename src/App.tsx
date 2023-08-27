import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import pathnames from "./routes/index.route";
import MainLayout from "./layouts";
import Home from "./Pages/Home";
import LanguageTranslation from "./Pages/LanguageTranslation";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={pathnames.home} element={<MainLayout />}>
          <Route path={pathnames.home} element={<Home />} />
          <Route path={pathnames.LanguageTranslation} element={<LanguageTranslation />} />
        </Route>
      </Routes>
    </div>
  );
};  

export default App;
