import { IconArrowUpCircle, IconSquare, IconSquareCheck } from "@tabler/icons";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RedditWallpaperToast from "./RedditWallpaperToast";
import useTranslation from "next-translate/useTranslation";

export default function RedditWallpaperGrid({ sync }) {
  const [showUps, setShowUps] = useState(false);
  const { t } = useTranslation("redditwallpaper");

  function handleCheckSquare() {
    setShowUps(!showUps);
  }

  return (
    <div className="space-y-2">
      <div
        className="inline-flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-gray-800 p-1 rounded-xl cursor-pointer"
        onClick={handleCheckSquare}
      >
        <div>
          {showUps ? (
            <IconSquareCheck
              size={20}
              stroke={2}
              className="text-black dark:text-white"
            />
          ) : (
            <IconSquare
              size={20}
              stroke={2}
              className="text-black dark:text-white"
            />
          )}
        </div>
        <p className="text-black dark:text-white text-sm pointer-events-none">
          {t("redditwallpaper-showupvotes")}
        </p>
      </div>
      <div className="grid grid-cols-autoscale">
        {sync.map((element) => (
          <div
            key={element.id}
            className="relative group cursor-pointer"
            onClick={() => toast(<RedditWallpaperToast item={element} />)}
          >
            <div className="aspect-w-1 aspect-h-1">
              <img src={element.small_img} className="object-cover" />
            </div>
            <div
              className={`absolute inline-block group-hover:opacity-100 top-0 px-1 py-1 font-sourcecodepro text-white bg-[#fe4500] text-sm ${
                showUps ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="flex items-center space-x-1">
                <div>
                  <IconArrowUpCircle size={18} stroke={2} />
                </div>
                <p>{element.ups}</p>
              </div>
            </div>
          </div>
        ))}
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        />
      </div>
    </div>
  );
}
