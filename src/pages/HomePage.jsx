import React from "react";
import NewArrivals from "../components/NewArrivals";
import Banner from "../components/Banner";
import Adds from "../components/Adds";
import AddsTwo from "../components/AddsTwo";
import BestSeller from "../components/BestSeller";
import SpeacialOffers from "../components/SpeacialOffers";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Adds />
      <NewArrivals />
      <BestSeller />
      <AddsTwo />
      <SpeacialOffers />
    </>
  );
};

export default HomePage;
