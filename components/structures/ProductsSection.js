import { ArrowRight, PointingUp, RockOn } from "akar-icons";
import AXCoin from "../elements/AXCoin";
import ChangeCoin from "../elements/ChangeCoin";
import EMBCoin from "../elements/EMBCoin";

export default function ProductsSection() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <div className="inline-flex items-center space-x-1">
          <p className="text-black dark:text-white text-base uppercase font-sourcecodepro">
            /
          </p>
          <h1 className="text-black dark:text-white text-base uppercase font-sourcecodepro">
            Products
          </h1>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-2 mt-2">
        <div className="w-full flex items-center space-x-2">
          <RockOn className="text-black dark:text-white" size={23} />
          <p className="text-black dark:text-white font-bold uppercase text-xs">
            my coins here:
          </p>
        </div>
        <div className="w-full flex md:hidden items-center justify-end space-x-2">
          <p className="text-black dark:text-white font-bold uppercase text-xs">
            scroll to view more
          </p>
          <ArrowRight className="text-black dark:text-white" size={16} />
        </div>
      </div>
      <div className="mt-5 -mb-5 flex space-x-4 w-full overflow-x-scroll scrollbar-hide md:grid md:grid-cols-4">
        <a href="https://change.vn" target="_blank">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex-col items-center justify-center relative inline-flex py-2 group transform transition-all md:hover:scale-[0.9]">
            <div className="transform scale-[0.5] transition-all md:group-hover:scale-[0.7] -mt-20 -mb-20 -ml-4 -mr-4">
              <ChangeCoin />
            </div>
            <h2 className="text-black dark:text-white font-sourcecodepro uppercase text-base transform transition-all mx-auto text-center md:group-hover:translate-y-6">
              Change.vn
            </h2>
          </div>
        </a>
        <a href="https://theuvitinhanhxuyen.com" target="_blank">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex-col items-center justify-center relative inline-flex py-2 group transform transition-all md:hover:scale-[0.9]">
            <div className="transform scale-[0.5] transition-all md:group-hover:scale-[0.7] -mt-20 -mb-20 -ml-4 -mr-4">
              <AXCoin />
            </div>
            <h2 className="text-black dark:text-white font-sourcecodepro uppercase text-base transform transition-all mx-auto text-center md:group-hover:translate-y-6">
              AX Embroidery
            </h2>
          </div>
        </a>
        <a href="https://emb.vn" target="_blank">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-md flex-col items-center justify-center relative inline-flex py-2 group transform transition-all md:hover:scale-[0.9]">
            <div className="transform scale-[0.5] transition-all md:group-hover:scale-[0.7] -mt-20 -mb-20 -ml-4 -mr-4">
              <EMBCoin />
            </div>
            <h2 className="text-black dark:text-white font-sourcecodepro uppercase text-base transform transition-all mx-auto text-center md:group-hover:translate-y-6">
              Emb.vn
            </h2>
          </div>
        </a>
      </div>
    </div>
  );
}
