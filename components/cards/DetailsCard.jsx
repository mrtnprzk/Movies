import React from "react";
import Link from "next/link";

const DetailsCard = (props) => {

  const {Poster, Title, imdbRating, Genre, Country, Year, Runtime, Plot, Director, Writer, Actors} = props.movie
  const {isFavorite} = props

  const noImage = "/images/no-image.jpg";

  return (
    <div className="flex flex-col justify-center items-center bg-white space-y-8 max-w-md p-10 my-10 mx-auto border border-gray-300 shadow-md rounded-xl md:max-w-lg lg:flex-row lg:max-w-3xl lg:space-y-0 lg:space-x-8">
      <img
        className="rounded lg:w-2/5"
        src={Poster != "N/A" ? Poster : noImage}
        alt={Title}
      />

      <div>
        <div>
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-semibold">{Title}</h2>
            <div className="flex items-center mt-0.5">
              <p className="mr-1 text-md font-bold text-gray-900">
                {imdbRating}
                <span className="text-gray-400">/10</span>
              </p>
              <svg
                className="w-8 h-8 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 22 22"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          <p className="text-lg text-red-600">{Genre}</p>
          <p className="text-sm text-red-500">
            {Country}, {Year}, {Runtime}
          </p>
        </div>
        <p className="my-3 py-2 text-gray-800 text-sm border border-x-0">
          {Plot}
        </p>
        <div className="text-gray-700">
          <p>
            <span className="font-semibold">Director:</span> {Director}
          </p>
          <p>
            <span className="font-semibold">Writer:</span> {Writer}
          </p>
          <p>
            <span className="font-semibold">Actors:</span> {Actors}
          </p>
        </div>
        <div className="flex justify-center mt-5">
          {!isFavorite ? (
            <button
              onClick={props.add}
              className="px-5 rounded-full py-2 border border-black hover:bg-yellow-400 hover:shadow-md duration-500"
            >
              Add to Favorite
            </button>
          ) : (
            <Link href="/favorite">
              <button className="px-5 rounded-full py-2 border border-black bg-yellow-400 hover:scale-105 hover:shadow-md duration-500">
                Already in Favorite
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailsCard