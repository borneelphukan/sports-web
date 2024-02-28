import React from "react";
import DefaultLayout from "@/layout/DefaultLayout";


import CategoriesTab from "@/layout/RightPanel";
import Schedule from "@/layout/Schedule";

const Home: React.FC = () => {
  return (
    <DefaultLayout>
    <div className="flex justify-center items-center">
      <div className="container">
        <div className="w-full flex flex-col md:flex-row lg:flex-row">
        <div className="my-8 md:w-4/5 lg:w-4/5">
        <Schedule />
      </div>
      <div className="mb-10 mx-auto md:w-1/5 lg:w-1/5 md:ml-5 lg:ml-5">
        <CategoriesTab />
      </div>
    </div>
  </div>
</div>

    </DefaultLayout>
  );
};

export default Home;
