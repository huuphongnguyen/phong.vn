import Container from "../components/Container";
import { useState } from "react";
import {
  IconArrowUpCircle,
  IconAtom2,
  IconBrush,
  IconCloudDownload,
} from "@tabler/icons";
import NextLink from "next/link";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import {
  AccessoriesList,
  BackgroundList,
  EyesList,
  EyewearList,
  FaceList,
  HairstyleList,
  HeadwearList,
  MouthList,
  TopList,
} from "../data/avatarData";

export default function Avatar() {
  const [itemBackground, setItemBackground] = useState("10.svg");
  const [itemTop, setItemTop] = useState("1.svg");
  const [itemFace, setItemFace] = useState("7.svg");
  const [itemHairstyle, setItemHairstyle] = useState("1.svg");
  const [itemEyes, setItemEyes] = useState("1.svg");
  const [itemMouth, setItemMouth] = useState("3.svg");
  const [itemHeadwear, setItemHeadwear] = useState("3.svg");
  const [itemAccessories, setItemAccessories] = useState("3.svg");
  const [itemEyewear, setItemEyewear] = useState("3.svg");

  function handleRandomButton() {
    setItemBackground(
      BackgroundList[Math.floor(Math.random() * BackgroundList.length)]
    );
    setItemTop(TopList[Math.floor(Math.random() * TopList.length)]);
    setItemFace(FaceList[Math.floor(Math.random() * FaceList.length)]);
    setItemHairstyle(
      HairstyleList[Math.floor(Math.random() * HairstyleList.length)]
    );
    setItemEyes(EyesList[Math.floor(Math.random() * EyesList.length)]);
    setItemEyewear(EyewearList[Math.floor(Math.random() * EyewearList.length)]);
    setItemMouth(MouthList[Math.floor(Math.random() * MouthList.length)]);
    setItemHeadwear(
      HeadwearList[Math.floor(Math.random() * HeadwearList.length)]
    );
    setItemAccessories(
      AccessoriesList[Math.floor(Math.random() * AccessoriesList.length)]
    );
  }

  function handleDownloadButton() {
    htmlToImage
      .toPng(document.getElementById("master-avatar"))
      .then(function (dataUrl) {
        download(dataUrl, "master-avatar.png");
      });
  }

  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-base uppercase font-sourcecodepro mt-5">
          <NextLink href="/">
            <a>
              <p className="text-gray-300 dark:text-gray-600 hover:text-black dark:hover:text-white">
                FRONT-PAGE
              </p>
            </a>
          </NextLink>
          <p>/</p>
          <h1>Avatar</h1>
        </div>
        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-xl space-y-1">
          <div className="flex items-center space-x-1">
            <div>
              <IconBrush
                size={22}
                stroke={2.2}
                className="text-black dark:text-white"
              />
            </div>
            <p className="text-black dark:text-white text-sm">
              Designed by{" "}
              <a
                href="https://twitter.com/felix12777"
                target="_blank"
                className="font-bold"
              >
                Felix Wong
              </a>
              .
            </p>
          </div>
          <div className="flex items-center space-x-1">
            <div>
              <IconArrowUpCircle
                size={22}
                stroke={2.2}
                className="text-black dark:text-white"
              />
            </div>
            <p className="text-black dark:text-white text-sm">
              Upvote his great product on{" "}
              <a
                href="https://www.producthunt.com/posts/dollo"
                target="_blank"
                className="font-bold"
              >
                Product Hunt
              </a>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div
              id="master-avatar"
              className="w-full aspect-w-1 aspect-h-1 bg-purple-100 relative"
            >
              <div>
                <img
                  src={`/avatar/background/${itemBackground}`}
                  className="z-[0] w-full h-auto absolute bottom-0"
                />
              </div>
              <div>
                <img
                  src={`/avatar/top/${itemTop}`}
                  className="z-[10] w-full h-auto absolute bottom-0"
                />
              </div>
              <div>
                <img
                  src={`/avatar/hairstyle/${itemHairstyle}`}
                  className="z-[1] w-full h-auto origin-top-left absolute top-0"
                />
              </div>
              <div>
                <img
                  src={`/avatar/face/${itemFace}`}
                  className="z-[1] w-[calc((440/1080)*100%)] h-auto origin-top-left absolute top-[calc((340/1080)*100%)] left-[calc((300/1080)*100%)]"
                />
              </div>
              <div>
                <img
                  src={`/avatar/eyes/${itemEyes}`}
                  className="z-[2] w-[calc((200/1080)*100%)] h-auto origin-top-left absolute top-[calc((460/1080)*100%)] left-[calc((300/1080)*100%)]"
                />
              </div>
              <div>
                <img
                  src={`/avatar/eyewear/${itemEyewear}`}
                  className="z-[3] w-[calc((428/1080)*100%)] h-auto origin-top-left absolute top-[calc((454/1080)*100%)] left-[calc((231/1080)*100%)]"
                />
              </div>
              <div>
                <img
                  src={`/avatar/mouth/${itemMouth}`}
                  className="z-[2] w-[calc((240/1080)*100%)] h-auto origin-top-left absolute top-[calc((530/1080)*100%)] left-[calc((380/1080)*100%)]"
                />
              </div>
              <div>
                <img
                  src={`/avatar/headwear/${itemHeadwear}`}
                  className="z-[2] w-[calc((860/1080)*100%)] h-auto origin-top-left absolute top-0 left-[calc((110/1080)*100%)]"
                />
              </div>
              <div>
                <img
                  src={`/avatar/accessories/${itemAccessories}`}
                  className="z-[12] w-full h-auto origin-top-left absolute top-[calc((240/1080)*100%)]"
                />
              </div>
            </div>
            <div className="my-4 flex items-center space-x-2">
              <div
                className="inline-flex items-center space-x-1 bg-black dark:bg-white px-2 py-1 cursor-pointer transition-all origin-center active:scale-[0.9]"
                onClick={handleRandomButton}
              >
                <div>
                  <IconAtom2
                    size={22}
                    stroke={1.7}
                    className="text-white dark:text-black"
                  />
                </div>
                <p className="text-white dark:text-black font-bold uppercase text-sm">
                  Random
                </p>
              </div>
              <div
                className="inline-flex items-center space-x-1 bg-black dark:bg-white px-2 py-1 cursor-pointer transition-all origin-center active:scale-[0.9]"
                onClick={handleDownloadButton}
              >
                <IconCloudDownload
                  size={22}
                  stroke={1.7}
                  className="text-white dark:text-black"
                />
                <p className="text-white dark:text-black font-bold uppercase text-sm">
                  Download
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-2 h-[300px] md:h-[600px] border-2 border-gray-400 dark:border-gray-500 border-dashed overflow-y-scroll p-4 dark:bg-gray-800">
            <div className="space-y-2">
              <h2 className="font-bold text-black dark:text-white text-xl">
                Top
              </h2>
              <div className="grid grid-cols-5 gap-2">
                {TopList.map((top) => (
                  <div
                    key={top}
                    className={` p-2 cursor-pointer border-2 border-dashed ${
                      itemTop === top
                        ? "border-black dark:border-white"
                        : "border-white dark:border-gray-800"
                    }`}
                    onClick={() => setItemTop(top)}
                  >
                    <img
                      src={`/avatar/top/${top}`}
                      className="w-full h-auto transition-all hover:scale-[1.1]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-black dark:text-white text-xl">
                Hair style
              </h2>
              <div className="grid grid-cols-5 gap-2">
                {HairstyleList.map((hairstyle) => (
                  <div
                    key={hairstyle}
                    className={` p-2 cursor-pointer border-2 border-dashed ${
                      itemHairstyle === hairstyle
                        ? "border-black dark:border-white"
                        : "border-white dark:border-gray-800"
                    }`}
                    onClick={() => setItemHairstyle(hairstyle)}
                  >
                    <img
                      src={`/avatar/hairstyle/${hairstyle}`}
                      className="w-full h-auto transition-all hover:scale-[1.1]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-black dark:text-white text-xl">
                Face
              </h2>
              <div className="grid grid-cols-7 gap-2">
                {FaceList.map((face) => (
                  <div
                    key={face}
                    className={` p-2 cursor-pointer border-2 border-dashed ${
                      itemFace === face
                        ? "border-black dark:border-white"
                        : "border-white dark:border-gray-800"
                    }`}
                    onClick={() => setItemFace(face)}
                  >
                    <img
                      src={`/avatar/face/${face}`}
                      className="w-full h-auto transition-all hover:scale-[1.1]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-black dark:text-white text-xl">
                Eyes
              </h2>
              <div className="grid grid-cols-6 gap-2">
                {EyesList.map((eyes) => (
                  <div
                    key={eyes}
                    className={` p-2 cursor-pointer border-2 border-dashed ${
                      itemEyes === eyes
                        ? "border-black dark:border-white"
                        : "border-white dark:border-gray-800"
                    }`}
                    onClick={() => setItemEyes(eyes)}
                  >
                    <img
                      src={`/avatar/eyes/${eyes}`}
                      className="w-full h-auto transition-all hover:scale-[1.1]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-black dark:text-white text-xl">
                Eyewear
              </h2>
              <div className="grid grid-cols-6 gap-2">
                {EyewearList.map((eyewear) => (
                  <div
                    key={eyewear}
                    className={` p-2 cursor-pointer border-2 border-dashed ${
                      itemEyewear === eyewear
                        ? "border-black dark:border-white"
                        : "border-white dark:border-gray-800"
                    }`}
                    onClick={() => setItemEyewear(eyewear)}
                  >
                    <img
                      src={`/avatar/eyewear/${eyewear}`}
                      className="w-full h-auto transition-all hover:scale-[1.1]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-black dark:text-white text-xl">
                Mouth
              </h2>
              <div className="grid grid-cols-6 gap-2">
                {MouthList.map((mouth) => (
                  <div
                    key={mouth}
                    className={` p-2 cursor-pointer border-2 border-dashed ${
                      itemMouth === mouth
                        ? "border-black dark:border-white"
                        : "border-white dark:border-gray-800"
                    }`}
                    onClick={() => setItemMouth(mouth)}
                  >
                    <img
                      src={`/avatar/mouth/${mouth}`}
                      className="w-full h-auto transition-all hover:scale-[1.1]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-black dark:text-white text-xl">
                Headwear
              </h2>
              <div className="grid grid-cols-5 gap-2">
                {HeadwearList.map((headwear) => (
                  <div
                    key={headwear}
                    className={` p-2 cursor-pointer border-2 border-dashed ${
                      itemHeadwear === headwear
                        ? "border-black dark:border-white"
                        : "border-white dark:border-gray-800"
                    }`}
                    onClick={() => setItemHeadwear(headwear)}
                  >
                    <img
                      src={`/avatar/headwear/${headwear}`}
                      className="w-full h-auto transition-all hover:scale-[1.1]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-black dark:text-white text-xl">
                Accessories
              </h2>
              <div className="grid grid-cols-5 gap-2">
                {AccessoriesList.map((accessories) => (
                  <div
                    key={accessories}
                    className={` p-2 cursor-pointer border-2 border-dashed ${
                      itemAccessories === accessories
                        ? "border-black dark:border-white"
                        : "border-white dark:border-gray-800"
                    }`}
                    onClick={() => setItemAccessories(accessories)}
                  >
                    <img
                      src={`/avatar/accessories/${accessories}`}
                      className="w-full h-auto transition-all hover:scale-[1.1]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="font-bold text-black dark:text-white text-xl">
                Background
              </h2>
              <div className="grid grid-cols-5 gap-2">
                {BackgroundList.map((background) => (
                  <div
                    key={background}
                    className={` p-2 cursor-pointer border-2 border-dashed ${
                      itemBackground === background
                        ? "border-black dark:border-white"
                        : "border-white dark:border-gray-800"
                    }`}
                    onClick={() => setItemBackground(background)}
                  >
                    <img
                      src={`/avatar/background/${background}`}
                      className="w-full h-auto transition-all hover:scale-[1.1]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
