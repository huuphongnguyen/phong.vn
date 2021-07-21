import { ArrowCycle, ArrowUpRight, Box, CheckBox } from "akar-icons";
import { useState } from "react";

export default function QuotesView({ resultssync }) {
  const [isRefreshed, setIsRefreshed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isTranslated, setIsTranslated] = useState(false);

  const getQuotesArray = () => {
    let quotesarray = [];

    resultssync.forEach((block) => {
      quotesarray.push(
        <div
          className={`p-[2px] rounded-lg ${
            isDisabled
              ? "border_dash_animated dark:border_dash_animated_dark"
              : "border-2 border-gray-200 dark:border-gray-700"
          }`}
        >
          <div
            className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-lg space-y-2 filter ${
              isDisabled ? "filter-blur-4" : "filter-blur-0"
            }`}
          >
            <p className="text-black dark:text-white text-sm">
              "
              {isTranslated
                ? block.properties.viquote.rich_text[0].plain_text
                : block.properties.enquote.rich_text[0].plain_text}
              "
            </p>
            <div className="flex items-center space-x-2">
              <a href={block.properties.ref.url} target="_blank">
                <div className="inline-flex items-center space-x-1 bg-white dark:bg-black hover:bg-black dark:hover:bg-white group px-2 py-1">
                  <p className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black uppercase font-bold text-xs">
                    References
                  </p>
                  <ArrowUpRight
                    className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                    size={18}
                  />
                </div>
              </a>
              <p className="text-black dark:text-white font-sourcecodepro uppercase text-sm">
                {block.properties.whosaid.title[0].plain_text}
              </p>
            </div>
          </div>
        </div>
      );
    });

    return quotesarray;
  };

  const getQuotesDisplay = () => {
    let quotesarraylist = getQuotesArray();

    var quotepick =
      quotesarraylist[Math.floor(Math.random() * quotesarraylist.length)];
    return quotepick;
  };

  function RefreshQuote() {
    setIsRefreshed((isRefreshed) => !isRefreshed);
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 2000);
  }

  function TranslateQuote() {
    setIsTranslated((isTranslated) => !isTranslated);
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <button
          className="inline-flex items-center space-x-2 px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          onClick={RefreshQuote}
          disabled={isDisabled}
        >
          <ArrowCycle
            className={`text-black dark:text-white ${
              isDisabled ? "animate-spin" : "animate-none"
            }`}
            size={22}
          />
          <p
            className={`text-black dark:text-white text-sm font-sourcecodepro uppercase pointer-events-none select-none ${
              isDisabled ? "text-gray-400" : "text-black"
            }`}
          >
            {isDisabled ? "Finding one..." : "Another one"}
          </p>
        </button>
        <div
          className="text-black dark:text-white px-2 py-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 inline-flex space-x-2 items-center cursor-pointer"
          onClick={TranslateQuote}
        >
          {isTranslated ? <CheckBox size={22} /> : <Box size={22} />}
          <p className="font-sourcecodepro uppercase text-sm pointer-events-none select-none">
            Vietnamese
          </p>
        </div>
      </div>
      <div>{isRefreshed ? getQuotesDisplay() : getQuotesDisplay()}</div>
    </div>
  );
}
