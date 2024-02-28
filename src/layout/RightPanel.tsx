import React from "react";

import AdCard from "@/components/cards/AdCard";

const CategoriesTab: React.FC = () => {
  

  return (
    <div className="py-1 px-2 text-center my-5">
      <h2 className="text-lg font-bold">Recommended Trips</h2>
          <AdCard imageUrl={"/travels/travel1.jpeg"} author={""} title={"Brilliant Golf Resort in Thracian Cliffs"} description={"From 1050$ P.P"}/>
          <AdCard imageUrl={"/travels/travel1.jpeg"} author={""} title={"Brilliant Golf Resort in Thracian Cliffs"} description={"From 1050$ P.P"}/>
    </div>
  );
};

export default CategoriesTab;
