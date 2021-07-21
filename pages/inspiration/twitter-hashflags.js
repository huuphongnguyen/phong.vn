import Container from "../../components/Container";
import NextLink from "next/link";
import TwitterHashflagsGrid from "../../components/elements/TwitterHashflagsGrid";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";

export default function TwitterHashflags() {
  const { t } = useTranslation("hashflags");

  const [isShowingTwitterHashflagsGrid, ShowTwitterHashflagsGrid] =
    useState(false);

  const seotitle = `Exploring Twitter Hashflags - Phong.vn`;
  const seodescrip = `Hashflags là một khái niệm được Twitter sử dụng để chỉ những icon bên cạnh các Hashtags. Chỉ những Hashtags thật sự quan trọng và đang hot mới có Hashflags. Các Hashflags chỉ tồn tại trong một khoảng thời gian nhất định trước khi biến mất.`;
  const seourl = `https://phong.vn/inspiration/twitter-hashflags`;
  const seopreviewimg =
    "/static/images/inspiration/twitter-hashflags-feature-img.png";

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
      <div className="items-start mx-auto w-full max-w-3xl space-x-1">
        <NextLink href="/">
          <a>
            <div className="inline-flex items-center space-x-1 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white text-base uppercase font-sourcecodepro">
              <p>/</p>
              <p>Inspiration</p>
            </div>
          </a>
        </NextLink>
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-base uppercase font-sourcecodepro">
          <p>/</p>
          <h1>Twitter Hashflags</h1>
        </div>
      </div>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <p className="text-black dark:text-white">
          {t("hashflags-p1")} <br />
          {t("hashflags-p2")}
          <br /> {t("hashflags-p3")}{" "}
        </p>

        <div className="text-black dark:text-white">
          <strong>500</strong> {t("hashflags-p4")}
          <br />
          {t("hashflags-p5")}
        </div>

        <div>
          <div className="text-black mb-4">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="focus:outline-none w-full px-2 text-black dark:text-white border-2 border-black dark:border-white font-sourcecodepro text-base font-bold uppercase"
                onClick={() => {
                  ShowTwitterHashflagsGrid(true);
                }}
              >
                <p className="rainbow_text_hover inline-block">
                  {t("hashflags-show")}
                </p>
              </button>

              <button
                type="button"
                className="focus:outline-none w-full px-2 text-black dark:text-white border-2 border-black dark:border-white font-sourcecodepro text-base font-bold uppercase"
                onClick={() => {
                  ShowTwitterHashflagsGrid(false);
                }}
              >
                <p className="rainbow_text_hover inline-block">
                  {t("hashflags-hide")}
                </p>
              </button>
            </div>
          </div>
        </div>
        {isShowingTwitterHashflagsGrid ? (
          <TwitterHashflagsGrid />
        ) : (
          <div className="text-black dark:text-white">{t("hashflags-p6")}</div>
        )}
      </div>
    </Container>
  );
}
