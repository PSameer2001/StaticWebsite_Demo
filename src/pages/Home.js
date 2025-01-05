import React from "react";
import StatGrid from "../components/stats/StatGrid";
import MapChart from "../components/charts/MapChart";
import VehicleChart from "../components/charts/VehicleChart";

const Home = () => {
  return (
    <>
      <StatGrid />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        {/* <div className="flex flex-wrap gap-2"> */}
        <MapChart />
        <VehicleChart />
      </div>
    </>
  );
};

export default Home;
