import Image from "next/image";
import React from "react";

const RecipeList = ({ recipes, type }) => {
  console.log(recipes);

  return (
    <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes?.map((recipe, idx) => {
        return <div className="rounded bg-slate-400" key={idx}>
            <Image src={recipe.strMealThumb} alt="Recipe Image" width={500} height={500}/>
        </div>;
      })}
    </div>
  );
};

export default RecipeList;
