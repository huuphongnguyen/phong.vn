import ReactPlayer from "react-player";
import { useState } from "react";
import { ArrowClockwise, RockOn } from "akar-icons";

export default function MEMESoundGrid({ sync }) {
  const [isplaying, playing] = useState(false);
  const [ismemeadded, memeadded] = useState("");
  const [ismuted, muted] = useState(false);
  const [isloading, loading] = useState(false);

  function handleEND() {
    playing(false);
    memeadded("");
  }

  function handlePLAY(sound) {
    memeadded(sound);
    playing(true);
    loading(true);
    muted(true);
    muted(false);
  }

  function handleREADY() {
    loading(false);
  }

  return (
    <div>
      <div className="text-black dark:text-white font-sourcecodepro text-base mb-3 flex items-center justify-between">
        <div>
          {isloading ? (
            <div className="flex items-center space-x-1">
              <ArrowClockwise size={18} className="animate-spin" />
              <p>Loading...</p>
            </div>
          ) : isplaying ? (
            <div className="flex items-center space-x-1">
              <RockOn size={18} className="animate-bounce" />
              <p>Playing...</p>
            </div>
          ) : (
            <p className="font-bold text-black dark:text-white font-sourcecodepro text-sm uppercase">
              Just pick 1.
            </p>
          )}
        </div>
        <div className="text-black dark:text-white flex items-center space-x-2 font-sourcecodepro text-base">
          <p>Sound</p>
          <div className="flex items-center space-x-2">
            <div
              className={`bg-white dark:bg-black focus:outline-none h-9 w-12 transform transition-all ease-in-out active:scale-75 flex items-center justify-center cursor-pointer ${
                ismuted === false
                  ? "bg-transparent border-2 border-black dark:border-white"
                  : "bg-transparent border-2 border-gray-200 dark:border-gray-600"
              }`}
              onClick={() => muted(false)}
            >
              <p className="text-black dark:text-white font-sourcecodepro text-sm uppercase rainbow_text_hover">
                On
              </p>
            </div>

            <div
              className={`bg-white dark:bg-black focus:outline-none h-9 w-12 transform transition-all ease-in-out active:scale-75 flex items-center justify-center cursor-pointer ${
                ismuted === true
                  ? "bg-transparent border-2 border-black dark:border-white"
                  : "bg-transparent border-2 border-gray-200 dark:border-gray-600"
              }`}
              onClick={() => muted(true)}
            >
              <p className="text-black dark:text-white font-sourcecodepro text-sm uppercase rainbow_text_hover">
                Off
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`space-y-2 p-3 ${
          isloading
            ? "border_dash_animated dark:border_dash_animated_dark"
            : "border-2 border-gray-200 dark:border-gray-700"
        }`}
      >
        {sync.map((element, index) => (
          <button
            key={index}
            className={`text-black px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-100 mr-2 focus:outline-none focus:border-black border-2 border-transparent border-dashed transform transition-all md:hover:scale-105 md:hover:border-black  ${
              isplaying ? "focus:border-black" : "focus:border-transparent"
            }`}
            onClick={(e) =>
              handlePLAY(element.properties.soundmp3.files[0].name)
            }
          >
            <p className="text-black font-sourcecodepro text-base">
              {element.properties.emoji.rich_text[0].plain_text}
            </p>
          </button>
        ))}
        <ReactPlayer
          url={ismemeadded}
          className="bg-red-500 hidden"
          volume={1}
          playsinline={true}
          height={50}
          width={50}
          playing={isplaying ? true : false}
          onEnded={handleEND}
          onReady={handleREADY}
          muted={ismuted}
        />
      </div>
    </div>
  );
}
