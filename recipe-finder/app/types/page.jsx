import Link from "next/link";
import React from "react";

const fetchRecipeAreas = async () => {
    // await new Promise((res) => setTimeout(res, 5000)); this causes the delay
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const response = await res.json();
  return response.meals.map((a) => a.strArea);
};

const page = async () => {
  const areas = await fetchRecipeAreas();
  return (
    <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {areas.map((a, idx) => (
        <Link
          className="py-10 text-2xl font-bold text-center bg-gray-300 rounded hover:text-white shadow-gray-500 hover:bg-blue-500"
          key={idx}
          href={`/types/${a}`}
        >
          {a}
        </Link>
      ))}
    </div>
  );
};

export default page;
