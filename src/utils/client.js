import { client } from "./helper";

// undangan
export const postUndangan = (body) => {
  return client.post("/undangan", body);
};
export const getUndangan = () => {
  return client.get(`/undangan`);
};
export const deleteUndangan = (id) => {
  return client.delete(`/undangan/${id}`);
};
export const updateUndangan = (body) => {
  return client.put(`/undangan/${body.id}`, body);
};

// dokumentasi Acara
export const postDokumentasi = (body) => {
  return client.post("/dokumentasi_acara", body);
};
export const getDokumentasi = () => {
  return client.get(`/dokumentasi_acara`);
};
export const deleteDokumentasi = (id) => {
  return client.delete(`/dokumentasi_acara/${id}`);
};
export const updateDokumentasi = (body) => {
  return client.put(`/dokumentasi_acara/${body.id}`, body);
};
