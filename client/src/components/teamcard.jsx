import * as FaIcons from "react-icons/fa";

export default function TeamCard({
    imgPath,
    instaLink,
    Name,
    Designation
}) {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400">
      <img
        className="mx-auto mb-4 w-36 h-36 rounded-full"
        src={imgPath}
        alt=""
      />
      <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {Name}
      </h3>
      <p>{Designation}</p>
      <ul className="flex justify-center mt-4 space-x-4">
        <li>
          <a
            href={instaLink}
            className="text-[#ea4c89] hover:text-gray-900 dark:hover:text-white"
            target={"_blank"}
          >
            <FaIcons.FaInstagram />
            
          </a>
        </li>
      </ul>
    </div>
  );
}
