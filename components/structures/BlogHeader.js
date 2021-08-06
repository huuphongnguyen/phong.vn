import ViewCounter from "../../components/elements/ViewCounter";
import {
  IconAd2,
  IconClock,
  IconComet,
  IconCopyright,
  IconFeather,
} from "@tabler/icons";
import NextLink from "next/link";

export default function BlogHeader({
  title,
  publishedat,
  readingtime,
  viewcounterslug,
  description,
  featureimggif,
  authors,
}) {
  return (
    <div className="space-y-3 border_dash_animated dark:border_dash_animated_dark">
      <h1 className="text-2xl font-bold text-black dark:text-white">{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="w-full aspect-h-1 aspect-w-1 object-cover relative  md:col-span-1">
          <img src={featureimggif} className="absolute object-cover" />
        </div>
        <div className=" md:col-span-4">
          <p className="text-black dark:text-white text-sm md:text-base">
            {description}
          </p>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="space-y-1">
            <div className="flex items-center space-x-1">
              <div>
                <IconFeather
                  size={25}
                  stroke={2}
                  className="text-black dark:text-white"
                />
              </div>
              <p className="text-black dark:text-white text-sm">
                <strong>Viết bởi:</strong> {authors}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <div>
                <IconAd2
                  size={25}
                  stroke={2}
                  className="text-black dark:text-white"
                />
              </div>
              <p className="text-black dark:text-white text-sm">
                <strong>Đăng tải:</strong> {publishedat}
              </p>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-1">
              <div>
                <IconClock
                  size={25}
                  stroke={2}
                  className="text-black dark:text-white"
                />
              </div>
              <p className="text-black dark:text-white text-sm">
                <strong>Thời gian đọc:</strong> {readingtime} phút
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <div>
                <IconComet
                  size={25}
                  stroke={2}
                  className="text-black dark:text-white"
                />
              </div>
              <ViewCounter slug={viewcounterslug} />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex items-center space-x-1">
              <div>
                <IconCopyright
                  size={25}
                  stroke={2}
                  className="text-black dark:text-white"
                />
              </div>
              <p className="text-black dark:text-white text-sm">
                <strong>Licenses: </strong>
                <NextLink href="/license">
                  <a className="hover:text-purple-500">P License 21</a>
                </NextLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
