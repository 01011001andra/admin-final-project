import { ceramahClient, keuanganClient, undanganClient } from "./helper";

// kas
export const getKas = () => {
  return keuanganClient.get("/kas");
};
export const postKas = (body) => {
  return keuanganClient.post("/kas", body);
};
export const updateKas = (body) => {
  return keuanganClient.put(`/kas/${body.id}`, body);
};
export const deleteKas = (id) => {
  return keuanganClient.delete(`/kas/${id}`);
};

// infak
export const getInfak = () => {
  return keuanganClient.get("/layanan-infak");
};
export const postInfak = (body) => {
  return keuanganClient.post("/layanan-infak", body);
};
export const updateInfak = (body) => {
  return keuanganClient.put(`/layanan-infak/${body.id}`, body);
};
export const deleteInfak = (id) => {
  return keuanganClient.delete(`/layanan-infak/${id}`);
};

// ceramah
export const postCeramah = (body) => {
  return ceramahClient.post("/ceramah", body);
};
export const getCeramah = () => {
  return ceramahClient.get("/ceramah");
};
export const updateCeramah = (body) => {
  return ceramahClient.put(`/ceramah/${body.id}`, body);
};
export const deleteCeramah = (id) => {
  return ceramahClient.delete(`/ceramah/${id}`);
};

// undangan
export const postUndangan = (body) => {
  return undanganClient.post("/undangan", body);
};
export const getUndangan = () => {
  return undanganClient.get(`/undangan`);
};
export const deleteUndangan = (id) => {
  return undanganClient.delete(`/undangan/${id}`);
};
export const updateUndangan = (body) => {
  return undanganClient.put(`/undangan/${body.id}`, body);
};

// dokumentasi Acara
export const postDokumentasi = (body) => {
  return undanganClient.post("/dokumentasi_acara", body);
};
export const getDokumentasi = () => {
  return undanganClient.get(`/dokumentasi_acara`);
};
export const deleteDokumentasi = (id) => {
  return undanganClient.delete(`/dokumentasi_acara/${id}`);
};
export const updateDokumentasi = (body) => {
  return undanganClient.put(`/dokumentasi_acara/${body.id}`, body);
};
