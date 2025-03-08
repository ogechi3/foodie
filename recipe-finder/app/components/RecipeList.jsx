import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeList = ({ recipes, type }) => {
  return (
    <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes?.map((recipe, idx) => {
        console.log(recipe);
        return (
          <div className="overflow-hidden rounded bg-slate-300" key={idx}>
            <Image
              src={recipe.strMealThumb}
              alt="Recipe Image"
              width={500}
              height={500}
            />
            <div className="">
              <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
              <Link
                href={`/types/${type}/${recipe.idMeal}`}
                className="block py-1 mt-5 text-center text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Get recipe details
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeList;
