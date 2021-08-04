import {
  IconArrowUpRight,
  IconArrowUpRightCircle,
  IconCurrencyEthereum,
} from "@tabler/icons";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

export default function BlockchainSection() {
  const [showNFTs, setShowNFTs] = useState(false);
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          /
        </p>
        <h1 className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          Blockchain
        </h1>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div>
          <div className="flex items-center space-x-2">
            <div className="-ml-1">
              <IconCurrencyEthereum
                size={33}
                stroke={1.5}
                className="text-black dark:text-white"
              />
            </div>
            <div
              className={`flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800 px-2 py-1 rounded-xl cursor-pointer transition-all active:scale-[0.9] ${
                showNFTs
                  ? "bg-gray-100 dark:bg-gray-800"
                  : "bg-white dark:bg-black"
              }`}
              onClick={() => setShowNFTs(!showNFTs)}
            >
              <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block pointer-events-none">
                phongvn.eth
              </h2>
              <p className="text-black dark:text-white font-bold pointer-events-none">
                /
              </p>
              <p className="text-gray-500 dark:text-gray-400 pointer-events-none">
                0x09e1...13b1
              </p>
            </div>
          </div>
          <div className={`${showNFTs ? "" : "hidden"}`}>
            <div className="py-2 grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="border-2 border-dashed border-black dark:border-white p-2 rounded-xl shadow-md space-y-2">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-xl relative">
                  <img
                    src="/static/phongvn-ens.png"
                    className="object-cover rounded-xl"
                  />
                  <div>
                    <a
                      href="https://app.ens.domains/name/phongvn.eth"
                      target="_blank"
                    >
                      <div className="bg-green-200">
                        <IconArrowUpRightCircle
                          size={30}
                          stroke={1.7}
                          className="text-white absolute top-2 right-2 transition-all md:hover:scale-[1.05] cursor-pointer"
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="/icons/ens.svg" className="w-7 h-7" />
                  <p className="text-gray-500 dark:text-gray-400 font-bold">
                    ENS
                  </p>
                </div>
                <div>
                  <p className="text-black dark:text-white text-sm font-bold">
                    phongvn.eth
                  </p>
                </div>
                <div>
                  <a
                    href="https://etherscan.io/token/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85?a=8156221784472025915579616492438682948609823999118762050999888493533348712771"
                    target="_blank"
                  >
                    <div className="inline-flex items-center px-2 border-2 border-black dark:border-white">
                      <p className="text-sm text-black dark:text-white">
                        Etherscan
                      </p>
                      <div>
                        <IconArrowUpRight
                          size={22}
                          stroke={1.7}
                          className="text-black dark:text-white"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <p className="text-black dark:text-white text-sm">
              {t("blockchain-foundation-text")}
            </p>
          </div>
          <div>
            <a href="https://foundation.app/@isnhp" target="_blank">
              <div className="inline-flex items-center space-x-2 border-2 border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white rounded-xl px-2 py-1 border-dashed transition-all hover:scale-[1.05] cursor-pointer">
                <div>
                  <img
                    src="/icons/foundation.svg"
                    className="w-[60px] h-auto"
                  />
                </div>
                <p className="font-bold text-black dark:text-white text-base font-mono">
                  Foundation/
                </p>
                <p className="inline-flex rainbow_text_foundation font-bold font-mono text-base">
                  @isnhp
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
