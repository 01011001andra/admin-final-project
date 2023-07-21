import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loading } from "./components";
import { MainLayout } from "./layouts";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Acara = lazy(() => import("./pages/acara"));
const Ceramah = lazy(() => import("./pages/ceramah"));
const Keuangan = lazy(() => import("./pages/keuangan"));

// Tambah Form Page
const TambahUndangan = lazy(() => import("./pages/acara/TambahUndangan"));
const TambahDokumentasi = lazy(() => import("./pages/acara/TambahDokumentasi"));
const TambahCeramah = lazy(() => import("./pages/ceramah/TambahCeramah"));
const TambahKas = lazy(() => import("./pages/keuangan/TambahKas"));
const TambahInfak = lazy(() => import("./pages/keuangan/TambahInfak"));

const App = () => {
  return (
    <>
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/acara" element={<Acara />} />
            <Route path="/tambahundangan" element={<TambahUndangan />} />
            <Route path="/tambahdokumentasi" element={<TambahDokumentasi />} />
            <Route path="/ceramah" element={<Ceramah />} />
            <Route path="/tambahceramah" element={<TambahCeramah />} />
            <Route path="/keuangan" element={<Keuangan />} />
            <Route path="/tambahkas" element={<TambahKas />} />
            <Route path="/tambahinfak" element={<TambahInfak />} />
            <Route
              path="*"
              element={
                <div className="flex items-center justify-center w-full h-full">
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
