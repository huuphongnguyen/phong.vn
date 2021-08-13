import { IconArrowUpCircle, IconMessage } from "@tabler/icons";
import useTranslation from "next-translate/useTranslation";

export default function ProductHuntSection({ data }) {
  const { t } = useTranslation("common");

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          /
        </p>
        <h1 className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          ProductHunt
        </h1>
      </div>
      <div>
        <div className="space-y-2">
          <div className="py-2">
            <a href="https://www.producthunt.com/@isnhp" target="_blank">
              <div className="inline-flex items-center space-x-2 p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl">
                <img
                  src="/icons/producthunt.svg"
                  className="w-7 h-7 bg-white rounded-full"
                />
                <p className="text-black dark:text-white font-bold pointer-events-none">
                  ProductHunt / @isnhp
                </p>
              </div>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="w-full">
              <p className="text-black dark:text-white text-sm">
                {t("producthunt-sub")}
              </p>
            </div>
            <div className="w-full">
              <p className="text-black dark:text-white text-sm text-left md:text-right">
                Real-time syncing with{" "}
                <a
                  href=""
                  target="_blank"
                  className="font-bold rainbow_text_hover"
                >
                  ProductHunt API
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="pt-2 space-y-2 overflow-x-scroll w-full scrollbar-hide">
          <div className="grid grid-cols-2 w-[600px] md:w-auto gap-2 md:grid-cols-2 md:gap-4">
            {data.map((element, index) => (
              <div
                key={index}
                className="p-2 border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white rounded-xl flex space-x-2 items-center"
              >
                <div>
                  <a
                    href={`https://producthunt.com/posts/${element.node.slug}`}
                    target="_blank"
                  >
                    <div className="w-16 h-16">
                      <img
                        src={element.node.thumbnail.url}
                        className="object-cover rounded-md"
                      />
                    </div>
                  </a>
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <div>
                        <IconArrowUpCircle
                          size={22}
                          stroke={2}
                          className="text-[#f55932]"
                        />
                      </div>
                      <p className="text-xs font-bold text-[#f55932]">
                        {element.node.votesCount} upvotes
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div>
                        <IconMessage
                          size={22}
                          stroke={2}
                          className="text-purple-500"
                        />
                      </div>
                      <p className="text-xs font-bold text-purple-500">
                        {element.node.commentsCount} comments
                      </p>
                    </div>
                  </div>
                  <div>
                    <a
                      href={`https://producthunt.com/posts/${element.node.slug}`}
                      target="_blank"
                      className="text-black dark:text-white font-bold line-clamp-1"
                    >
                      {element.node.name}
                    </a>

                    <p className="text-black dark:text-white text-sm line-clamp-2">
                      {element.node.tagline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
