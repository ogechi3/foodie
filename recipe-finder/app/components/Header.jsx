"use client"

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname().split("/")
    const currentArea = pathname[2]
    const recipeID = pathname[3]
    console.log(pathname)
  return (
    <div className="flex items-center justify-between px-2 py-5 bg-slate-300">
      <div>
        <Link href="/">
          <h1 className="text-5xl font-bold text-center text-blue-700">Foodie</h1>
        </Link>
      </div>
      {
        pathname && currentArea && (
            <Link className="p-4 text-xl font-bold text-white bg-blue-500 rounded
            " href={recipeID ? `/types/${currentArea} ` : "/types"}>
                Back to {recipeID ? `${currentArea} recipes` :'recipe types'}
            </Link>
        )
      }
      
    </div>
  );
};

export default Header;
