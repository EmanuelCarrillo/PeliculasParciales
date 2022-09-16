import React, { useState, useEffect } from "react";
import { fetchCatalogs } from "../services/urls";
import {
  retrieveDetail,
  retrieveGeneros,
  retrievePeliculas,
} from "../store/actions/peliculas.actions";
import { useDispatch, useSelector } from "react-redux";
import SelectField from "./SelectField";
import { Typography, Pagination, Stack, IconButton, Grid } from "@mui/material";
import { Backspace } from "@mui/icons-material";
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

  const clearData = () => {
    setGenero("");
    setPage(1);
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
        style={{ marginTop: "5%", marginBottom: "1%", fontWeight: "bold" }}
        variant="h4"
      >
        Catalogo de peliculas
      </Typography>

      <div style={{ width: "50%" }}>
        <Stack direction="row" spacing={2}>
          <SelectField
            id="genero"
            name="genero"
            onChange={handleSelectChange}
            variant="outlined"
            label="Genero"
            opciones={generos}
            value={genero}
          />
          <IconButton variant="outlined" onClick={clearData}>
            <Backspace />
          </IconButton>
        </Stack>
      </div>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        style={{ margin: "1%" }}
      />

      <Grid container spacing={2} style={{ width: "80%" }}>
        {peliculas &&
          peliculas.map((item, key) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
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
      <DialogComponent
        open={open}
        handleClose={() => setOpen(false)}
        detallePelicula={detallePelicula}
      ></DialogComponent>
    </div>
  );
};

export default ListPelicula;
