import { Copy } from "akar-icons";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import HideButton from "../../components/structures/pay/HideButton";
import PayFooter from "../../components/structures/pay/PayFooter";
import PayHeader from "../../components/structures/pay/PayHeader";
import PayNavigationBar from "../../components/structures/pay/PayNavigationBar";

export default function Ewallets() {
  const [isAllCopied1, setIsAllCopied1] = useState(false);

  const [isAllCopied2, setIsAllCopied2] = useState(false);

  const [isAllCopied3, setIsAllCopied3] = useState(false);

  const [isAllCopied4, setIsAllCopied4] = useState(false);

  const [isAllCopied5, setIsAllCopied5] = useState(false);

  const onCopyAllText1 = () => {
    setIsAllCopied1(true);
    setTimeout(() => {
      setIsAllCopied1(false);
    }, 3000);
  };

  const onCopyAllText2 = () => {
    setIsAllCopied2(true);
    setTimeout(() => {
      setIsAllCopied2(false);
    }, 3000);
  };

  const onCopyAllText3 = () => {
    setIsAllCopied3(true);
    setTimeout(() => {
      setIsAllCopied3(false);
    }, 3000);
  };

  const onCopyAllText4 = () => {
    setIsAllCopied4(true);
    setTimeout(() => {
      setIsAllCopied4(false);
    }, 3000);
  };

  const onCopyAllText5 = () => {
    setIsAllCopied5(true);
    setTimeout(() => {
      setIsAllCopied5(false);
    }, 3000);
  };

  return (
    <div className="p-4">
      <PayHeader />
      <PayNavigationBar />
      <HideButton />
      <div className="items-start mx-auto w-full max-w-xl mt-7 space-y-6">
        <div className="w-full border-2 border-black dark:border-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-black dark:border-white">
              <div className="w-full h-full grid grid-cols-2 gap-2">
                <div className="border-r-2 h-full border-black dark:border-white">
                  <div className="p-2 h-full flex items-center justify-center">
                    <div className="w-10 h-10 relative">
                      <img
                        src="/icons/icon-momo.png"
                        className="object-cover absolute"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2 flex items-center justify-center">
                  <h3 className="text-black dark:text-white uppercase text-base font-sourcecodepro text-center">
                    MOMO
                  </h3>
                </div>
              </div>
            </div>
            <div className="font-sourcecodepro px-4 py-2 md:p-2 flex w-full items-center">
              <div className="w-[70%]">
                <h3 className="text-black dark:text-white uppercase text-base">
                  Nguyen Huu Phong
                </h3>
                <p className="text-black dark:text-white uppercase text-xl">
                  0707150797
                </p>
              </div>
              <div className="w-[30%]">
                <CopyToClipboard text="0707150797" onCopy={onCopyAllText1}>
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 block items-center space-y-2 rounded-lg justify-center cursor-pointer transform transition-all active:scale-75">
                    <Copy
                      className={`text-black dark:text-white mx-auto ${
                        isAllCopied1 ? "text-purple-400" : "text-black"
                      }`}
                      size={22}
                    />
                    <p
                      className={`text-black dark:text-white font-sourcecodepro text-sm md:text-sm uppercase text-center ${
                        isAllCopied1 ? "text-purple-400" : "text-black"
                      }`}
                    >
                      {isAllCopied1 ? "Copied" : "Copy"}
                    </p>
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-2 border-black dark:border-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-black dark:border-white">
              <div className="w-full h-full grid grid-cols-2 gap-2">
                <div className="border-r-2 h-full border-black dark:border-white">
                  <div className="p-2 h-full flex items-center justify-center">
                    <div className="w-10 h-10 relative">
                      <img
                        src="/icons/icon-zalopay.png"
                        className="object-cover absolute"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2 flex items-center justify-center">
                  <h3 className="text-black dark:text-white uppercase text-base font-sourcecodepro text-center">
                    ZaloPay
                  </h3>
                </div>
              </div>
            </div>
            <div className="font-sourcecodepro px-4 py-2 md:p-2 flex w-full items-center">
              <div className="w-[70%]">
                <h3 className="text-black dark:text-white uppercase text-base">
                  Nguyen Huu Phong
                </h3>
                <p className="text-black dark:text-white uppercase text-xl">
                  0707150797
                </p>
              </div>
              <div className="w-[30%]">
                <CopyToClipboard text="0707150797" onCopy={onCopyAllText2}>
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 block items-center space-y-2 rounded-lg justify-center cursor-pointer transform transition-all active:scale-75">
                    <Copy
                      className={`text-black dark:text-white mx-auto ${
                        isAllCopied2 ? "text-purple-400" : "text-black"
                      }`}
                      size={22}
                    />
                    <p
                      className={`text-black dark:text-white font-sourcecodepro text-sm md:text-sm uppercase text-center ${
                        isAllCopied2 ? "text-purple-400" : "text-black"
                      }`}
                    >
                      {isAllCopied2 ? "Copied" : "Copy"}
                    </p>
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-2 border-black dark:border-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-black dark:border-white">
              <div className="w-full h-full grid grid-cols-2 gap-2">
                <div className="border-r-2 h-full border-black dark:border-white">
                  <div className="p-2 h-full flex items-center justify-center">
                    <div className="w-10 h-10 relative">
                      <img
                        src="/icons/icon-viettelpay.png"
                        className="object-cover absolute"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2 flex items-center justify-center">
                  <h3 className="text-black dark:text-white uppercase text-base font-sourcecodepro text-center">
                    Viettel
                  </h3>
                </div>
              </div>
            </div>
            <div className="font-sourcecodepro px-4 py-2 md:p-2 flex w-full items-center">
              <div className="w-[70%]">
                <h3 className="text-black dark:text-white uppercase text-base">
                  Nguyen Huu Phong
                </h3>
                <p className="text-black dark:text-white uppercase text-xl">
                  0707150797
                </p>
              </div>
              <div className="w-[30%]">
                <CopyToClipboard text="0707150797" onCopy={onCopyAllText3}>
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 block items-center space-y-2 rounded-lg justify-center cursor-pointer transform transition-all active:scale-75">
                    <Copy
                      className={`text-black dark:text-white mx-auto ${
                        isAllCopied3 ? "text-purple-400" : "text-black"
                      }`}
                      size={22}
                    />
                    <p
                      className={`text-black dark:text-white font-sourcecodepro text-sm md:text-sm uppercase text-center ${
                        isAllCopied3 ? "text-purple-400" : "text-black"
                      }`}
                    >
                      {isAllCopied3 ? "Copied" : "Copy"}
                    </p>
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-2 border-black dark:border-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-black dark:border-white">
              <div className="w-full h-full grid grid-cols-2 gap-2">
                <div className="border-r-2 h-full border-black dark:border-white">
                  <div className="p-2 h-full flex items-center justify-center">
                    <div className="w-10 h-10 relative">
                      <img
                        src="/icons/icon-airpay.png"
                        className="object-cover absolute"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2 flex items-center justify-center">
                  <h3 className="text-black dark:text-white uppercase text-base font-sourcecodepro text-center">
                    AirPay
                  </h3>
                </div>
              </div>
            </div>
            <div className="font-sourcecodepro px-4 py-2 md:p-2 flex w-full items-center">
              <div className="w-[70%]">
                <h3 className="text-black dark:text-white uppercase text-base">
                  Nguyen Huu Phong
                </h3>
                <p className="text-black dark:text-white uppercase text-xl">
                  0707150797
                </p>
              </div>
              <div className="w-[30%]">
                <CopyToClipboard text="0707150797" onCopy={onCopyAllText4}>
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 block items-center space-y-2 rounded-lg justify-center cursor-pointer transform transition-all active:scale-75">
                    <Copy
                      className={`text-black dark:text-white mx-auto ${
                        isAllCopied4 ? "text-purple-400" : "text-black"
                      }`}
                      size={22}
                    />
                    <p
                      className={`text-black dark:text-white font-sourcecodepro text-sm md:text-sm uppercase text-center ${
                        isAllCopied4 ? "text-purple-400" : "text-black"
                      }`}
                    >
                      {isAllCopied4 ? "Copied" : "Copy"}
                    </p>
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full border-2 border-black dark:border-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="border-r-0 md:border-r-2 border-b-2 md:border-b-0 border-black dark:border-white">
              <div className="w-full h-full grid grid-cols-2 gap-2">
                <div className="border-r-2 h-full border-black dark:border-white">
                  <div className="p-2 h-full flex items-center justify-center">
                    <div className="w-10 h-10 relative">
                      <img
                        src="/icons/icon-grab.png"
                        className="object-cover absolute"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2 flex items-center justify-center">
                  <h3 className="text-black dark:text-white uppercase text-base font-sourcecodepro text-center">
                    Grab
                  </h3>
                </div>
              </div>
            </div>
            <div className="font-sourcecodepro px-4 py-2 md:p-2 flex w-full items-center">
              <div className="w-[70%]">
                <h3 className="text-black dark:text-white uppercase text-base">
                  Nguyen Huu Phong
                </h3>
                <p className="text-black dark:text-white uppercase text-xl">
                  0707150797
                </p>
              </div>
              <div className="w-[30%]">
                <CopyToClipboard text="0707150797" onCopy={onCopyAllText5}>
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 block items-center space-y-2 rounded-lg justify-center cursor-pointer transform transition-all active:scale-75">
                    <Copy
                      className={`text-black dark:text-white mx-auto ${
                        isAllCopied5 ? "text-purple-400" : "text-black"
                      }`}
                      size={22}
                    />
                    <p
                      className={`text-black dark:text-white font-sourcecodepro text-sm md:text-sm uppercase text-center ${
                        isAllCopied5 ? "text-purple-400" : "text-black"
                      }`}
                    >
                      {isAllCopied5 ? "Copied" : "Copy"}
                    </p>
                  </div>
                </CopyToClipboard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PayFooter />
    </div>
  );
}
