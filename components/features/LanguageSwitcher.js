import NextLink from "next/link";
import { useRouter } from "next/router";

export default function LanguageSwitcher() {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-1">
      <NextLink href={router.asPath} locale="vi-VN">
        <a>
          <div
            className={`bg-white dark:bg-black focus:outline-none h-9 w-9 transform transition-all ease-in-out active:scale-75 flex items-center justify-center ${
              router.locale === "vi-VN"
                ? "bg-transparent border-2 border-black dark:border-white"
                : "bg-transparent border-2 border-gray-200 dark:border-gray-600"
            }`}
          >
            <p className="text-black dark:text-white font-sourcecodepro text-sm uppercase rainbow_text_hover">
              vi
            </p>
          </div>
        </a>
      </NextLink>
      <NextLink href={router.asPath} locale="en">
        <a>
          <div
            className={`bg-white dark:bg-black focus:outline-none h-9 w-9 transform transition-all ease-in-out active:scale-75 flex items-center justify-center ${
              router.locale === "en"
                ? "bg-transparent border-2 border-black dark:border-white"
                : "bg-transparent border-2 border-gray-200 dark:border-gray-600"
            }`}
          >
            <p className="text-black dark:text-white font-sourcecodepro text-sm uppercase rainbow_text_hover">
              en
            </p>
          </div>
        </a>
      </NextLink>
    </div>
  );
}
