import Image from "next/image";
import React from "react";

const getRecipeDetails = async (id) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.json();
};

const page = async ({ params }) => {
  const recipeDetails = await getRecipeDetails(params.id);
  const details = recipeDetails.meals[0];
  const ingredients = Object.keys(details)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => details[ingKey])
    .filter(Boolean);
  console.log(details);
  console.log(ingredients);

  return (
    <div className="grid gird-cols-1 md:grid-cols-2">
      <div className="">
        <Image
          src={details.strMealThumb}
          width={500}
          height={500}
          alt="Recipe Image"
          className="w-full"
        />
      </div>
      <div className="p-5">
        <h1>
          Recipe Name:{" "}
          <span className="text-2xl font-bold">{details.strMeal}</span>
        </h1>
        <div className="mt-5 tags">
          <p>Ingredients List:</p>
          {ingredients.map((ing, idx) => (
            <span
              className="inline-block px-2 py-0 mb-2 mr-2 text-white bg-blue-500 rounded"
              key={idx}
            >
              {ing}
            </span>
          ))}
        </div>
        {details.strYoutube && (
          <div className="mt-3">
            <p>Video Link</p>
            <a
              target="_blank"
              className="text-blue-500"
              href={details.strYoutube}
            >
              {" "}
              How to Make {details.strMeal}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
