import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { gql, useMutation } from "@apollo/client";

const ADD_WORKSHOP = gql`
  mutation AddWorkshop(
    $name: String!
    $description: String!
    $image: String!
    $price: Int!
  ) {
    addWorkshop(
      name: $name
      description: $description
      image: $image
      price: $price
    ) {
      name
      description
      image
      price
    }
  }
`;

export default function AddWorkshopForm(props) {
  const [addWorkshop, { data }] = useMutation(ADD_WORKSHOP);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const changeHandler = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "description") setDescription(e.target.value);
    if (e.target.name === "image") setImage(e.target.value);
    if (e.target.name === "price") setPrice(parseInt(e.target.value, 10));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addWorkshop({
      variables: {
        name: name,
        description: description,
        image: image,
        price: price,
      },
    });
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <Box m={3} alignItems="center" justifyContent="center">
          <Typography variant="h4" align="center">
            Add a workshop
          </Typography>
          <Grid container spacing={3} m={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="name"
                value={name}
                label="Workshop name"
                fullWidth
                autoComplete="given-name"
                onChange={changeHandler}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                id="description"
                name="description"
                value={description}
                label="Description"
                onChange={changeHandler}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="price"
                name="price"
                value={price}
                label="Price"
                onChange={changeHandler}
                fullWidth
              />
            </Grid>

            <Grid item xs={12}>
              <input
                label="image"
                name="image"
                value={image}
                accept="image/*"
                style={{ display: "none" }}
                id="raised-button-file"
                onChange={changeHandler}
                multiple={false}
                type="file"
              />
              <label htmlFor="raised-button-file">
                <Button variant="raised" component="span">
                  Upload
                </Button>
              </label>
            </Grid>
          </Grid>
        </Box>
        <div className="pt-3 pb-3">
          <input type="submit" value="Add Workshop" />
        </div>
      </form>
    </React.Fragment>
  );
}
