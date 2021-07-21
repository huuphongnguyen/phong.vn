import { ChevronDown, CircleCheck, Heart, Ribbon } from "akar-icons";
import NextLink from "next/link";
import LanguageSwitcher from "../../features/LanguageSwitcher";
import PayThemeSwitcher from "./PayThemeSwitcher";

export default function PayHeader() {
  return (
    <div>
      <div className="items-start mx-auto w-full max-w-xl space-y-6">
        <div className="w-full  mt-10 flex items-center justify-center">
          <div className="w-[150px] h-[150px] flex items-center justify-center bg-white dark:bg-white rounded-full">
            <div className="w-[100px] h-[100px] relative transform translate-x-2">
              <img
                src="/phong-logo-black.svg"
                className="object-fill absolute"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 justify-center">
          <h1 className="text-black dark:text-white font-sourcecodepro uppercase text-xl inline-flex">
            Phong.vn
          </h1>
          <CircleCheck className="text-black dark:text-white" size={22} />
        </div>
        <div className="w-full space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <NextLink href="/">
              <a>
                <div className="border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white group inline-flex space-x-1 items-center px-2">
                  <p className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black font-sourcecodepro uppercase text-base inline-flex">
                    Home
                  </p>
                  <Ribbon
                    className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
                    size={22}
                  />
                </div>
              </a>
            </NextLink>
            <NextLink href="/phong">
              <a>
                <div className="border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white group inline-flex space-x-1 items-center px-2">
                  <p className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black font-sourcecodepro uppercase text-base inline-flex">
                    Contact
                  </p>
                  <Heart
                    className="text-black group-hover:text-white dark:text-white dark:group-hover:text-black"
                    size={22}
                  />
                </div>
              </a>
            </NextLink>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <PayThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
      <div className="items-start mx-auto w-full max-w-xl space-y-6 mt-4">
        <p className="text-black dark:text-white font-sourcecodepro uppercase text-base text-center">
          "Buy me a coffee if you want. <br /> Thank you and love it."
        </p>
        <div className="flex items-center justify-center">
          <ChevronDown
            className="text-black dark:text-white animate-bounce"
            size={22}
          />
        </div>
      </div>
    </div>
  );
}
