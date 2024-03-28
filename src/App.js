import React from "react";
import {
  Route,
  BrowserRouter  as Router,
  Routes
} from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="" element={<First />} />
          <Route path="2" element={<Second />} />
          <Route path="3" element={<Third />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
