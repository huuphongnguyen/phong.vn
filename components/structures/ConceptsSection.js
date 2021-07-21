import { Planet } from "akar-icons";
import NextLink from "next/link";

export const conceptsData = [
  [
    "'Sound from Universe'",
    "/concepts/sound-from-universe",
    "2021-02-26",
    "planeticon",
  ],
];
export default function ConceptsSection() {
  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white uppercase font-sourcecodepro text-base">
          /
        </p>
        <h1 className="text-black dark:text-white uppercase font-sourcecodepro text-base">
          Concepts
        </h1>
      </div>
      <div className="px-4 py-2">
        {conceptsData.reverse().map((b, index) => (
          <div className="flex items-center space-x-3">
            <div className="pr-2">
              <Planet className="text-black dark:text-white animate-spin-slow-42" />
            </div>
            <div className="flex items-center space-x-2" key={index}>
              <p className="text-gray-500 dark:text-gray-400 font-bold font-sourcecodepro text-sm inline-flex">
                {b[2]}
              </p>
              <NextLink href={b[1]}>
                <a>
                  <h2 className="text-black dark:text-white inline-block font-bold rainbow_text_hover">
                    {b[0]}
                  </h2>
                </a>
              </NextLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
