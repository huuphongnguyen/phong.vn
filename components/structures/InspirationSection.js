import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";

export default function InspirationSection() {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          /
        </p>
        <h1 className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          Inspiration
        </h1>
      </div>

      <div>
        <div className="flex items-start">
          <div className="pt-2">
            <div className="relative w-[40px] h-[40px] transform transition-all hover:scale-110 hover:-rotate-12">
              <img
                src="/emoji/emoji-brain.png"
                className="object-cover absolute"
              />
            </div>
          </div>
          <div className="px-4 py-2">
            <a href="/inspiration/archillect">
              <h2 className="text-black dark:text-white font-bold inline-block rainbow_text_hover ">
                {t("inspiration-archillect-title")}
              </h2>
            </a>
            <p className="text-gray-500 dark:text-gray-400">
              {t("inspiration-archillect-description")}
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="pt-2">
            <div className="relative w-[40px] h-[40px] transform transition-all hover:scale-110 hover:-rotate-12">
              <img
                src="/emoji/emoji-diamond.png"
                className="object-cover absolute"
              />
            </div>
          </div>
          <div className="px-4 py-2">
            <a href="/inspiration/twitter-hashflags">
              <h2 className="text-black dark:text-white font-bold inline-block rainbow_text_hover">
                {t("inspiration-twitterhashflags-title")}
              </h2>
            </a>
            <p className="text-gray-500 dark:text-gray-400">
              {t("inspiration-twitterhashflags-description")}
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="pt-2">
            <div className="relative w-[40px] h-[40px] transform transition-all hover:scale-110 hover:-rotate-12">
              <img
                src="/emoji/emoji-pizza.png"
                className="object-cover absolute"
              />
            </div>
          </div>
          <div className="px-4 py-2">
            <NextLink href="/inspiration/meme-sound">
              <a>
                <h2 className="text-black dark:text-white font-bold inline-block rainbow_text_hover">
                  {t("inspiration-memesound-title")}
                </h2>
              </a>
            </NextLink>
            <p className="text-gray-500 dark:text-gray-400">
              {t("inspiration-memesound-description")}
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="pt-2">
            <div className="relative w-[40px] h-[40px] transform transition-all hover:scale-110 hover:-rotate-12">
              <img
                src="/emoji/emoji-shushi.png"
                className="object-cover absolute"
              />
            </div>
          </div>
          <div className="px-4 py-2">
            <NextLink href="/inspiration/reddit-wallpaper">
              <a>
                <h2 className="text-black dark:text-white font-bold inline-block rainbow_text_hover">
                  {t("inspiration-redditwallpaper-title")}
                </h2>
              </a>
            </NextLink>
            <p className="text-gray-500 dark:text-gray-400">
              {t("inspiration-redditwallpaper-description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
