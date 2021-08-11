import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

export default function NFTOwner({ data }) {
  const [copied, setCopied] = useState(false);

  function CopyCryptoString() {}
  return (
    <div>
      <div className="pb-3">
        <p className="text-black dark:text-white text-sm">
          Real-time syncing with{" "}
          <a href="" target="_blank" className="font-bold hover:text-blue-500">
            OpenSea API
          </a>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {data.map((nft) => (
          <div
            key={nft.id}
            className="p-2 border-2 border-dashed border-black dark:border-white rounded-xl space-y-2"
          >
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                src={nft.image_preview_url}
                className="object-cover rounded-md"
              />
            </div>
            <div>
              <div className="flex items-center space-x-1">
                <p className="font-bold text-black dark:text-white uppercase text-xs">
                  Creator:{" "}
                </p>
                {nft.creator.address.substring(0, 7) === "0x00000" ? (
                  <p className="text-black dark:text-white text-sm line-clamp-1">
                    Hold by Creator
                  </p>
                ) : (
                  <CopyToClipboard
                    text={nft.creator.address}
                    onCopy={CopyCryptoString}
                  >
                    <p className="text-black dark:text-white text-sm line-clamp-1 rainbow_text_hover cursor-pointer transition-all active:scale-[0.9]">
                      {nft.creator.address.substring(0, 4) +
                        "..." +
                        nft.creator.address.substring(
                          nft.creator.address.length - 5
                        )}
                    </p>
                  </CopyToClipboard>
                )}
              </div>
              <div className="flex items-center space-x-1">
                <p className="font-bold text-black dark:text-white uppercase text-xs">
                  Owner:{" "}
                </p>
                {nft.owner.address.substring(0, 7) === "0x00000" ? (
                  <p className="text-black dark:text-white text-sm line-clamp-1">
                    Creator
                  </p>
                ) : (
                  <CopyToClipboard
                    text={nft.owner.address}
                    onCopy={CopyCryptoString}
                  >
                    <p className="text-black dark:text-white text-sm line-clamp-1 rainbow_text_hover cursor-pointer transition-all active:scale-[0.9]">
                      {nft.owner.address.substring(0, 4) +
                        "..." +
                        nft.owner.address.substring(
                          nft.owner.address.length - 5
                        )}
                    </p>
                  </CopyToClipboard>
                )}
              </div>
              <div>
                <p className="text-black dark:text-white font-bold line-clamp-1">
                  {nft.name}
                </p>
              </div>
              <a href={nft.permalink} target="_blank">
                <div className="flex items-center space-x-1 w-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                  <img src="/icons/opensea.svg" className="w-7 h-7" />
                  <p className="text-black dark:text-white font-bold text-sm pointer-events-none">
                    OpenSea
                  </p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
