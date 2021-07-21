import Container from "../../components/Container";
import NextLink from "next/link";
import LetterByPhong from "../../components/elements/LetterByPhong";
import {
  BusinessDevelopment,
  Designer,
  Developer,
  Developing,
  Running,
} from "../../components/elements/StatusBadge";
import { Envelope, Globe, Location, Pencil, ThumbsUp } from "akar-icons";
import useTranslate from "next-translate/useTranslation";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";

export default function AXEmbroidery() {
  const { t } = useTranslate("projects");

  const seotitle = `Projects | AX Embroidery - Phong.vn`;
  const seodescrip = `Một hệ thống xưởng thêu / thêu vi tính / thêu công nghiệp. AX Embroidery - Thêu vi tính Anh Xuyến là một dự án được phát triển bởi Nguyễn Hữu Phong.`;
  const seourl = `https://phong.vn/projects/axembroidery`;
  const seopreviewimg = "/static/images/projects/axembroidery-feature-img.png";

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
      <div className="items-start mx-auto w-full max-w-3xl space-x-2 space-y-4">
        <NextLink href="/">
          <a>
            <div className="inline-flex items-center space-x-1 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white text-base uppercase font-sourcecodepro">
              <p>Front-Page</p>
            </div>
          </a>
        </NextLink>
        <NextLink href="/projects">
          <a>
            <div className="inline-flex items-center space-x-1 text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white text-base uppercase font-sourcecodepro">
              <p>/</p>
              <p>PRJ</p>
            </div>
          </a>
        </NextLink>
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-base uppercase font-sourcecodepro">
          <p>/</p>
          <h1>AXEmbroidery</h1>
        </div>
      </div>

      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="border-2 border-black dark:border-white">
          <div>
            <div className="w-full flex border-b-2 border-black dark:border-white">
              <div className="w-full-20 border-r-2 border-black dark:border-white">
                <div className="p-2 border-black dark:border-white border-b-2">
                  <p className="text-black dark:text-white uppercase text-xs">
                    Logo
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full aspect-w-1 aspect-h-1 origin-center transform scale-75 object-cover relative">
                    <img
                      src="/logos/axembroidery-logo.svg"
                      className="absolute"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full-80">
                <div className="border-b-2 border-black dark:border-white">
                  <div className="grid grid-cols-2">
                    <div className="text-black dark:text-white text-xs uppercase p-2 border-r-2 border-black dark:border-white">
                      {t("projects-sheet-code")} <strong>#PRJ1508</strong>
                    </div>
                    <div className="text-black dark:text-white text-xs uppercase p-2">
                      {t("projects-sheet-start")} <strong>10/2017</strong>
                    </div>
                  </div>
                </div>

                <div className="border-b-2 border-black dark:border-white">
                  <div className="text-black dark:text-white text-xs uppercase p-2">
                    {t("projects-sheet-name")}
                  </div>
                  <div className="px-2 pb-2">
                    <h2 className="text-black dark:text-white font-bold text-center">
                      {t("project-axembroidery-title")}
                    </h2>
                  </div>
                </div>

                <div className="border-b-2 border-black dark:border-white">
                  <div className="text-black dark:text-white text-xs uppercase p-2">
                    Founders:
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="px-2 pb-2">
                      <p className="text-black dark:text-white font-sourcecodepro text-base uppercase">
                        @phong
                      </p>
                    </div>
                    <div className="px-2 pb-2">
                      <p className="text-black dark:text-white font-sourcecodepro text-base uppercase">
                        @xuyen
                      </p>
                    </div>
                    <div className="px-2 pb-2">
                      <p className="text-black dark:text-white font-sourcecodepro text-base uppercase">
                        @anh
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-black dark:text-white text-xs uppercase p-2">
                    {t("projects-sheet-description")}
                  </div>
                  <div className="px-2 pb-2">
                    <p className="text-black dark:text-white text-sm text-center">
                      {t("project-axembroidery-description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 border-b-2 border-black dark:border-white">
              <div className="text-black dark:text-white text-xs uppercase p-2 border-r-2 border-black dark:border-white">
                {t("projects-sheet-status")}
                <div className="py-2 px-2 space-y-2">
                  <Running />
                  <Developing />
                </div>
              </div>
              <div className="text-black dark:text-white text-xs uppercase p-2">
                {t("projects-sheet-position")}
                <div className="py-2 px-2 space-y-2">
                  <BusinessDevelopment />
                  <Designer />
                  <Developer />
                </div>
              </div>
            </div>

            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="https://theuvitinhanhxuyen.com" target="_blank">
                <div className="text-black dark:text-white uppercase text-sm border_dash_animated dark:border_dash_animated_dark p-2 transform transition-all hover:scale-105">
                  <Globe className="mb-1" />
                  Website
                </div>
              </a>
              <a href="mailto:theuvitinhanhxuyen@gmail.com" target="_blank">
                <div className="text-black dark:text-white uppercase text-sm border_dash_animated dark:border_dash_animated_dark p-2 transform transition-all hover:scale-105">
                  <Envelope className="mb-1" />
                  Mail
                </div>
              </a>
              <a
                href="https://www.facebook.com/theuvitinhanhxuyen/"
                target="_blank"
              >
                <div className="text-black dark:text-white uppercase text-sm border_dash_animated dark:border_dash_animated_dark p-2 transform transition-all hover:scale-105">
                  <ThumbsUp className="mb-1" />
                  Facebook
                </div>
              </a>
              <a href="http://g.page/theuvitinhanhxuyen" target="_blank">
                <div className="text-black dark:text-white uppercase text-sm border_dash_animated dark:border_dash_animated_dark p-2 transform transition-all hover:scale-105">
                  <Location className="mb-1" />
                  Map
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Pencil className="text-black dark:text-white mx-auto" />
        </div>

        <div className="w-full mx-auto">
          <LetterByPhong letterNumber="#0003">
            <div className="text-black dark:text-white text-sm">
              {" "}
              {t("project-axembroidery-letter-p1")}
              <br />
              <br />
              {t("project-axembroidery-letter-p2")}
            </div>
          </LetterByPhong>
        </div>
      </div>
    </Container>
  );
}
