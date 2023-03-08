import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ imgPath, heading, content, linkURL }) {
  return (
    <div className="max-w-sm bg-gray-900 rounded-md bg-clip-padding backdrop-filter  bg-opacity-60
    ">
      <img
        className="mx-auto mt-2 mb-4 w-36 h-36 rounded-full "
        src={imgPath}
        alt=""
      />
      <div className="p-5">
        <ul>
          <li>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              {heading}
            </h5>
          </li>
          <li>
            <p className="mb-3 font-normal text-gray-500">{content}</p>
          </li>
          <li>
            <Link
              to={linkURL}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
