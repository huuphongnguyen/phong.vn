import { IconBoxModel } from "@tabler/icons";
import { Coin, Envelope, FaceHappy, File, Leaf } from "akar-icons";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";

export default function SubPageSection() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          /
        </p>
        <h1 className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          Sub-page
        </h1>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          <div className="flex items-center space-x-3">
            <div className="pr-1">
              <Leaf className="text-black dark:text-white" />
            </div>
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="https://log.phong.vn" target="_blank">
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  log.phong.vn
                </h2>
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                {t("subpage-log-description")}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="pr-1">
              <File className="text-black dark:text-white" />
            </div>
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a
                href="https://y.at/%E2%9C%8C%F0%9F%91%BD%F0%9F%91%89%F0%9F%9A%80"
                target="_blank"
              >
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-75">
                      <img
                        className="object-cover absolute"
                        src="/emoji/emoji-hello.png"
                      />
                    </div>
                    <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-100">
                      <img
                        className="object-cover absolute"
                        src="/emoji/emoji-aliens.png"
                      />
                    </div>
                    <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-150">
                      <img
                        className="object-cover absolute"
                        src="/emoji/emoji-touch.png"
                      />
                    </div>
                    <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-200">
                      <img
                        className="object-cover absolute"
                        src="/emoji/emoji-rocket.png"
                      />
                    </div>
                  </div>
                  <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                    .y.at
                  </h2>
                </div>
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                Humans are Aliens
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="pr-1">
              <FaceHappy className="text-black dark:text-white" />
            </div>
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="https://mmm.page/phong.main" target="_blank">
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  mmm.page/phong
                </h2>
              </a>
              <p className="text-gray-500 dark:text-gray-400">hmmmm!!!!</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="pr-1">
              <Coin className="text-black dark:text-white" />
            </div>
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="https://pay.phong.vn" target="_blank">
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  pay.phong.vn
                </h2>
              </a>
              <p className="text-gray-500 dark:text-gray-400"></p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="pr-1">
              <Envelope className="text-black dark:text-white" />
            </div>
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <NextLink href="/letters" target="_blank">
                <a>
                  <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                    /letters
                  </h2>
                </a>
              </NextLink>
              <p className="text-gray-500 dark:text-gray-400">
                {t("subpage-letters-description")}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="pr-1">
              <IconBoxModel
                className="text-black dark:text-white"
                size={27}
                stroke={1.7}
              />
            </div>
            <div className="flex-cols md:flex items-center space-x-0 md:space-x-2">
              <a href="https://phong.bio.link" target="_blank">
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  phong.bio.link
                </h2>
              </a>
              <p className="text-gray-500 dark:text-gray-400">
                Verified by BIO.LINK
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
