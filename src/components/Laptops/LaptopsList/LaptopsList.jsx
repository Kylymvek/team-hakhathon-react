import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useContext } from "react";
import { laptopContext } from "../../../context/LaptopContextProvider";

import LaptopCard from "../LaptopCard/LaptopCard";

const LaptopsList = () => {
  const { laptopsArr, readLaptop } = useContext(laptopContext);

  useEffect(() => {
    readLaptop();
  }, []);

  return (
    <Grid
      sx={{ width: "100%" }}
      container
      direction="row"
      gap="15px"
      padding="10px 20px"
      flexWrap="wrap"
      mt="20px">
      {laptopsArr ? laptopsArr.map(item => <LaptopCard lapObj={item} />) : null}
    </Grid>
  );
};

export default LaptopsList;
