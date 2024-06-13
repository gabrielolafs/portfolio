import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TopNavBar from "./components/TopNavBar.tsx";

const Cabinet = lazy(() => import("./routes/Cabinet.tsx"));
// const NotFound = lazy(() => import("./routes/NotFound.tsx"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <TopNavBar />
        <Routes>
          <Route path="/" element={<Cabinet />} />
          {/*<Route path="*" element={<NotFound />} />*/}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
