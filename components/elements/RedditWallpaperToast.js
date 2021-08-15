import useTranslation from "next-translate/useTranslation";

export default function RedditWallpaperToast({ item }) {
  const { t } = useTranslation("redditwallpaper");

  return (
    <div className="space-y-2">
      <div>
        <img src={item.small_img} className="w-full" />
      </div>

      <p className="text-black font-sourcecodepro text-sm">
        {t("redditwallpaper-author")}: <strong>{item.author}</strong>
      </p>
      <div>
        <div>
          <a
            href={`https://www.reddit.com${item.permalink}`}
            target="_blank"
            className="text-blue-500 hover:text-blue-700 text-sm font-bold"
          >
            {t("redditwallpaper-seeonreddit")}
          </a>
        </div>
        <div>
          <a
            href={item.url}
            target="_blank"
            className="text-blue-500 hover:text-blue-700 text-sm font-bold"
          >
            {t("redditwallpaper-download")}
          </a>
        </div>
      </div>
    </div>
  );
}
