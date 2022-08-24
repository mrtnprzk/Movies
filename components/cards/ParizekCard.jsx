import React from "react";
import Image from "next/image";

const ParizekCard = () => {
  return (
    <>
      <div className="group" tabIndex="1">
        <div className="flex flex-col items-center cursor-pointer ease">
          <p className="font-semibold text-red-600 text-xl mb-2">
            or read something about me.
          </p>

          <div className="transition duration-300 ease group-focus:-rotate-180 group-focus:text-red-600">
            <svg width="18" height="12">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                d="M1 1l8 8 8-8"
              />
            </svg>
          </div>
        </div>

        <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
          <div className="my-5">
              <Image
                src="/images/parizek.jpg"
                alt="Martin Parizek"
                width={250}
                height={250}
                className="rounded-full"
              />
          </div>
          <p className="text-lg font-semibold">
            Hi! My name is Martin Parizek and I created this project in August
            2022 to shw my skills and maybe find a right company for me.
          </p>
        </div>
      </div>
    </>
  );
};

export default ParizekCard;
