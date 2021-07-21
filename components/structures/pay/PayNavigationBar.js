import { Coin, MobileDevice, Money, Radish } from "akar-icons";
import NextLink from "next/link";
import { useRouter } from "next/router";

export default function PayNavigationBar() {
  const router = useRouter();

  return (
    <div className="items-start mx-auto w-full max-w-xl grid grid-cols-4 gap-2 md:gap-4 mt-7">
      <NextLink href="/pay/banks">
        <a>
          <div
            className={`space-y-2 items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-2 transform transition-all md:hover:scale-110 group border-black dark:border-white ${
              router.pathname === "/pay/banks" ? "border-2" : "border-0"
            }`}
          >
            <div className="flex items-center justify-center">
              <Money className="w-7 h-7 text-black dark:text-white" size={23} />
            </div>
            <h2 className="text-black dark:text-white font-sourcecodepro text-center uppercase text-sm">
              Banks
            </h2>
          </div>
        </a>
      </NextLink>
      <NextLink href="/pay/ewallets">
        <a>
          <div
            className={`space-y-2 items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-2 transform transition-all md:hover:scale-110 group border-black dark:border-white ${
              router.pathname === "/pay/ewallets" ? "border-2" : "border-0"
            }`}
          >
            <div className="flex items-center justify-center">
              <MobileDevice
                className="w-7 h-7 text-black dark:text-white"
                size={23}
              />
            </div>
            <h2 className="text-black dark:text-white font-sourcecodepro text-center uppercase text-sm">
              E-Wall
            </h2>
          </div>
        </a>
      </NextLink>
      <NextLink href="/pay/coins">
        <a>
          <div
            className={`space-y-2 items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-2 transform transition-all md:hover:scale-110 group border-black dark:border-white ${
              router.pathname === "/pay/coins" ? "border-2" : "border-0"
            }`}
          >
            <div className="flex items-center justify-center">
              <Coin className="w-7 h-7 text-black dark:text-white" size={23} />
            </div>
            <h2 className="text-black dark:text-white font-sourcecodepro text-center uppercase text-sm">
              Coins
            </h2>
          </div>
        </a>
      </NextLink>
      <NextLink href="/pay/others">
        <a>
          <div
            className={`space-y-2 items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-2 transform transition-all md:hover:scale-110 group border-black dark:border-white ${
              router.pathname === "/pay/others" ? "border-2" : "border-0"
            }`}
          >
            <div className="flex items-center justify-center">
              <Radish
                className="w-7 h-7 text-black dark:text-white"
                size={23}
              />
            </div>
            <h2 className="text-black dark:text-white font-sourcecodepro text-center uppercase text-sm">
              Others
            </h2>
          </div>
        </a>
      </NextLink>
    </div>
  );
}
