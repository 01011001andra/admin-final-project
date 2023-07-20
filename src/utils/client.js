import { client } from "./helper";

export const postUndangan = (body) => {
  return client.post("/undangan", body);
};

export const getUndangan = () => {
  return client.get(``);
};

export const deleteUndangan = (id) => {
  return client.delete(`/undangan/${id}`);
};

export const updateUndangan = (body) => {
  return client.put(`/undangan/${body.id}`, body);
};
