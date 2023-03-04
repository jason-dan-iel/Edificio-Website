import React from "react";

export default function EventPageCard({
  about,
  intro,
  guideLines,

  imgPath,
}) {
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow">
      <img
        className="mx-auto mb-4 w-full h-36 rounded-full"
        src={imgPath}
        alt=""
      />
      <div className="p-5">
        <ul>
          <li>
            <h5 className="mb-2 text-2xl font-bold tracking-tight">{about}</h5>
          </li>
          <li>
            <p className="mb-3 font-normal text-gray-700">{intro}</p>
          </li>
          <li>
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              Guidelines :
            </h5>
          </li>
        </ul>
      </div>
    </div>
  );
}
