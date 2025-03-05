import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen homepage">
      <div className="absolute w-4/5 text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <h1 className="my-5 text-5xl">Explore food from around the world</h1>
        <Link className="px-4 py-2 text-xl bg-gray-300 rounded cursor-pointer shadow-gray-50 hover:bg-blue-500 hover:text-white" href={`/types`}>List of Cuisines</Link>
      </div>
    </div>
  );
}
