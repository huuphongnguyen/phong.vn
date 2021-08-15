import Covid19Section from "../components/structures/Covid19Section";
import { NextSeo } from "next-seo";
import TwitterSEO from "../components/TwitterSEO";

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
  const seotitle = `Covid19 Tracking - Phong.vn`;
  const seodescrip = `Một trang theo dõi Covid19 được thiết kế đơn giản và dễ thương. Phong viết ra dành cho mẹ và những người bạn.`;
  const seourl = `https://phong.vn/covid19`;
  const seopreviewimg = "/static/covid19-trancking-feature-img.png";

  return (
    <div>
      <NextSeo
        title={seotitle}
        description={seodescrip}
        canonical={seourl}
        openGraph={{
          seotitle,
          seodescrip,
          seourl,
          images: [
            {
              url: seopreviewimg,
              alt: seotitle,
              width: 1200,
              height: 628,
            },
          ],
        }}
      />
      <TwitterSEO
        currentURL={seourl}
        previewImage={`https://phong.vn/${seopreviewimg}`}
        siteName={seotitle}
        pageTitle={seotitle}
        description={seodescrip}
      />
      <div className="w-full flex items-center justify-center mt-6 md:mt-[100px] px-4 md:px-0 py-4 md:py-0">
        <Covid19Section
          dataGlobal={resultsCovid19Global}
          dataVietnam={resultsCovid19Vietnam}
          dataVaccineVietnam={resultsCovid19VaccineVietNam}
        />
      </div>
      <div className="flex items-center justify-center mt-16 md:mt-28">
        <div className="mt-4 flex items-center space-x-2">
          <div>
            <img
              src="https://media.giphy.com/media/SWWcYfE3GXeCGo1xPi/giphy.gif"
              className="w-20 h-auto"
            />
          </div>
          <div className="pl-2">
            <img
              src="https://media.giphy.com/media/1Fr6GHv8WB4KRBvbTb/giphy.gif"
              className="w-16 h-auto"
            />
          </div>
          <div>
            <img
              src="https://media.giphy.com/media/ED1YHJEnOESA49KT9P/giphy.gif"
              className="w-28 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
