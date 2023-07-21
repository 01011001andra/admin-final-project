import { ceramahClient, undanganClient } from "./helper";

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
