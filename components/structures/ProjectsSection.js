import NextLink from "next/link";
import { Toaster } from "react-hot-toast";
import {
  Hashtag_2019,
  Hashtag_2020,
  Hashtag_2021,
  Hashtag_developing,
  Hashtag_shutdown,
  Hashtag_stillloveit,
  Hashtag_2017,
} from "../elements/HashtagsData";
import useTranslation from "next-translate/useTranslation";
import { ArrowUpRight } from "akar-icons";

export default function ProjectsSection() {
  const { t } = useTranslation("common");
  return (
    <div>
      <div className="flex items-center space-x-2">
        <div className="inline-flex items-center space-x-1">
          <p className="text-black dark:text-white text-base uppercase font-sourcecodepro">
            /
          </p>
          <h1 className="text-black dark:text-white text-base uppercase font-sourcecodepro">
            Projects
          </h1>
        </div>
        <a href="/projects">
          <div className="flex items-center space-x-1 bg-black dark:bg-white px-2 py-1">
            <p className="text-white dark:text-black font-bold uppercase text-xs">
              See all
            </p>
            <ArrowUpRight className="text-white dark:text-black" size={18} />
          </div>
        </a>
      </div>

      <div className="px-4 py-2 space-y-4 pl-3">
        <div className="flex items-start space-x-3">
          <div className="w-[10%] md:w-auto pt-2">
            <div className="w-8 h-8 relative">
              <img
                src="/icons/changevn-feature-icon.svg"
                className="object-cover absolute"
              />
            </div>
          </div>
          <div>
            <NextLink href="/projects/changevn">
              <a>
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  {t("projects-changevn-title")}
                </h2>
              </a>
            </NextLink>
            <p className="text-gray-500 dark:text-gray-400">
              {t("projects-changevn-description")}
            </p>
            <div className="flex space-x-2">
              <Hashtag_2021 t={t} />
              <Hashtag_developing t={t} />
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-[10%] md:w-auto pt-2">
            <div className="w-8 h-8 relative">
              <img
                src="/icons/axembroidery-feature-icon.svg"
                className="object-cover absolute"
              />
            </div>
          </div>
          <div>
            <NextLink href="/projects/axembroidery">
              <a>
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  {t("projects-ax-title")}
                </h2>
              </a>
            </NextLink>
            <p className="text-gray-500 dark:text-gray-400">
              {t("projects-ax-description")}
            </p>
            <div className="flex space-x-2">
              <Hashtag_2017 t={t} />
              <Hashtag_developing t={t} />
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-[10%] md:w-auto pt-2">
            <div className="w-8 h-8 relative">
              <img
                src="/icons/embvn-feature-icon.svg"
                className="object-cover absolute"
              />
            </div>
          </div>
          <div>
            <NextLink href="/projects/embvn">
              <a>
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  {t("projects-embvn-title")}
                </h2>
              </a>
            </NextLink>
            <p className="text-gray-500 dark:text-gray-400">
              {t("projects-embvn-description")}
            </p>
            <div className="flex space-x-2">
              <Hashtag_2021 t={t} />
              <Hashtag_developing t={t} />
            </div>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <div className="w-[10%] md:w-auto pt-2">
            <div className="w-8 h-8 relative">
              <img
                src="/icons/blvcksaigon-feature-icon.svg"
                className="object-cover absolute"
              />
            </div>
          </div>
          <div>
            <NextLink href="/projects/blvcksaigon">
              <a>
                <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block">
                  {t("projects-blvck-title")}
                </h2>
              </a>
            </NextLink>
            <p className="text-gray-500 dark:text-gray-400">
              {t("projects-blvck-description")}
            </p>
            <div className="flex space-x-2">
              <Hashtag_2019 t={t} />
              <Hashtag_2020 t={t} />
              <Hashtag_shutdown t={t} />
              <Hashtag_stillloveit t={t} />
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
