import React from "react";
import { Link } from "react-router-dom";


import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ItemCard = ( { item } ) => {
  return (
    <Card sx={{ width: 345, height: 350 }}>
      <CardMedia sx={{ height: 140 }} image={item.img} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.descripcion}
        </Typography>
        <Typography variant="h5" color="primary">
          ${item.price}
        </Typography>
      </CardContent>
      <CardActions style={{}}>
        <Link to={`/itemDetail/${item.id}`}>
          <Button
            variant="contained"
            size="small"
            sx={{ textTransform: "none" }}
          >
            Ver detalle
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
