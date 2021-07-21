import Container from "../../components/Container";
import NextLink from "next/link";
import LetterByPhong from "../../components/elements/LetterByPhong";
import {
  Designer,
  Developer,
  Stop,
  ShutDown,
} from "../../components/elements/StatusBadge";
import {
  ArrowUpRight,
  Envelope,
  Globe,
  Heart,
  Inbox,
  MoreHorizontal,
  Pencil,
  Plant,
  PointingUp,
  RockOn,
  VictoryHand,
} from "akar-icons";
import useTranslate from "next-translate/useTranslation";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";
import ChangeCoin from "../../components/elements/ChangeCoin";

export default function BLVCKSaigon() {
  const { t } = useTranslate("projects");

  const seotitle = `Projects | BLVCK Saigon - Phong.vn`;
  const seodescrip = `Một local brand, diary, tạp chí với các sản phẩm có màu chủ đạo là đen và trắng. Tập trung đến việc cá nhân hóa thông qua thêu và in. BLVCK Saigon là một dự án được phát triển bởi Nguyễn Hữu Phong`;
  const seourl = `https://phong.vn/projects/blvcksaigon`;
  const seopreviewimg = "/static/images/projects/blvcksaigon-feature-img.png";

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
          <h1>BLVCKSaigon</h1>
        </div>
      </div>

      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="border-2 border-gray-200 dark:border-gray-700 p-6 pt-8">
          <div className="w-full flex items-center justify-center relative">
            <div className="inline-flex px-2 py-1 bg-black dark:bg-white absolute transform -translate-y-8">
              <p className="text-white dark:text-black font-sourcecodepro uppercase">
                Next Chapter
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full flex items-center justify-center">
              <VictoryHand className="text-black dark:text-white" size={25} />
            </div>
            <p className="text-black dark:text-white font-bold text-lg text-center">
              BLVCK Saigon đã gia nhập và trở thành một phần của CHANGE.VN
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center justify-center transform scale-[0.65] md:scale-[0.75] origin-center md:origin-top -mt-20 md:-mt-0 -mb-10 md:-mb-20">
                <ChangeCoin />
              </div>
              <div className="text-black dark:text-white col-span-2 space-y-4 pt-4">
                <div className="flex items-center space-x-4">
                  <div>
                    <RockOn size={25} />
                  </div>
                  <p className="text-sm">
                    Một Local Brand mang đến những chiếc áo T-Shirt và Hoodie
                    thêu và in với thiết kế có thể thay đổi, custom theo ý
                    thích.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div>
                    <Plant size={25} />
                  </div>
                  <p className="text-sm">
                    Được sáng tạo bởi bạn, tập trung vào tính cá nhân hóa
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div>
                    <Inbox size={25} />
                  </div>
                  <p className="text-sm">
                    Mỗi hộp sản phẩm là duy nhất với một mã QR Code riêng, bạn
                    có thể kiểm tra quyền sở hữu hộp sản phẩm.
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div>
                    <Heart size={25} />
                  </div>
                  <p className="text-sm">
                    Đơn giản, thoải mái, và dành cho bạn
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center justify-center py-4">
              <a href="https://change.vn">
                <div className="p-2 inline-flex items-center space-x-1 border-2 border-black dark:border-white">
                  <p className="text-black dark:text-white font-sourcecodepro uppercase text-base">
                    CHANGE.VN
                  </p>
                  <ArrowUpRight
                    className="text-black dark:text-white"
                    size={22}
                  />
                </div>
              </a>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <PointingUp
                  className="text-black dark:text-white animate-bounce"
                  size={22}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <MoreHorizontal className="text-black dark:text-white" size={22} />
        </div>
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
                      src="/logos/blvcksaigon-logo.svg"
                      className="absolute"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full-80">
                <div className="border-b-2 border-black dark:border-white">
                  <div className="grid grid-cols-2">
                    <div className="text-black dark:text-white text-xs uppercase p-2 border-r-2 border-black dark:border-white">
                      {t("projects-sheet-code")} <strong>#PRJBLACK</strong>
                    </div>
                    <div className="text-black dark:Text-white text-xs uppercase p-2">
                      {t("projects-sheet-start")} <strong>12/2019</strong>
                    </div>
                  </div>
                </div>

                <div className="border-b-2 border-black dark:border-white">
                  <div className="text-black dark:text-white text-xs uppercase p-2">
                    {t("projects-sheet-name")}
                  </div>
                  <div className="px-2 pb-2">
                    <h2 className="text-black dark:text-white font-bold text-center">
                      {t("project-blvcksaigon-title")}
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
                  </div>
                </div>

                <div>
                  <div className="text-black dark:text-white text-xs uppercase p-2">
                    {t("projects-sheet-description")}
                  </div>
                  <div className="px-2 pb-2">
                    <p className="text-black dark:text-white text-sm text-center">
                      {t("project-blvcksaigon-description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 border-b-2 border-black dark:border-white">
              <div className="text-black dark:text-white text-xs uppercase p-2 border-r-2 border-black dark:border-white">
                {t("projects-sheet-status")}
                <div className="py-2 px-2 space-y-2">
                  <Stop />
                  <ShutDown />
                </div>
              </div>
              <div className="text-black dark:text-white text-xs uppercase p-2">
                {t("projects-sheet-position")}
                <div className="py-2 px-2 space-y-2">
                  <Designer />
                  <Developer />
                </div>
              </div>
            </div>

            <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
              <a href="https://blvck.vn" target="_blank">
                <div className="text-black dark:text-white uppercase text-sm border_dash_animated dark:border_dash_animated_dark p-2 transform transition-all hover:scale-105">
                  <Globe className="mb-1" />
                  Website
                </div>
              </a>
              <a href="mailto:we@blvck.vn" target="_blank">
                <div className="text-black dark:text-white uppercase text-sm border_dash_animated dark:border_dash_animated_dark p-2 transform transition-all hover:scale-105">
                  <Envelope className="mb-1" />
                  Mail
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Pencil className="text-black dark:text-white mx-auto" />
        </div>

        <div className="w-full mx-auto">
          <LetterByPhong letterNumber="#0004">
            <div className="text-black dark:text-white text-sm">
              {" "}
              {t("project-blvcksaigon-letter-p1")}
              <br />
              <br />
              {t("project-blvcksaigon-letter-p2")}
            </div>
          </LetterByPhong>
        </div>
      </div>
    </Container>
  );
}
