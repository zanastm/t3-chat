import React from "react";
import Header from "./header";
import Layout from "./layout";

const FullLayout = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col">
      <div className="row-span-3">
        <div className="w-full">
          <Layout />
        </div>
      </div>
      <div className="col-span-2">
        <div className="w-full">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default FullLayout;
