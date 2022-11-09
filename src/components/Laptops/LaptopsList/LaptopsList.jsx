import React, { useEffect, useState } from "react";
import { Grid, Pagination, Typography } from "@mui/material";
import { useContext } from "react";
import { laptopContext } from "../../../context/LaptopContextProvider";

import LaptopCard from "../LaptopCard/LaptopCard";
import { useSearchParams } from "react-router-dom";
import Filter from "../../Filter/Filter";

const LaptopsList = () => {
  const { laptopsArr, readLaptop, pageTotalCount } = useContext(laptopContext);

  const [paramsSearch, setParamsSearch] = useSearchParams();
  const [brand, setBrand] = useState("all");
  const [price, setPrice] = useState([0, 300000]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (brand === "all") {
      setParamsSearch({
        price_gte: price[0],
        price_lte: price[1],
        q: paramsSearch.get("q") || "",
        _page: page,
        _limit: 8,
      });
    } else {
      setParamsSearch({
        brand: brand,
        price_gte: price[0],
        price_lte: price[1],
        _page: page,
        _limit: 8,
      });
    }
  }, [paramsSearch, brand, price, page]);

  useEffect(() => {
    readLaptop();
  }, [pageTotalCount, paramsSearch]);

  return (
    <>
      <Grid sx={{ width: "40%" }} ml="40px" my="20px">
        <Typography variant="h4">Фильтрация</Typography>
        <Filter
          brand={brand}
          setBrand={setBrand}
          price={price}
          setPrice={setPrice}
        />
      </Grid>
      <Grid
        sx={{ width: "80%" }}
        container
        direction="row"
        justifyContent="space-evenly"
        gap="15px"
        padding="10px 20px"
        flexWrap="wrap"
        mx="auto"
        my="20px">
        {laptopsArr
          ? laptopsArr.map(item => <LaptopCard lapObj={item} />)
          : null}
      </Grid>
      <Grid
        sx={{ width: "30%", display: "flex", justifyContent: "center" }}
        mx="auto"
        my="10px">
        <Pagination
          count={+pageTotalCount}
          color="secondary"
          page={+page}
          onChange={(e, value) => setPage(value)}
        />
      </Grid>
    </>
  );
};

export default LaptopsList;
