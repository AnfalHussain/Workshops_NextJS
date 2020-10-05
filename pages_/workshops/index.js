//Translation
import useTranslation from "next-translate/useTranslation";

import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import WorkshopCard from "../../components/Workshop/WorkshopCard";

//Material-ui
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));
const GET_WORKSHOPS = gql`
  query {
    workshops {
      id
      name
      description
      price
      image
    }
  }
`;

const Workshops = () => {
  const { t, lang } = useTranslation();

  const { data, loading, error } = useQuery(GET_WORKSHOPS);
  const classes = useStyles();

  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  if (data.workshops) console.log("data.workshops.workshops", data.workshops);
  return (
    <Fragment>
      {t("common:title")}
      <Box m={3} alignItems="center" justifyContent="center">
        {data.workshops && (
          <Grid container className={classes.root} spacing={6}>
            {data.workshops.map((workshop) => (
              <WorkshopCard key={workshop.id} workshop={workshop} />
            ))}
          </Grid>
        )}
      </Box>
    </Fragment>
  );
};

export default Workshops;
