import moment from "moment";
import { useRouter } from "next/router";

export default function Covid19Section({ dataGlobal, dataVietnam }) {
  const router = useRouter();

  console.log("Global", dataGlobal);
  console.log("Vietnam", dataVietnam);

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          /
        </p>
        <h1 className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          Covid19
        </h1>
      </div>
      <div className="px-4 pt-2 space-y-2">
        <div>
          <p className="text-black dark:text-white text-sm">
            Real-time data from{" "}
            <a
              href="https://disease.sh/"
              target="_blank"
              className="font-bold rainbow_text_hover"
            >
              Novel Covid19 API
            </a>
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 border-2 border-black dark:border-white border-dashed rounded-xl p-3">
            <div className="w-16 h-16 rounded-full">
              <img
                src="https://media.giphy.com/media/2wgTJVY171NU2547b8/giphy.gif"
                className="object-cover"
              />
            </div>
            <div className="space-y-1">
              <p className="text-black dark:text-white text-xs uppercase font-bold">
                Updated:{" "}
                <span className="text-sm font-normal normal-case bg-purple-200 px-1 rounded-full py-[2px]">
                  {moment(Number(dataGlobal.updated))
                    .locale(router.locale === "vi-VN" ? "vi" : "us")
                    .format("MMMM Do YYYY, h:mm:ss a")}
                </span>
              </p>
              <p className="text-black dark:text-white text-xs uppercase font-bold">
                Population:{" "}
                <span className="text-sm font-normal normal-case bg-green-200 px-1 rounded-full py-[2px]">
                  {dataGlobal.population.toLocaleString()}
                </span>
              </p>
              <p className="text-black dark:text-white text-xs uppercase font-bold">
                Cases:{" "}
                <span className="text-sm font-normal normal-case bg-red-200 px-1 rounded-full py-[2px]">
                  {dataGlobal.cases.toLocaleString()}
                </span>{" "}
                <span className="text-sm font-normal normal-case bg-gray-200 px-1 rounded-full py-[2px]">
                  +{dataGlobal.todayCases.toLocaleString()}
                </span>
              </p>
              <p className="text-black dark:text-white text-xs uppercase font-bold">
                Recovered:{" "}
                <span className="text-sm font-normal normal-case bg-blue-200 px-1 rounded-full py-[2px]">
                  {dataGlobal.recovered.toLocaleString()}
                </span>{" "}
                <span className="text-sm font-normal normal-case bg-gray-200 px-1 rounded-full py-[2px]">
                  +{dataGlobal.todayRecovered.toLocaleString()}
                </span>
              </p>
              <p className="text-black dark:text-white text-xs uppercase font-bold">
                Deaths:{" "}
                <span className="text-sm font-normal normal-case bg-black text-white px-1 rounded-full py-[2px]">
                  {dataGlobal.deaths.toLocaleString()}
                </span>{" "}
                <span className="text-sm font-normal normal-case bg-gray-200 px-1 rounded-full py-[2px]">
                  +{dataGlobal.todayDeaths.toLocaleString()}
                </span>
              </p>
              <div className="pt-2">
                <p className="text-yellow-500 text-xs uppercase font-bold">
                  Ratio Per One Million
                </p>
                <div>
                  <p>
                    {" "}
                    <span className="text-sm font-normal normal-case bg-red-200 text-black px-1 rounded-full py-[2px]">
                      {dataGlobal.casesPerOneMillion.toLocaleString()}
                    </span>{" "}
                    <span className="text-sm font-normal normal-case bg-black text-white px-1 rounded-full py-[2px]">
                      {dataGlobal.deathsPerOneMillion.toLocaleString()}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2 border-2 border-black dark:border-white border-dashed rounded-xl p-3">
            <div className="w-16 h-16 rounded-full">
              <img
                src="https://media.giphy.com/media/zBfalNdTyCek8ZEk18/giphy.gif"
                className="object-cover scale-[1.4]"
              />
            </div>
            <div className="space-y-1">
              <p className="text-black dark:text-white text-xs uppercase font-bold">
                Updated:{" "}
                <span className="text-sm font-normal normal-case bg-purple-200 px-1 rounded-full py-[2px]">
                  {moment(Number(dataVietnam.updated))
                    .locale(router.locale === "vi-VN" ? "vi" : "us")
                    .format("MMMM Do YYYY, h:mm:ss a")}
                </span>
              </p>
              <p className="text-black dark:text-white text-xs uppercase font-bold">
                Population:{" "}
                <span className="text-sm font-normal normal-case bg-green-200 px-1 rounded-full py-[2px]">
                  {dataVietnam.population.toLocaleString()}
                </span>
              </p>
              <p className="text-black dark:text-white text-xs uppercase font-bold">
                Cases:{" "}
                <span className="text-sm font-normal normal-case bg-red-200 px-1 rounded-full py-[2px]">
                  {dataVietnam.cases.toLocaleString()}
                </span>{" "}
                <span className="text-sm font-normal normal-case bg-gray-200 px-1 rounded-full py-[2px]">
                  +{dataVietnam.todayCases.toLocaleString()}
                </span>
              </p>
              <p className="text-black dark:text-white text-xs uppercase font-bold">
                Recovered:{" "}
                <span className="text-sm font-normal normal-case bg-blue-200 px-1 rounded-full py-[2px]">
                  {dataVietnam.recovered.toLocaleString()}
                </span>{" "}
                <span className="text-sm font-normal normal-case bg-gray-200 px-1 rounded-full py-[2px]">
                  +{dataVietnam.todayRecovered.toLocaleString()}
                </span>
              </p>
              <p className="text-black dark:text-white text-xs uppercase font-bold">
                Deaths:{" "}
                <span className="text-sm font-normal normal-case bg-black text-white px-1 rounded-full py-[2px]">
                  {dataVietnam.deaths.toLocaleString()}
                </span>{" "}
                <span className="text-sm font-normal normal-case bg-gray-200 px-1 rounded-full py-[2px]">
                  +{dataVietnam.todayDeaths.toLocaleString()}
                </span>
              </p>
              <div className="pt-2">
                <p className="text-yellow-500 text-xs uppercase font-bold">
                  Ratio Per One Million
                </p>
                <div>
                  <p>
                    {" "}
                    <span className="text-sm font-normal normal-case bg-red-200 text-black px-1 rounded-full py-[2px]">
                      {dataVietnam.casesPerOneMillion.toLocaleString()}
                    </span>{" "}
                    <span className="text-sm font-normal normal-case bg-black text-white px-1 rounded-full py-[2px]">
                      {dataVietnam.deathsPerOneMillion.toLocaleString()}
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
