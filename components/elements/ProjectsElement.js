import { ArrowUpRight } from "akar-icons";
import moment from "moment";
import NextLink from "next/link";

export default function ProjectsElements({
  imagesbanner,
  nameproject,
  est,
  startupday,
  projecturl,
  qrimageurl,
}) {
  return (
    <div className="border-2 border-black dark:border-white">
      <div className="grid grid-cols-5">
        {imagesbanner.map((img, index) => (
          <div
            key={index}
            className=" w-full aspect-w-1 aspect-h-1 relative flex"
          >
            <img src={img} className="object-cover absolute" />
          </div>
        ))}
      </div>
      <div className="p-2 border-t-2 border-black dark:border-white">
        <h2 className="text-black dark:text-white font-sourcecodepro uppercase text-base font-bold">
          {nameproject}
        </h2>
        <p className="text-gray-400 dark:text-gray-500 font-sourcecodepro text-base uppercase">
          Established in {est}
        </p>
      </div>
      <div className="flex">
        <div className="w-full-70 p-4 border-t-2 border-black dark:border-white">
          <NextLink href={projecturl}>
            <a className="text-white dark:text-black inline-flex items-center space-x-2 bg-black dark:bg-white py-1 px-2">
              <p className="uppercase font-bold text-md">More detail</p>
              <ArrowUpRight className="text-white dark:text-black" size={16} />
            </a>
          </NextLink>
          <div className="text-black dark:text-white font-sourcecodepro uppercase p-2">
            <p className="text-sm">From start-up day:</p>
            <p className="text-xl">
              {moment(startupday, "YYYYMMDD").fromNow()}
            </p>
          </div>
        </div>
        <div className="w-full-30 p-2 border-t-2 border-l-2 border-black dark:border-white">
          <div className="w-full aspect-h-1 aspect-w-1 relative">
            <img src={qrimageurl} className="object-cover absolute" />
          </div>
        </div>
      </div>
    </div>
  );
}
