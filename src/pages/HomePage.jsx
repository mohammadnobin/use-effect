import React from "react";
import NewArrivals from "../components/NewArrivals";
import Banner from "../components/Banner";
import Adds from "../components/Adds";
import AddsTwo from "../components/AddsTwo";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Adds />
      <NewArrivals />
      <AddsTwo />
    </>
  );
};

export default HomePage;
