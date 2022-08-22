import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white p-4 mb-4 border border-b-gray-300 fixed right-0 left-0 top-0 shadow z-20">

      <div className="flex justify-between items-center md:max-w-4xl mx-auto">
        <Link href="/">
          <a className="text-4xl font-semibold text-red-600">Movies</a>
        </Link>
        <div className="text-xl space-x-4">
          <Link href="/">
            <a className="hover:text-red-600 duration-500">Home</a>
          </Link>
          <Link href="/favorite">
            <a className="hover:text-red-600 duration-500">Favorite</a>
          </Link>
        </div>
      </div>
      
    </header>
  );
}

export default Header;