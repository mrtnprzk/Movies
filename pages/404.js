import React from "react";
import Head from "next/head";
import Link from "next/link";

const Error = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className="flex flex-col justify-center items-center min-h-[75vh]">
        <h1 className="text-9xl font-extrabold text-black tracking-widest">
          404
        </h1>
        <div className="bg-red-600 text-gray-100 px-2 text-sm rounded rotate-12 absolute">
          Page Not Found
        </div>
        <Link href="/">
          <button className="mt-5">
            <a className="relative inline-block text-sm font-medium text-black group active:text-red-600 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-gray-500 rounded-md group-hover:translate-y-0 group-hover:translate-x-0"></span>
  
              <span className="relative block px-8 py-3 font-semibold bg-red-600 text-gray-100 rounded-md border border-gray-800">
                Go Home
              </span>
            </a>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Error;