import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts";
import { Dashboard } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
