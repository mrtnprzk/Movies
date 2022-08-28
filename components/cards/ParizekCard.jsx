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
          <p className="text-lg text-gray-700 font-semibold">
            Hi! My name is Martin Parizek and I created this side project in
            August 2022 to show what I learnt while working mainly with React,
            Next.js and Tailwind CSS.
            I thought about a project that could easily make people find their
            favourite movies while having a space to store them at the same
            time. That is why I build this user-friendly app where you can
            search for whatever movie you have in mind, and keep it safe in a
            favorite list. Try it, enjoy it and feel free to leave any
            suggestion on what I could improve on the coding side. Lastly, if
            you want to get to know me a little more, you can check the personal
            info at the Footer. <br />
            Thanks for reading, hope you like it! 😊
          </p>
        </div>
      </div>
    </>
  );
};

export default ParizekCard;
