import React from "react";
import Header from "./header";
import Layout from "./layout";
import Menu from "./Menu";

const FullLayout = () => {
  return (
    <div className="grid grid-rows-4 grid-cols-5">
      <div className="row-span-2 col-span-1 w-full">
        <Layout />
      </div>
      <div className="w-full">
        <Header />
      </div>
    </div>
  );
};

export default FullLayout;
