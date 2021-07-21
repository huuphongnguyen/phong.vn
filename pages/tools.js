import { NextSeo } from "next-seo";
import Container from "../components/Container";
import { Client } from "@notionhq/client";
import NextLink from "next/link";
import { ArrowUpRight, FaceHappy, FaceVeryHappy } from "akar-icons";
import useTranslate from "next-translate/useTranslation";
import { useRouter } from "next/router";
import TwitterSEO from "../components/TwitterSEO";

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_OFFICIAL_KEYS });

  const databaseId = process.env.NOTION_PAGE_ID_TOOLS_PAGE;
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return {
    props: {
      results: response.results,
    },
  };
}

export default function Tools({ results }) {
  const router = useRouter();
  const { t } = useTranslate("tools");
  const seotitle = `Tools - Phong.vn`;
  const seodescrip = `Tools là trang tổng hợp những ứng dụng / thư viện / website / công cụ mà Phong cảm thấy nó khá là hữu ích cho công việc và cuộc sống hàng ngày. Được tổng hợp từ nhiều nguồn trên Internet`;
  const seourl = `https://phong.vn/tools`;
  const seopreviewimg = "/static/tools-feature-img.png";

  const getPageDisplay_Important = () => {
    let jsx = [];

    results
      .filter((block) =>
        block.properties.tags.multi_select
          .map((sel) => sel.name)
          .includes("Important")
      )
      .forEach((block) => {
        jsx.push(
          <div
            className="text-black dark:text-white border-black dark:border-white border-2 flex items-center"
            key={block.id}
          >
            <div className="w-[20%] md:w-[10%] flex items-center justify-center bg-white h-full">
              <div className="w-7 h-7 relative">
                <img
                  src={block.properties.icon.files[0].name}
                  className="w-full object-cover absolute"
                />
              </div>
            </div>
            <div className="w-[70%] py-2 px-4 border-l-2 border-r-2 border-black dark:border-white">
              <h3 className="font-sourcecodepro uppercase text-base">
                {block.properties.name.title[0].plain_text}
              </h3>
              <p className="text-sm">
                {router.locale === "vi-VN"
                  ? block.properties.videscription.rich_text[0].plain_text
                  : block.properties.endescription.rich_text[0].plain_text}
              </p>
            </div>
            <div className="w-[30%] md:w-[20%] flex items-center justify-center">
              <a
                href={block.properties.url.url}
                target="_blank"
                className="font-sourcecodepro text-base uppercase flex items-center space-x-1"
              >
                <p className="inline-flex text-lg">{t("tools-notion-visit")}</p>
                <ArrowUpRight
                  className="text-black dark:text-white"
                  size={22}
                />
              </a>
            </div>
          </div>
        );
      });
    return jsx;
  };

  const getPageDisplay_Support = () => {
    let jsx = [];

    results
      .filter((block) =>
        block.properties.tags.multi_select
          .map((sel) => sel.name)
          .includes("Support")
      )
      .forEach((block) => {
        jsx.push(
          <div
            className="text-black dark:text-white border-black dark:border-white border-2 flex items-center"
            key={block.id}
          >
            <div className="w-[20%] md:w-[10%] flex items-center justify-center bg-white h-full">
              <div className="w-7 h-7 relative">
                <img
                  src={block.properties.icon.files[0].name}
                  className="w-full object-cover absolute"
                />
              </div>
            </div>
            <div className="w-[70%] py-2 px-4 border-l-2 border-r-2 border-black dark:border-white">
              <h3 className="font-sourcecodepro uppercase text-base">
                {block.properties.name.title[0].plain_text}
              </h3>
              <p className="text-sm">
                {router.locale === "vi-VN"
                  ? block.properties.videscription.rich_text[0].plain_text
                  : block.properties.endescription.rich_text[0].plain_text}
              </p>
            </div>
            <div className="w-[30%] md:w-[20%] flex items-center justify-center">
              <a
                href={block.properties.url.url}
                target="_blank"
                className="font-sourcecodepro text-base uppercase flex items-center space-x-1"
              >
                <p className="inline-flex text-lg">{t("tools-notion-visit")}</p>
                <ArrowUpRight
                  className="text-black dark:text-white"
                  size={22}
                />
              </a>
            </div>
          </div>
        );
      });
    return jsx;
  };

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
      <div className="items-start mx-auto w-full max-w-3xl space-y-4 pt-5">
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-base uppercase font-sourcecodepro">
          <NextLink href="/">
            <a>
              <p className="text-gray-300 dark:text-gray-600 hover:text-black dark:hover:text-white">
                FRONT-PAGE
              </p>
            </a>
          </NextLink>
          <p>/</p>
          <h1>Tools</h1>
        </div>
      </div>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="inline-flex space-x-2 md:space-x-4 bg-gray-100 dark:bg-gray-800 p-2 rounded-md items-start md:items-center">
          <a href="https://notion.so" target="_blank">
            <img src="/icons/notion.svg" className="w-7 h-7 dark:fill-white" />
          </a>
          <p className="text-black dark:text-white uppercase text-sm">
            {t("tools-notion-p1")}{" "}
            <a
              href="https://developers.notion.com/"
              target="_blank"
              className="rainbow_text_hover font-bold"
            >
              Notion Official API
            </a>{" "}
            <br />
            {t("tools-notion-p2a")}{" "}
            <a
              href="https://www.notion.so/isnhp/930aa0192d3e4dfc88eb30bfeee208a7?v=f3222a3da894498d9c8058ea00c308f1"
              target="_blank"
              className="rainbow_text_hover font-bold"
            >
              {t("tools-notion-p2b")}
            </a>
          </p>
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <FaceVeryHappy className="text-black dark:text-white" size={22} />
            <h2 className="text-black dark:text-white font-sourcecodepro uppercase text-base">
              Important
            </h2>
          </div>
          <div className="my-4 grid grid-cols-1 gap-4">
            {getPageDisplay_Important()}
          </div>
          <div className="flex items-center space-x-2 pt-4">
            <FaceHappy className="text-black dark:text-white" size={22} />
            <h2 className="text-black dark:text-white font-sourcecodepro uppercase text-base">
              Support
            </h2>
          </div>
          <div className="my-4 grid grid-cols-1 gap-4">
            {getPageDisplay_Support()}
          </div>
        </div>
      </div>
    </Container>
  );
}
