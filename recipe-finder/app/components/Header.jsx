"use client"

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="py-5 bg-slate-300">
      <div>
        <Link href="/">
          <h1 className="text-5xl font-bold text-center text-blue-700">Foodie</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
