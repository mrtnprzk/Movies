import React from "react";
import Image from "next/image";

const ParizekCard = () => {
  return (
    <div className="w-112 bg-white text-center rounded-lg border border-gray-300 p-10 mb-16">
      <h3 className="font-bold text-6xl">No Result!</h3>
      <p className="font-semibold text-4xl text-gray-400">Use search bar</p>
      <p className="font-semibold text-4xl text-gray-400">to find a movie...</p>
      <p className="font-semibold text-red-600 text-xl mt-1 mb-5">
        or read something about me.
      </p>
      <Image
        src="/images/parizek.jpg"
        alt="Picture of the author"
        width={250}
        height={250}
        className="rounded-full"
      />
      <p className="text-lg font-semibold mt-5">
        Hi! My name is Martin Parizek and I created this project in August 2022
        to shw my skills and maybe find a right company for me.
      </p>
    </div>
  );
}

export default ParizekCard