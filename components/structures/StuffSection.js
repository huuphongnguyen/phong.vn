import { IconAlien, IconChevronsRight, IconCrown } from "@tabler/icons";
import {
  ArrowUpRight,
  Camera,
  Chess,
  KeyCap,
  Radish,
  VictoryHand,
} from "akar-icons";
import useTranslation from "next-translate/useTranslation";
import NextLink from "next/link";
import QuotesView from "../elements/QuotesView";
import RandomAvatarGrid from "../elements/RandomAvatarGrid";
import SpotifyNowPlaying from "../elements/SpotifyNowPlaying";
import SpotifyTopTracks from "../elements/SpotifyTopTracks";
import { useState } from "react";

export default function StuffSection({ resultssync }) {
  const { t } = useTranslation("common");

  const [showTopTracks, setShowTopTracks] = useState(false);

  return (
    <div>
      <div className="inline-flex items-center space-x-1">
        <p className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          /
        </p>
        <h1 className="text-black dark:text-white text-base uppercase font-sourcecodepro">
          Stuff
        </h1>
      </div>
      <div className="px-4 py-2 space-y-4">
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <div className="flex items-center space-x-2">
              <IconAlien
                size={27}
                stroke={2}
                className="text-black dark:text-white"
              />
              <h2 className="text-sm font-bold text-black dark:text-white font-sourcecodepro uppercase">
                Create your own avatar
              </h2>
            </div>
            <div className="flex items-center justify-center">
              <NextLink href="/avatar">
                <a>
                  <div className="px-2 border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white inline-flex items-center justify-between group">
                    <p className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black text-sm font-bold inline-flex">
                      Make it
                    </p>
                    <IconChevronsRight
                      size={22}
                      stroke={2}
                      className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                    />
                  </div>
                </a>
              </NextLink>
            </div>
          </div>
          <div className="mb-4 space-y-2">
            <RandomAvatarGrid />
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <VictoryHand className="text-black dark:text-white" />
            <h2 className="text-sm font-bold text-black dark:text-white font-sourcecodepro">
              My playlists
            </h2>
          </div>
          <div className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="col-span-2 space-y-2">
                <SpotifyNowPlaying />
              </div>
              <div>
                <div className="space-y-1">
                  <p className="text-black dark:text-white font-bold text-sm pl-2">
                    {t("stuff-spotify-ask")}
                  </p>
                  <div className="flex items-center space-x-2">
                    <a
                      href="https://open.spotify.com/user/bwunro2q3l6dcfnvz6vb07g89?si=bL3D9kWXTF6sUrrJLotJLA"
                      target="_blank"
                    >
                      <div className="text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black px-2 py-0 inline-flex font-sourcecodepro text-sm uppercase items-center space-x-2 group">
                        Spotify
                        <ArrowUpRight
                          className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                          size={18}
                        />
                      </div>
                    </a>
                    <a href="https://soundcloud.com/donuf" target="_blank">
                      <div className="text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black px-2 py-0 inline-flex font-sourcecodepro text-sm uppercase items-center space-x-2 group">
                        Soundcloud
                        <ArrowUpRight
                          className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                          size={18}
                        />
                      </div>
                    </a>
                  </div>
                </div>
                <div className="mt-2 mx-2 w-full flex items-center justify-center md:justify-start">
                  <div
                    className={`inline-flex items-center space-x-1 px-2 py-1 cursor-pointer group border-2  rounded-xl transition-all active:scale-[0.9] ${
                      showTopTracks
                        ? "border-yellow-400 dark:border-gray-500"
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                    onClick={() => setShowTopTracks(!showTopTracks)}
                  >
                    <div>
                      <IconCrown
                        size={27}
                        stroke={2}
                        className="text-yellow-400"
                      />
                    </div>
                    <p className="text-black dark:text-white text-sm font-bold">
                      My Top Tracks
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`${
                showTopTracks ? "flex" : "hidden"
              } md:col-span-3 py-6 items-center justify-center`}
            >
              <div className="border-2 border-dashed border-green-500 p-4 rounded-2xl w-full md:w-[80%]">
                <SpotifyTopTracks />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 gap-4 pt-2">
          <div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Chess className="text-black dark:text-white" />
                <h2 className="text-black dark:text-white font-sourcecodepro text-sm font-bold">
                  My domains I am chilling with
                </h2>
              </div>
              <div>
                <NextLink href="/domains">
                  <a>
                    <div className="inline-flex items-center space-x-1 bg-white dark:bg-black hover:bg-black dark:hover:bg-white group px-2 py-1">
                      <p className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black uppercase font-bold text-xs">
                        see more
                      </p>
                      <ArrowUpRight
                        className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                        size={18}
                      />
                    </div>
                  </a>
                </NextLink>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <KeyCap className="text-black dark:text-white" />
                <h2 className="text-black dark:text-white font-sourcecodepro text-sm font-bold">
                  My tools I am using it to create
                </h2>
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  <a href="/tools">
                    <div className="inline-flex items-center space-x-1 bg-white dark:bg-black hover:bg-black dark:hover:bg-white group px-2 py-1">
                      <p className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black uppercase font-bold text-xs">
                        explore
                      </p>
                      <ArrowUpRight
                        className="text-black dark:text-white group-hover:text-white dark:group-hover:text-black"
                        size={18}
                      />
                    </div>
                  </a>

                  <div className="inline-flex">
                    <p className="text-black dark:text-white px-2 text-xs uppercase font-bold border-2 border-black">
                      Syncing with Notion API
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="text-black dark:text-white" />
                <h2 className="text-black dark:text-white font-sourcecodepro text-sm font-bold">
                  Others & my public moments
                </h2>
              </div>
              <p className="text-black dark:text-white font-bold text-sm">
                {t("stuff-moments-together")}
              </p>
              <a href="https://futureme.org" target="_blank">
                <div className="items-center space-x-2 mt-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 inline-flex">
                  <div className="w-[124px] h-[22px] flex relative">
                    <img src="/icons/futureme.svg" className="object-cover" />
                  </div>
                  <p className="text-black dark:text-white dark:hover:text-white font-sourcecodepro uppercase text-sm px-2 pt-1">
                    Write a letter
                  </p>
                </div>
              </a>
              <a href="https://dispo.fun/@shop" target="_blank">
                <div className="inline-flex items-center space-x-1 hover:bg-gray-100 dark:hover:bg-gray-800 px-0 md:px-4 py-2 rounded-lg group">
                  <div className="w-12 h-12 relative transform transition-all group-hover:rotate-[70deg]">
                    <img
                      src="/static/dispo-roll-green.gif"
                      className="object-cover absolute"
                    />
                  </div>
                  <div className="w-12 h-12 relative transform transition-all delay-100 group-hover:rotate-[70deg]">
                    <img
                      src="/static/dispo-roll-blue.gif"
                      className="object-cover absolute"
                    />
                  </div>
                  <div className="w-12 h-12 relative transform transition-all delay-200 group-hover:rotate-[70deg]">
                    <img
                      src="/static/dispo-roll-red.gif"
                      className="object-cover absolute"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 relative">
                      <img
                        src="/static/dispo-logo.svg"
                        className="object-cover absolute dark:bg-white"
                      />
                    </div>
                    <p className="text-black dark:text-white font-sourcecodepro text-sm uppercase">
                      Dispo.fun/@shop
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 mb-4">
                <Radish className="text-black dark:text-white" />
                <h2 className="text-black dark:text-white font-sourcecodepro text-sm font-bold">
                  Need some quotes?
                </h2>
              </div>
              <div>
                <QuotesView resultssync={resultssync} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
