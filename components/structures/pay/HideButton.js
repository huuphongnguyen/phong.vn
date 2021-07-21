import { EyeSlashed } from "akar-icons";
import NextLink from "next/link";

export default function HideButton() {
  return (
    <div className="items-start mx-auto w-full max-w-xl mt-7 space-y-6">
      <NextLink href="/pay">
        <a>
          <div className="w-full md:w-full-30 mx-auto p-2 flex items-center space-x-2 justify-center bg-gray-100 dark:bg-gray-800 rounded-lg transform transition-all active:scale-75">
            <EyeSlashed className="text-black dark:text-white" size={22} />
            <p className="text-black dark:text-white font-sourcecodepro uppercase text-sm">
              Hide
            </p>
          </div>
        </a>
      </NextLink>
    </div>
  );
}
