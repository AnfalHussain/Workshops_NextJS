import React, { Component } from "react";
// import { AiFillDollarCircle } from "react-icons/ai";
// import { FaCartPlus } from "react-icons/fa";
// import { RiAddCircleFill } from "react-icons/ri";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AddCircleIcon from "@material-ui/icons/AddCircle";
//Material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function WorkshopCard({ workshop }) {
  const classes = useStyles();

  return (
    <Grid key={workshop.id} item xs={12} sm={6} md={4} xl={3}>
      <Box m={3} alignItems="center" justifyContent="center">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={workshop.image}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h"
                component="h2"
                align="center"
              >
                {workshop.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {workshop.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <MonetizationOnIcon style={{ fill: "#c5198c" }} />
                {workshop.price} KD
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Box m="auto">
              <Button size="small" color="primary">
                <AddCircleIcon style={{ fill: "#c5198c" }} size={30} />
                Add to Cart
              </Button>{" "}
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}
