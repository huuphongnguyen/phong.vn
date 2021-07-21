import { ArrowUpRight } from "akar-icons";
import moment from "moment";

export default function DomainsElement({
  children,
  domain,
  registeredday,
  visiturl,
  qrcodeimg,
}) {
  return (
    <div>
      <div className="border-2 border-black dark:border-white grid grid-cols-1 md:grid-cols-2">
        <div className="p-2">
          <h2 className="text-black dark:text-white font-sourcecodepro uppercase text-xl font-bold">
            {domain}
          </h2>
          <div className="font-sourcecodepro text-sm uppercase flex items-center space-x-1">
            <h3 className="text-gray-500">Registered day:</h3>
            <p>{moment(registeredday).format("MMMM Do YYYY")}</p>
          </div>
          <div className="font-sourcecodepro text-sm uppercase flex items-center space-x-1">
            <h3 className="text-gray-500">From that day:</h3>
            <p>{moment(registeredday, "YYYYMMDD").fromNow()}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 border-t-2 md:border-t-0 border-black dark:border-white">
          <div className="border-l-0 md:border-l-2 border-black dark:border-white">
            <div className="px-4 py-2">
              <div className="font-sourcecodepro uppercase text-sm">
                {children}
              </div>
            </div>
          </div>
          <div className="border-l-2 border-black dark:border-white">
            <div className="p-2">
              <a href={visiturl} target="_blank">
                <div className="inline-flex items-center space-x-1 bg-white hover:bg-black dark:bg-black dark:hover:bg-white group px-2">
                  <p className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black uppercase font-sourcecodepro text-sm">
                    Visit
                  </p>
                  <ArrowUpRight
                    className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                    size={18}
                  />
                </div>
              </a>
            </div>
          </div>
          <div className="border-l-2 border-black dark:border-white">
            <div className="relative w-full aspect-h-1 aspect-w-1">
              <img src={qrcodeimg} className="object-cover absolute" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
