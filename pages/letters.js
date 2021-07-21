import Container from "../components/Container";
import NextLink from "next/link";
import { ArrowUpRight, Envelope } from "akar-icons";

export const LettersList = [
  ["#0001", "/"],
  ["#0002", "/credits"],
  ["#0003", "/projects/axembroidery"],
  ["#0004", "/projects/blvcksaigon"],
  ["#0005", "/projects/embvn"],
  ["#0006", "/domains"],
  ["#0007", "/projects/changevn"],
];

export default function Letters() {
  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl">
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-base uppercase font-sourcecodepro mt-5">
          <NextLink href="/">
            <a>
              <p className="text-gray-300 dark:text-gray-600 hover:text-black dark:hover:text-white">
                FRONT-PAGE
              </p>
            </a>
          </NextLink>
          <p>/</p>
          <h1>Letters</h1>
        </div>
        <div className="text-black dark:text-white space-y-2 mt-4">
          <div className="grid grid-cols-1 gap-4">
            {LettersList.map((letter, index) => (
              <NextLink href={letter[1]}>
                <a>
                  <div
                    className="p-2 border-gray-200 dark:border-gray-700 rounded-lg border-2 flex items-center justify-between transform transition-all hover:border-dashed hover:border-black hover:scale-[1.05]"
                    key={index}
                  >
                    <div className="flex items-center space-x-2">
                      <Envelope
                        className="text-black dark:text-white"
                        size={25}
                      />
                      <p className="text-black dark:text-white font-sourcecodepro text-base uppercase">
                        Letter number: <span>{letter[0]}</span>
                      </p>
                    </div>
                    <div className="pr-2 flex items-center space-x-1">
                      <p className="text-black dark:text-white uppercase font-bold text-sm">
                        Xem
                      </p>
                      <div>
                        <ArrowUpRight
                          className="text-black dark:text-white"
                          size={22}
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </NextLink>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
