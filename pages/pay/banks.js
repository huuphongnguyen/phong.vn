import { Copy } from "akar-icons";
import PayHeader from "../../components/structures/pay/PayHeader";
import PayNavigationBar from "../../components/structures/pay/PayNavigationBar";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PayFooter from "../../components/structures/pay/PayFooter";
import HideButton from "../../components/structures/pay/HideButton";
import useTranslation from "next-translate/useTranslation";

export default function Banks() {
  const { t } = useTranslation("pay");

  const [isAllCopied1, setIsAllCopied1] = useState(false);
  const [isNumCopied1, setIsNumCopied1] = useState(false);

  const [isAllCopied2, setIsAllCopied2] = useState(false);
  const [isNumCopied2, setIsNumCopied2] = useState(false);

  const [isAllCopied3, setIsAllCopied3] = useState(false);
  const [isNumCopied3, setIsNumCopied3] = useState(false);

  const onCopyAllText1 = () => {
    setIsAllCopied1(true);
    setTimeout(() => {
      setIsAllCopied1(false);
    }, 3000);
  };

  const onCopyNumText1 = () => {
    setIsNumCopied1(true);
    setTimeout(() => {
      setIsNumCopied1(false);
    }, 3000);
  };

  const onCopyAllText2 = () => {
    setIsAllCopied2(true);
    setTimeout(() => {
      setIsAllCopied2(false);
    }, 3000);
  };

  const onCopyNumText2 = () => {
    setIsNumCopied2(true);
    setTimeout(() => {
      setIsNumCopied2(false);
    }, 3000);
  };

  const onCopyAllText3 = () => {
    setIsAllCopied3(true);
    setTimeout(() => {
      setIsAllCopied3(false);
    }, 3000);
  };

  const onCopyNumText3 = () => {
    setIsNumCopied3(true);
    setTimeout(() => {
      setIsNumCopied3(false);
    }, 3000);
  };

  return (
    <div className="p-4">
      <PayHeader />
      <PayNavigationBar />
      <HideButton />
      <div className="items-start mx-auto w-full max-w-xl mt-7 space-y-6">
        <div className="flex space-x-4">
          <div className="w-[75%] bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <div className="block md:flex space-x-0 md:space-x-2 items-center">
              <h3 className="text-black dark:text-white font-sourcecodepro uppercase text-base">
                TPBank
              </h3>
              <p className="text-black dark:text-white uppercase text-xs">
                {t("banks-tpbank-name")}
              </p>
            </div>
            <p className="text-black dark:text-white font-sourcecodepro uppercase text-xl">
              0707150797
            </p>
            <p className="text-black dark:text-white text-sm uppercase font-bold">
              {t("phong-name")}
            </p>
            <p className="text-black dark:text-white text-sm uppercase pt-2">
              SWIFT Code: <strong>TPBVVNVX</strong>
            </p>
          </div>
          <div className="w-[25%] grid grid-cols-1 gap-4">
            <CopyToClipboard
              text={t("banks-tpbank-copy-all")}
              onCopy={onCopyAllText1}
            >
              <div className="p-2 bg-gray-100 dark:bg-gray-800 block md:flex items-center space-y-2 md:space-y-0 md:space-x-2 rounded-lg justify-center cursor-pointer transform transition-all active:scale-75">
                <Copy
                  className={`text-black dark:text-white mx-auto md:mx-0 ${
                    isAllCopied1 ? "text-purple-400" : "text-black"
                  }`}
                  size={22}
                />
                <p
                  className={`text-black dark:text-white font-sourcecodepro text-sm md:text-sm uppercase text-center ${
                    isAllCopied1 ? "text-purple-400" : "text-black"
                  }`}
                >
                  {isAllCopied1 ? "Copied" : "Copy All"}
                </p>
              </div>
            </CopyToClipboard>
            <CopyToClipboard
              text={t("banks-tpbank-copy-num")}
              onCopy={onCopyNumText1}
            >
              <div className="p-2 bg-gray-100 dark:bg-gray-800 block md:flex items-center space-y-2 md:space-y-0 md:space-x-2 rounded-lg justify-center cursor-pointer transform transition-all active:scale-75">
                <Copy
                  className={`text-black dark:text-white mx-auto md:mx-0 ${
                    isNumCopied1 ? "text-purple-400" : "text-black"
                  }`}
                  size={22}
                />
                <p
                  className={`text-black dark:text-white font-sourcecodepro text-sm md:text-sm uppercase text-center ${
                    isNumCopied1 ? "text-purple-400" : "text-black"
                  }`}
                >
                  {isNumCopied1 ? "Copied" : "Copy Num"}
                </p>
              </div>
            </CopyToClipboard>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-[75%] bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <div className="block md:flex space-x-0 md:space-x-2 items-center">
              <h3 className="text-black dark:text-white font-sourcecodepro uppercase text-base">
                MBBank
              </h3>
              <p className="text-black dark:text-white uppercase text-xs">
                {t("banks-mbbank-name")}
              </p>
            </div>
            <p className="text-black dark:text-white font-sourcecodepro uppercase text-xl">
              0707150797
            </p>
            <p className="text-black dark:text-white text-sm uppercase font-bold">
              {t("phong-name")}
            </p>
            <p className="text-black dark:text-white text-sm uppercase pt-2">
              SWIFT Code: <strong>MSCBVNVX</strong>
            </p>
          </div>
          <div className="w-[25%] grid grid-cols-1 gap-4">
            <CopyToClipboard
              text={t("banks-mbbank-copy-all")}
              onCopy={onCopyAllText2}
            >
              <div className="p-2 bg-gray-100 dark:bg-gray-800 block md:flex items-center space-y-2 md:space-y-0 md:space-x-2 rounded-lg justify-center cursor-pointer transform transition-all active:scale-75">
                <Copy
                  className={`text-black dark:text-white mx-auto md:mx-0 ${
                    isAllCopied2 ? "text-purple-400" : "text-black"
                  }`}
                  size={22}
                />
                <p
                  className={`text-black dark:text-white font-sourcecodepro text-sm md:text-sm uppercase text-center ${
                    isAllCopied2 ? "text-purple-400" : "text-black"
                  }`}
                >
                  {isAllCopied2 ? "Copied" : "Copy All"}
                </p>
              </div>
            </CopyToClipboard>
            <CopyToClipboard
              text={t("banks-mbbank-copy-num")}
              onCopy={onCopyNumText2}
            >
              <div className="p-2 bg-gray-100 dark:bg-gray-800 block md:flex items-center space-y-2 md:space-y-0 md:space-x-2 rounded-lg justify-center cursor-pointer transform transition-all active:scale-75">
                <Copy
                  className={`text-black dark:text-white mx-auto md:mx-0 ${
                    isNumCopied2 ? "text-purple-400" : "text-black"
                  }`}
                  size={22}
                />
                <p
                  className={`text-black dark:text-white font-sourcecodepro text-sm md:text-sm uppercase text-center ${
                    isNumCopied2 ? "text-purple-400" : "text-black"
                  }`}
                >
                  {isNumCopied2 ? "Copied" : "Copy Num"}
                </p>
              </div>
            </CopyToClipboard>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-[75%] bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <div className="block md:flex space-x-0 md:space-x-2 items-center">
              <h3 className="text-black dark:text-white font-sourcecodepro uppercase text-base">
                VPBank
              </h3>
              <p className="text-black dark:text-white uppercase text-xs">
                {t("banks-vpbank-name")}
              </p>
            </div>
            <p className="text-black dark:text-white font-sourcecodepro uppercase text-xl">
              8 0707150797
            </p>
            <p className="text-black dark:text-white text-sm uppercase font-bold">
              {t("phong-name")}
            </p>
            <p className="text-black dark:text-white text-sm uppercase pt-2">
              SWIFT Code: <strong>VPBKVNVX</strong>
            </p>
          </div>
          <div className="w-[25%] grid grid-cols-1 gap-4">
            <CopyToClipboard
              text={t("banks-vpbank-copy-all")}
              onCopy={onCopyAllText3}
            >
              <div className="p-2 bg-gray-100 dark:bg-gray-800 block md:flex items-center space-y-2 md:space-y-0 md:space-x-2 rounded-lg justify-center cursor-pointer transform transition-all active:scale-75">
                <Copy
                  className={`text-black dark:text-white mx-auto md:mx-0 ${
                    isAllCopied3 ? "text-purple-400" : "text-black"
                  }`}
                  size={22}
                />
                <p
                  className={`text-black dark:text-white font-sourcecodepro text-sm md:text-sm uppercase text-center ${
                    isAllCopied3 ? "text-purple-400" : "text-black"
                  }`}
                >
                  {isAllCopied3 ? "Copied" : "Copy All"}
                </p>
              </div>
            </CopyToClipboard>
            <CopyToClipboard
              text={t("banks-vpbank-copy-num")}
              onCopy={onCopyNumText3}
            >
              <div className="p-2 bg-gray-100 dark:bg-gray-800 block md:flex items-center space-y-2 md:space-y-0 md:space-x-2 rounded-lg justify-center cursor-pointer transform transition-all active:scale-75">
                <Copy
                  className={`text-black dark:text-white mx-auto md:mx-0 ${
                    isNumCopied3 ? "text-purple-400" : "text-black"
                  }`}
                  size={22}
                />
                <p
                  className={`text-black dark:text-white font-sourcecodepro text-sm md:text-sm uppercase text-center ${
                    isNumCopied3 ? "text-purple-400" : "text-black"
                  }`}
                >
                  {isNumCopied3 ? "Copied" : "Copy Num"}
                </p>
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </div>
      <PayFooter />
    </div>
  );
}
