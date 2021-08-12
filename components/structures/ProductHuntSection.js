import { IconArrowUpCircle } from "@tabler/icons";

export default function ProductHuntSection({ data }) {
  console.log("DATAS", data);

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
      <div className="px-4 pt-2 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          {data.map((element, index) => (
            <div
              key={index}
              className="p-2 border-2 border-dashed border-black dark:border-white rounded-xl flex space-x-2 items-center"
            >
              <div>
                <div className="w-16 h-16">
                  <img
                    src={element.node.thumbnail.url}
                    className="object-cover rounded-md"
                  />
                </div>
              </div>
              <div>
                <div>
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
                </div>
                <div>
                  <p className="text-black dark:text-white font-bold line-clamp-1">
                    {element.node.name}
                  </p>
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
  );
}
