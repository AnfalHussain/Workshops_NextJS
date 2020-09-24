import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function AddressForm() {
  return (
    <React.Fragment>
      <Box m={3} alignItems="center" justifyContent="center">
        <Typography variant="h4" align="center">
          Add a workshop
        </Typography>
        <Grid container spacing={3} m={3}>
          <Grid item xs={12}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Workshop name"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="description"
              label="Description"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField id="price" name="price" label="Price" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
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
    </React.Fragment>
  );
}
