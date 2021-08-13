import Covid19Section from "../components/structures/Covid19Section";

export async function getStaticProps() {
  const apiUrlCovid19Global = process.env.COVID_19_GLOBAL_API_URL;
  const apiOptionCovid19Global = { method: "GET" };
  const apiDataCovid19Global = await fetch(
    apiUrlCovid19Global,
    apiOptionCovid19Global
  );
  const dataFromCovid19GlobalAPI = await apiDataCovid19Global.json();

  const apiUrlCovid19Vietnam = process.env.COVID_19_VIETNAM_API_URL;
  const apiOptionCovid19Vietnam = { method: "GET" };
  const apiDataCovid19Vietnam = await fetch(
    apiUrlCovid19Vietnam,
    apiOptionCovid19Vietnam
  );
  const dataFromCovid19VietnamAPI = await apiDataCovid19Vietnam.json();

  const apiUrlCovid19VaccineVietnam =
    process.env.COVID_19_VACCINE_VIETNAM_API_URL;
  const request = require("request");
  const csv = require("csvtojson");
  const apiDataCovid19VaccineVietnam = await csv().fromStream(
    request.get(apiUrlCovid19VaccineVietnam)
  );

  return {
    props: {
      resultsCovid19Global: dataFromCovid19GlobalAPI,
      resultsCovid19Vietnam: dataFromCovid19VietnamAPI,
      resultsCovid19VaccineVietNam: apiDataCovid19VaccineVietnam,
    },
  };
}

export default function Covid19({
  resultsCovid19Global,
  resultsCovid19Vietnam,
  resultsCovid19VaccineVietNam,
}) {
  return (
    <div className="w-full flex items-center justify-center mt-6 md:mt-[200px] px-4 md:px-0 py-4 md:py-0">
      <Covid19Section
        dataGlobal={resultsCovid19Global}
        dataVietnam={resultsCovid19Vietnam}
        dataVaccineVietnam={resultsCovid19VaccineVietNam}
      />
    </div>
  );
}
