import {
  RETRIEVE_PELICULAS,
  RETRIEVE_PELICULA,
  RETRIEVE_GENEROS,
} from "../actions/types";

const initialState = {
  detallePelicula: null,
  peliculas: [],
  generos: [],
};

const peliculasReducer = function (state = initialState, { payload, type }) {
  switch (type) {
    case RETRIEVE_PELICULAS: {
      return {
        ...state,
        peliculas: payload,
      };
    }
    case RETRIEVE_PELICULA: {
      return {
        ...state,
        detallePelicula: payload,
      };
    }
    case RETRIEVE_GENEROS: {
      return {
        ...state,
        generos: payload,
      };
    }
    default:
      return state;
  }
};
export default peliculasReducer;
