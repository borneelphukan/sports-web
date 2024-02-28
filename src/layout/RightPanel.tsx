import AdCard from "@/components/cards/AdCard";

const CategoriesTab: React.FC = () => {

  return (
    // Season Years

    // Recommended Trips
    <div className="py-1 px-2 text-center my-5">
      <h2 className="text-lg font-semibold">Recommended Trips</h2>
      <ul>
        <AdCard imageUrl={"/travels/travel1.jpeg"} author={""} title={"Brilliant Golf Resort in Thracian Cliffs"} description={"From 1050$ P.P"} link={""}/>
        <AdCard imageUrl={"/travels/travel1.jpeg"} author={""} title={"Brilliant Golf Resort in Thracian Cliffs"} description={"From 1050$ P.P"} link={""}/>
      </ul>
    </div>
  );
};

export default CategoriesTab;
