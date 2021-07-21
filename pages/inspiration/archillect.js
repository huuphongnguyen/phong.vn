import Container from "../../components/Container";
import NextLink from "next/link";
import ArchillectGrid from "../../components/elements/ArchillectGrid";
import { useState } from "react";
import ArchillectTenMinutesCounter from "../../components/elements/ArchillectTenMinutesCounter";
import useTranslation from "next-translate/useTranslation";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";

const archillectEndpoint = process.env.ARCHILLECT_AI_UNOFFICIAL_API;

export async function getServerSideProps() {
  const res = await fetch(archillectEndpoint);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Archillect({ data }) {
  const archillectarray = [data];

  const [isShowingArchillectImageGrid, showArchillectImageGrid] =
    useState(false);

  const { t } = useTranslation("archillect");

  const seotitle = `Blowing my mind with Archillect - Phong.vn`;
  const seodescrip = `Gồm 100 Block (hình ảnh hoặc ảnh động) mới nhất của Archillect. Mỗi 10 phút Archillect sẽ cập nhật một Block mới. Archillect (archive + intellect) là một AI tự động khám phá - tìm kiếm - lựa chọn hình ảnh trên Internet.`;
  const seourl = `https://phong.vn/inspiration/archillect`;
  const seopreviewimg = "/static/images/inspiration/archillect-feature-img.png";

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
            <div className="inline-flex items-center space-x-1 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white uppercase font-sourcecodepro text-base">
              <p>/</p>
              <p>Inspiration</p>
            </div>
          </a>
        </NextLink>
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-base uppercase font-sourcecodepro">
          <p>/</p>
          <h1>Archillect</h1>
        </div>
      </div>
      <div className="items-start mx-auto w-full max-w-3xl">
        <p className="text-black dark:text-white text-sm">
          {t("archillect-p1")} <br />
          {t("archillect-p2")}
        </p>
        <div className="mb-4 space-y-1">
          <ArchillectTenMinutesCounter />
          <p className="text-black dark:text-white text-sm">
            {t("archillect-p3")}
          </p>
          <div className="text-red-500 text-base font-sourcecodepro flex items-center space-x-2">
            <p>BLOCKS: </p>
            <p>
              {data[0].id} - {data[49].id}
            </p>
          </div>
        </div>
        <div>
          <div className="text-black mb-4">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="focus:outline-none w-full px-2 text-black dark:text-white border-2 border-black dark:border-white font-sourcecodepro text-base font-bold uppercase"
                onClick={() => {
                  showArchillectImageGrid(true);
                }}
              >
                <p className="rainbow_text_hover inline-block">Archillect/on</p>
              </button>

              <button
                type="button"
                className="focus:outline-none w-full px-2 text-black dark:text-white border-2 border-black dark:border-white font-sourcecodepro text-base font-bold uppercase"
                onClick={() => {
                  showArchillectImageGrid(false);
                }}
              >
                <p className="rainbow_text_hover inline-block">
                  Archillect/off
                </p>
              </button>
            </div>
          </div>
        </div>
        {isShowingArchillectImageGrid ? (
          <ArchillectGrid sync={archillectarray[0]} />
        ) : (
          <div className="text-black dark:text-white text-sm">
            {t("archillect-p4")} <br />
            {t("archillect-p5")}{" "}
            <a
              className="font-bold rainbow_text_hover"
              href="https://archillect.com/"
              target="_blank"
            >
              {t("archillect-p6")}
            </a>
            .
          </div>
        )}
      </div>
    </Container>
  );
}
