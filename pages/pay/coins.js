import HideButton from "../../components/structures/pay/HideButton";
import PayFooter from "../../components/structures/pay/PayFooter";
import PayHeader from "../../components/structures/pay/PayHeader";
import PayNavigationBar from "../../components/structures/pay/PayNavigationBar";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "akar-icons";
import toast, { Toaster } from "react-hot-toast";

export default function Coins() {
  const [isAllCopied1, setIsAllCopied1] = useState(false);
  const [isAllCopied2, setIsAllCopied2] = useState(false);
  const [isAllCopied3, setIsAllCopied3] = useState(false);

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

  return (
    <div className="p-4">
      <PayHeader />
      <PayNavigationBar />
      <HideButton />
      <div className="items-start mx-auto w-full max-w-xl mt-7 space-y-6">
        <Toaster />
        <div className="flex items-center justify-center">
          <CopyToClipboard text="phongvn.eth" onCopy={onCopyAllText3}>
            <h3
              className="text-black font-bold text-2xl text-center rainbow_text_foundation p-4 cursor-pointer transform transition-all active:scale-75"
              onClick={() =>
                toast(
                  <p className="text-black dark:text-white uppercase text-sm font-sourcecodepro">
                    Copied
                  </p>,
                  {
                    icon: "🎉",
                  }
                )
              }
            >
              phongvn.eth
            </h3>
          </CopyToClipboard>
        </div>
        <div className="text-black px-4 py-2 rounded-lg space-y-2">
          <div className="flex items-center space-x-4 w-full">
            <img src="/icons/bitcoin.svg" className="w-10 h-10 text-black" />
            <div className="w-[70%] md:w-[80%]">
              <h3 className="text-black dark:text-white font-sourcecodepro uppercase text-base">
                Bitcoin
              </h3>
              <p className="text-black dark:text-white text-sm">
                bc1qczp6rz3...ka57dujdny2
              </p>
            </div>
            <div className="w-[30%] md:w-[20%]">
              <CopyToClipboard
                text="bc1qczp6rz3uya3z3ng60m9ykfsqt05ka57dujdny2"
                onCopy={onCopyAllText1}
              >
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
          <div className="flex items-center space-x-4 w-full">
            <img src="/icons/ethereum.svg" className="w-10 h-10 text-black" />
            <div className="w-[70%] md:w-[80%]">
              <h3 className="text-black dark:text-white font-sourcecodepro uppercase text-base">
                Ethereum
              </h3>
              <p className="text-black dark:text-white text-sm">
                0x09e166...e42d29513b1
              </p>
            </div>
            <div className="w-[30%] md:w-[20%]">
              <CopyToClipboard
                text="0x09e1665fFe61b0620804b2549E9d6e42d29513b1"
                onCopy={onCopyAllText2}
              >
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
      <PayFooter />
    </div>
  );
}
