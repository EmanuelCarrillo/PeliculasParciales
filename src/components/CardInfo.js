import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { fetchCatalogs } from "../services/urls";

const CardInfo = (props) => {
  return (
    <Card sx={{ height: "400px" }}>
      <CardMedia
        component="img"
        height="175px"
        image={fetchCatalogs.fetchImage(props.item.backdrop_path)}
        alt="image"
      />
      <CardContent>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 1,
          }}
          gutterBottom
          variant="h5"
          style={{ fontWeight: "bold" }}

        >
          {props.item.title || props.item.name}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 5,
          }}
          variant="body2"
          color="text.secondary"
        >
          {props.item.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={props.handleOpen}>Ver más</Button>
      </CardActions>
    </Card>
  );
};

export default CardInfo;
