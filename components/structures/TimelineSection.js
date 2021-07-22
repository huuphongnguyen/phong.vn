import { IconCircleCheck, IconInfinity } from "@tabler/icons";
import { useState } from "react";

export default function TimelineSection() {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          /
        </p>
        <h1 className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          Timeline
        </h1>
      </div>
      <div className="px-4 pt-2 space-y-2">
        <div className="w-full">
          <div className="inline-flex items-center space-x-2">
            <div className="-ml-0 md:-ml-1 mr-0 md:mr-2">
              <IconInfinity
                size={30}
                stroke={1.7}
                className="text-black dark:text-white"
              />
            </div>
            <div className="cursor-pointer">
              <p
                className={`${
                  showTimeline ? "rainbow_text" : ""
                } text-black dark:text-white font-bold text-base rainbow_text_hover transition-all active:scale-[0.9]`}
                onClick={() => setShowTimeline(!showTimeline)}
              >
                My timeline
              </p>
            </div>
          </div>
        </div>
        <div className={`${showTimeline ? "" : "hidden"}`}>
          <div className="p-2 border_dash_animated dark:border_dash_animated_dark">
            <h2 className="text-black dark:text-white font-bold text-xl">
              2021
            </h2>
            <div className="flex items-start py-2 space-x-2">
              <div className="w-7 h-7 flex items-start justify-center mt-[2px]">
                <IconCircleCheck className="text-green-500" />
              </div>
              <div className="">
                <h3 className="font-bold text-black dark:text-white">
                  Bắt đầu Timeline
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Xây dựng timeline, liệt kê ra những cột mốc quan trọng
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
