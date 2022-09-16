import React, { useState, useEffect } from "react";
import { fetchCatalogs } from "../services/urls";
import {
  retrieveDetail,
  retrieveGeneros,
  retrievePeliculas,
} from "../store/actions/peliculas.actions";
import { useDispatch, useSelector } from "react-redux";
import SelectField from "./SelectField";
import { Typography, Pagination, Grid } from "@mui/material";
import CardInfo from "./CardInfo";
import DialogComponent from "./DialogComponent";

const ListPelicula = () => {
  const [genero, setGenero] = useState("");
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const peliculas = useSelector(({ state }) => state.peliculas);
  const generos = useSelector(({ state }) => state.generos);
  const detallePelicula = useSelector(({ state }) => state.detallePelicula);

  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(retrievePeliculas(fetchCatalogs.fetchTrending(page), genero));
    dispatch(retrieveGeneros(fetchCatalogs.fetchGenres));
  }, [dispatch, genero, page]);

  const handleSelectChange = (e) => {
    setGenero(e.target.value);
  };

  

  const handleOpen = (id) => {
    dispatch(retrieveDetail(fetchCatalogs.fetchDetail(id)));
    setOpen(true);
  };
  return (
    <div
      style={{
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        width: "auto",
        height: "50vh",
        flexDirection: "column",
      }}
    >
      <Typography
        style={{ marginTop: "5%", fontWeight: "bold" }}
        variant="h4"
      >
        Buscador de Películas
      </Typography>

      <div style={{ marginTop: "1%", marginBottom: "1%", width: "50%" }}>
        <SelectField
          id="genero"
          name="genero"
          onChange={handleSelectChange}
          variant="outlined"
          label="Genero"
          opciones={generos}
          value={genero}
        />
      </div>

      <Grid container spacing={2} style={{ width: "80%" }}>
        {peliculas &&
          peliculas.map((item, key) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <CardInfo
                  key={key}
                  item={item}
                  handleOpen={() => handleOpen(item.id)}
                ></CardInfo>
                ;
              </Grid>
            );
          })}
      </Grid>
      <Pagination
        variant="outlined"
        shape="rounded"
        count={10}
        page={page}
        onChange={handleChange}
        style={{ margin: "1%" }}
      />
      <DialogComponent
        open={open}
        handleClose={() => setOpen(false)}
        detallePelicula={detallePelicula}
      ></DialogComponent>
    </div>
  );
};

export default ListPelicula;
