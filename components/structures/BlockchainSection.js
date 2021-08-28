import { IconCurrencyEthereum } from "@tabler/icons";
import useTranslation from "next-translate/useTranslation";
import NFTOwner from "../elements/NFTOwner";

export default function BlockchainSection({
  data,
  dataPhongNFTVN,
  dataStampsByHumans,
}) {
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
            <div className="flex items-center space-x-2 px-2 py-1 rounded-xl">
              <h2 className="text-black dark:text-white font-bold rainbow_text_hover inline-block pointer-events-none">
                phongvn.eth
              </h2>
              <p className="text-black dark:text-white font-bold pointer-events-none">
                /
              </p>
              <p className="text-gray-500 dark:text-gray-400 pointer-events-none">
                0x09e1...513b1
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-1 md:flex md:items-center md:space-x-2 gap-2">
            <a href="https://foundation.app/@isnhp" target="_blank">
              <div className="inline-flex items-center space-x-2 border-2 bg-white border-gray-300 dark:border-white hover:border-black dark:hover:border-white rounded-xl px-2 py-1 border-dashed transition-all hover:scale-[1.05] cursor-pointer">
                <div>
                  <img
                    src="/icons/foundation.svg"
                    className="w-[60px] h-auto"
                  />
                </div>
                <p className="font-bold text-black text-base font-mono">
                  Foundation /
                </p>
                <p className="inline-flex text-black font-bold font-mono text-base">
                  @isnhp
                </p>
              </div>
            </a>
            <a href="https://opensea.io/isnhp" target="_blank">
              <div className="inline-flex items-center space-x-2 border-2 bg-white border-gray-300 dark:border-white hover:border-black dark:hover:border-white rounded-xl px-2 py-1 border-dashed transition-all hover:scale-[1.05] cursor-pointer">
                <div>
                  <img src="/icons/opensea.svg" className="w-6" />
                </div>
                <p className="font-bold text-black text-base font-mono">
                  OpenSea /
                </p>
                <p className="inline-flex text-black font-bold font-mono text-base">
                  @isnhp
                </p>
              </div>
            </a>
          </div>
          <div>
            <p className="text-black dark:text-white text-sm">
              {t("blockchain-foundation-text")}
            </p>
          </div>
        </div>

        <div>
          <div>
            <p className="text-black dark:text-white text-sm">
              Real-time syncing with{" "}
              <a
                href="https://docs.opensea.io/reference/api-overview"
                target="_blank"
                className="font-bold hover:text-blue-500"
              >
                OpenSea API
              </a>
            </p>
          </div>
          {/* <div>
            <div className="flex items-center space-x-1">
              <img
                src="https://lh3.googleusercontent.com/0Id9QQJrsoBrGxV1NkxUCY3YNbw62mnxClbX4YZO2ltXL7W09mdXB1J9rrtWFp2gjrLC03Yjz1YVF1cFBU3MsW8dnV--69FEfeWcKg=s130"
                className="w-10 h-10 rounded-xl"
              />
              <a
                href="https://opensea.io/collection/phong-collection"
                target="_blank"
                className="text-black dark:text-white font-bold"
              >
                <p>phong.NFT.vn</p>
              </a>
            </div>
            <NFTOwner data={dataPhongNFTVN} />
          </div> */}
          <div>
            <div className="flex items-center space-x-1">
              <img
                src="https://lh3.googleusercontent.com/bDdNqa1yo2pxHR5RNcHVtpME13MR57UFf8U_qzifRqBY_jz1pz_bfDRpx4h-qGz8fMx-rFnBnNlpMrw3ll7ySFThu3vcBNuopKZOvw=s130"
                className="w-20 h-20 rounded-xl"
              />
              <a
                href="https://opensea.io/collection/stamps-byhumans"
                target="_blank"
                className="text-black dark:text-white font-bold"
              >
                <p>Stamps.byHumans.org</p>
              </a>
            </div>
            <NFTOwner data={dataStampsByHumans} />
          </div>
        </div>
      </div>
    </div>
  );
}
