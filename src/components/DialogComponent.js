import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { fetchCatalogs } from "../services/urls";
const DialogComponent = (props) => {
  return (
    <div>
      {props.detallePelicula && (
        <Dialog open={props.open} onClose={props.handleClose}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <DialogTitle variant="h5" style={{ fontWeight: "bold" }}>
              Detalle de la pelicula:
            </DialogTitle>
          </div>

          <DialogContent>
            <Card>
              <CardMedia
                component="img"
                height="300px"
                image={fetchCatalogs.fetchImage(
                  props.detallePelicula.poster_path
                )}
                alt="image"
              />
              <CardContent>
                <Typography
                  variant="h5"
                  gutterBottom
                  style={{ fontWeight: "bold" }}
                >
                  {props.detallePelicula.title || props.detallePelicula.name}
                </Typography>
                <Typography gutterBottom style={{ fontWeight: "bold" }}>
                  Descripción:
                </Typography>
                <Typography gutterBottom>
                  {props.detallePelicula.overview}
                </Typography>
                <Typography gutterBottom style={{ fontWeight: "bold" }}>
                  Fecha de lanzamiendo:
                </Typography>
                <Typography gutterBottom>
                  {props.detallePelicula.release_date}
                </Typography>
                <Typography gutterBottom style={{ fontWeight: "bold" }}>
                  Géneros:
                </Typography>
                {props.detallePelicula &&
                  props.detallePelicula.genres.map((item, index) => {
                    return (
                      <Typography key={index} gutterBottom>
                        {item.name}
                      </Typography>
                    );
                  })}
              </CardContent>
            </Card>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
};

export default DialogComponent;
