import { getData } from "../../services/peliculas.service";
import {
  RETRIEVE_GENEROS,
  RETRIEVE_PELICULA,
  RETRIEVE_PELICULAS,
} from "./types";

export const retrievePeliculas = (type, filter) => async (dispatch) => {
  try {
    const res = await getData(type);

    if (filter !== "") {
      const filtered = res.data.results.filter((item) => {
        return item.genre_ids.includes(parseInt(filter));
      });
      dispatch({
        type: RETRIEVE_PELICULAS,
        payload: filtered,
      });
    } else {
      dispatch({
        type: RETRIEVE_PELICULAS,
        payload: res.data.results,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const retrieveGeneros = (type) => async (dispatch) => {
  try {
    const res = await getData(type);
    dispatch({
      type: RETRIEVE_GENEROS,
      payload: res.data.genres,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveDetail = (type) => async (dispatch) => {
  try {
    const res = await getData(type);
    dispatch({
      type: RETRIEVE_PELICULA,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
