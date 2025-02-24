import React from "react";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router";
import Dashboard from "../../pages/Dashboard";

const Body = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Body;
