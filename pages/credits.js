import Container from "../components/Container";
import LetterByPhong from "../components/elements/LetterByPhong";
import NextImage from "next/image";
import { Globe } from "akar-icons";
import {
  foundersData,
  librariesData,
  mainTechsData,
} from "../data/creditsData";
import ExternalLink from "../components/elements/ExternalLink";
import useTranslate from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import TwitterSEO from "../components/TwitterSEO";
import NextLink from "next/link";

export default function Credits() {
  const foundersDataArray = foundersData;
  const mainTechsDataArray = mainTechsData;
  const librariesDataArray = librariesData;

  const { t } = useTranslate("credits");
  const router = useRouter();

  const seotitle = `Credits - Phong.vn`;
  const seodescrip = `Dành một lời cảm ơn và trân trọng nhất đến các thư viện và dự án mã nguồn mở dưới đây. Thế giới này vận hành theo hướng học hỏi và kế thừa những điều tuyệt vời trước đó.`;
  const seourl = `https://phong.vn/credits`;
  const seopreviewimg = "/static/credits-feature-img.png";

  return (
    <Container>
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
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-base uppercase font-sourcecodepro mt-5">
          <NextLink href="/">
            <a>
              <p className="text-gray-300 dark:text-gray-600 hover:text-black dark:hover:text-white">
                FRONT-PAGE
              </p>
            </a>
          </NextLink>
          <p>/</p>
          <h1>Credits</h1>
        </div>
        <div className="text-black dark:text-white space-y-7">
          <LetterByPhong letterNumber="#0002">
            <p>{t("credits-letter")}</p>
          </LetterByPhong>
          <div className="space-y-4">
            <div>
              <h2 className="font-bold text-xl">
                {t("credits-founders-title")}
              </h2>
              <p className="text-sm">{t("credits-founders-description")}</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {foundersDataArray.map((founder, index) => (
                <div className="p-2 border-2 border-black dark:border-white inline-block">
                  <div
                    className="md:flex items-center space-x-0 md:space-x-2"
                    key={index}
                  >
                    <NextImage src={founder[1]} height={90} width={90} />
                    <div>
                      <h3 className="font-bold">{founder[0]}</h3>
                      <p className="font-sourcecodepro text-gray-500 dark:text-gray-400 text-base">
                        {founder[2]}
                      </p>
                      <p>{founder[3]}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <a href={founder[4]} target="_blank">
                          <Globe className="w-5 h-5" />
                        </a>

                        <a href={founder[5]} target="_blank">
                          <img
                            src="/icons/twitter.svg"
                            className="w-5 h-5 dark:fill-white"
                          />
                        </a>
                        <a href={founder[6]} target="_blank">
                          <img
                            src="/icons/github.svg"
                            className="w-5 h-5 dark:fill-white"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-bold text-xl">
                {t("credits-maintechs-title")}
              </h2>
              <p className="text-sm">{t("credits-maintechs-description")}</p>
            </div>
            <div className="space-y-2">
              {mainTechsDataArray.map((mainTech, index) => (
                <div
                  key={index}
                  className="border_dash_animated dark:border_dash_animated_dark"
                >
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold uppercase font-sourcecodepro text-base border_dashed_animated">
                      {mainTech[0]}
                    </h3>
                    <p>-</p>
                    <div className="space-x-2">
                      <ExternalLink href={mainTech[3]}>Website</ExternalLink>
                      <ExternalLink href={mainTech[4]}>Github</ExternalLink>
                    </div>
                  </div>
                  <p className="text-sm">
                    {router.locale === "vi-VN" ? mainTech[1] : mainTech[2]}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="font-bold text-xl">
                {" "}
                {t("credits-libraries-title")}
              </h2>
              <p className="text-sm">
                {t("credits-libraries-description")}
                <br /> {t("credits-libraries-description1a")}{" "}
                <a
                  className="font-bold"
                  href="https://github.com/huuphongnguyen/phong.vn/blob/main/package.json"
                  target="_blank"
                >
                  phong.vn/package.json
                </a>{" "}
                {t("credits-libraries-description1b")}
              </p>
            </div>
            <div className="space-y-2">
              {librariesDataArray.map((library, index) => (
                <div
                  key={index}
                  className="border_dash_animated dark:border_dash_animated_dark"
                >
                  <div className="flex items-center space-x-2">
                    <h3 className="font-bold uppercase font-sourcecodepro text-base border_dashed_animated">
                      {library[0]}
                    </h3>
                    <p>-</p>
                    <div className="space-x-2">
                      <ExternalLink href={library[3]}>Website</ExternalLink>
                      <ExternalLink href={library[4]}>Github</ExternalLink>
                    </div>
                  </div>
                  <p className="text-sm">
                    {router.locale === "vi-VN" ? library[1] : library[2]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
