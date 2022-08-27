import React from "react";
import Header from "./header";
import Layout from "./layout";

const FullLayout = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-4">
      <div className="row-span-3">
        <Layout />
      </div>
      <div className="col-span-2">
        <Header />
      </div>
    </div>
  );
};

export default FullLayout;
