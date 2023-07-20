import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components";
import { MainLayout } from "./layouts";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Acara = lazy(() => import("./pages/acara"));
const Ceramah = lazy(() => import("./pages/ceramah"));
const Keuangan = lazy(() => import("./pages/keuangan"));

const App = () => {
  return (
    <>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/acara" element={<Acara />} />
            <Route path="/ceramah" element={<Ceramah />} />
            <Route path="/keuangan" element={<Keuangan />} />
            <Route
              path="*"
              element={
                <div className="w-full h-full flex items-center justify-center">
                  <h1 className="text-4xl font-bold">NotFound</h1>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </MainLayout>
    </>
  );
};

export default App;
