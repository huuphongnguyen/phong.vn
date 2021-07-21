import NextLink from "next/link";
import toast, { Toaster } from "react-hot-toast";
import useTranslate from "next-translate/useTranslation";

export default function Footer() {
  const { t } = useTranslate("common");
  return (
    <footer>
      <div className="items-start mx-auto w-full max-w-3xl space-y-1">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 items-center space-x-2">
          <div className="space-y-1">
            <div className="flex items-center space-x-1 text-sm font-sourcecodepro text-black dark:text-white uppercase">
              <p className="">Designed / Developed / Code by</p>
              <a href="https://phong.vn">
                <p className="inline-block rainbow_text_hover">PHONG</p>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <p className="font-sourcecodepro text-sm text-black dark:text-white uppercase">
                Built with
              </p>
              <div className="flex items-center space-x-2">
                <a href="https://nextjs.org" target="_blank">
                  <img
                    src="/icons/next-dot-js.svg"
                    className="w-7 h-7 dark:fill-white transform transition-all origin-center hover:scale-110"
                  />
                </a>
                <a href="https://tailwindcss.com" target="_blank">
                  <img
                    src="/icons/tailwindcss.svg"
                    className="w-7 h-7 dark:fill-white transform transition-all origin-center hover:scale-110"
                  />
                </a>
                <a href="https://vercel.com" target="_blank">
                  <img
                    src="/icons/vercel.svg"
                    className="w-7 h-7 dark:fill-white transform transition-all origin-center hover:scale-110"
                  />
                </a>
                <a href="https://notion.so" target="_blank">
                  <img
                    src="/icons/notion.svg"
                    className="w-7 h-7 dark:fill-white transform transition-all origin-center hover:scale-110"
                  />
                </a>
                <a href="https://dropbox.com" target="_blank">
                  <img
                    src="/icons/dropbox.svg"
                    className="w-7 h-7 dark:fill-white transform transition-all origin-center hover:scale-110"
                  />
                </a>
                <a href="https://cloudflare.com" target="_blank">
                  <img
                    src="/icons/cloudflare.svg"
                    className="w-7 h-7 dark:fill-white transform transition-all origin-center hover:scale-110"
                  />
                </a>
                <a href="https://github.com" target="_blank">
                  <img
                    src="/icons/github.svg"
                    className="w-7 h-7 dark:fill-white transform transition-all origin-center hover:scale-110"
                  />
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-sm font-sourcecodepro text-black dark:text-white uppercase">
              <p>and other open-source projects listed</p>
              <NextLink href="/credits">
                <a>
                  <p className="underline inline-block rainbow_text_hover">
                    here
                  </p>
                  .
                </a>
              </NextLink>
            </div>
            <div className="flex items-center space-x-1 text-sm font-sourcecodepro text-black dark:text-white uppercase">
              <p className="">This website is also open-sourced on</p>
              <a
                href="https://github.com/huuphongnguyen/phong.vn"
                target="_blank"
              >
                <p className="inline-block rainbow_text_hover underline">
                  Github
                </p>
                .
              </a>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div
              className="w-[100px] h-[100px] relative rounded-lg transform transition-all origin-center hover:bg-purple-100 active:scale-75 cursor-pointer"
              onClick={() =>
                toast(
                  <p className="text-black dark:text-white text-sm">
                    {t("footer-lilac-toast-line1")}
                    <br /> {t("footer-lilac-toast-line2")}
                  </p>,
                  {
                    icon: "🟣",
                  }
                )
              }
            >
              <img
                src="https://media0.giphy.com/media/EJwVFI5sUsNTi9AZYL/giphy.gif?cid=4fcb451eo2t34wsqupqec848qdgeenx6v1l82oqcyatbakws&rid=giphy.gif&ct=s"
                layout="fill"
                className="object-cover absolute"
              />
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    </footer>
  );
}
