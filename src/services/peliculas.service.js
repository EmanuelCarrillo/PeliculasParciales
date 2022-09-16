import http from "./http.service";

export const getData = (type) => {
  return http.get(type);
};
