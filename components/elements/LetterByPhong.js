import ContactButton from "./ContactButton";
import LetterSignatureByPhong from "./LetterSignatureByPhong";
import NextLink from "next/link";

export default function LetterByPhong({ children, letterNumber }) {
  return (
    <div className="p-2 w-full md:w-full-80 mx-auto border-2 border-black dark:border-white space-y-4">
      <div className="text-black dark:text-white text-sm">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <NextLink href="/letters">
              <a>
                <div className="px-2 py-1 bg-black dark:bg-white inline-flex">
                  <p className="text-white dark:text-black uppercase font-bold text-xs">
                    Post Box
                  </p>
                </div>
              </a>
            </NextLink>
            <p className="font-bold uppercase font-sourcecodepro text-black dark:text-white text-base">
              Letter Number: <strong>{letterNumber}</strong>
            </p>
          </div>
          {children}
          <div className="flex relative">
            <LetterSignatureByPhong />
            <div className="absolute right-[45px] md:right-[70px] bottom-0">
              <ContactButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
