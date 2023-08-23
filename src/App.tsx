

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; 
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/first-page" element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/" element={<Navigate to="/first-page" />} />
      </Routes>
    </Router>
  );
};

export default App;
