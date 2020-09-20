import { Button } from "@material-ui/core";

import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";
import WorkshopCard from "../../components/Workshop/WorkshopCard";

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
  const { data, loading, error } = useQuery(GET_WORKSHOPS);

  if (loading) return <p>Loading</p>;
  if (error) return <p>ERROR</p>;
  if (!data) return <p>Not found</p>;
  if (data.workshops) console.log("data.workshops.workshops", data.workshops);
  return (
    <Fragment>
      {data.workshops &&
        data.workshops.map((workshop) => (
          <WorkshopCard key={workshop.id} workshop={workshop} />
        ))}
    </Fragment>
  );
};

export default Workshops;
