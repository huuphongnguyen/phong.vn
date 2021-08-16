import Container from "../../components/Container";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";
import NextLink from "next/link";
import RedditWallpaperGrid from "../../components/elements/RedditWallpaperGrid";
import axios from "axios";
import useTranslation from "next-translate/useTranslation";

export async function getStaticProps() {
  const redditApiUrl = process.env.REDDIT_WALLPAPER_API_URL;
  const axiosUrl = `${redditApiUrl}?&limit=103&raw_json=1`;

  const res = await axios.get(axiosUrl);
  const data = await res.data;
  var dataFromRedditWallpaperAPI = [];
  data.data.children.map((item) => {
    try {
      const parent_img = item?.data.preview.images[0].resolutions[3].url;
      dataFromRedditWallpaperAPI.push({
        id: item.data.id,
        title: item.data.title,
        url: item.data.url,
        author: item.data.author,
        small_img: parent_img,
        ups: item.data.ups,
        permalink: item.data.permalink,
      });
    } catch (e) {
      console.log(e);
    }
  });

  return {
    props: {
      resultsRedditWallpaper: dataFromRedditWallpaperAPI,
    },
    revalidate: 60,
  };
}

export default function RedditWallpaper({ resultsRedditWallpaper }) {
  const seotitle = `Reddit Wallpaper - Phong.vn`;
  const seodescrip = `Hơn 80 ảnh mới nhất được lấy trực tiếp trên Reddit trong mục r/Wallpaper với ảnh chất lượng cao nhất.`;
  const seourl = `https://phong.vn/inspiration/reddit-wallpaper`;
  const seopreviewimg =
    "/static/images/inspiration/reddit-wallpaper-feature-img.png";

  const { t } = useTranslation("redditwallpaper");

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
      <div className="items-start mx-auto w-full max-w-3xl space-y-2">
        <div>
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
            <h1>Reddit Wallpaper</h1>
          </div>
        </div>
        <div className="py-1">
          <p className="text-black dark:text-white text-sm">
            {t("redditwallpaper-description")}{" "}
            <a
              href="https://www.reddit.com/r/wallpapers"
              target="_blank"
              className="font-bold rainbow_text_hover "
            >
              r/Wallpaper
            </a>
            .
          </p>
        </div>
        <div>
          <RedditWallpaperGrid sync={resultsRedditWallpaper} />
        </div>
      </div>
    </Container>
  );
}
