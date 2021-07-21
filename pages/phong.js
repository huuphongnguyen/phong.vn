import { Envelope, MoreHorizontal, Send } from "akar-icons";
import { NextSeo, SocialProfileJsonLd } from "next-seo";
import NextLink from "next/link";

export default function Phong() {
  const seotitle = `Nguyễn Hữu Phong - Phong.vn`;
  const seodescrip = `Trang cá nhân của Phong trên website của Phong (cười lớn). Trang này chủ yếu được tạo để tổng hợp thông tin của mình mà thôi, ngoài ra nó còn dùng để kiểm tra SEO`;
  const seourl = `https://phong.vn/phong`;
  const seopreviewimg = "/static/phong-vn-feature-img.png";

  return (
    <div className="dark:bg-black bg-blawhiteck">
      <main className="flex flex-col justify-center space-y-4 py-7 px-4 bg-purple-100 m-4">
        <NextSeo
          title={seotitle}
          description={seodescrip}
          canonical={seourl}
          openGraph={{
            seotitle,
            seodescrip,
            seourl,
            images: [
              {
                url: seopreviewimg,
                alt: seotitle,
                width: 1200,
                height: 628,
              },
            ],
          }}
        />
        <SocialProfileJsonLd
          type="Person"
          name="Nguyễn Hữu Phong"
          url="https://phong.vn"
          sameAs={[
            "https://facebook.com/thereisadonutonthetable/",
            "https://instagram.com/isnhp/",
            "https://linkedin.com/in/isnhp",
            "https://twitter.com/isnhp",
          ]}
        />
        <div className="items-start mx-auto w-full max-w-xl space-y-4">
          <div className="relative w-24 h-24 mx-auto rounded-full">
            <img
              className="object-cover absolute rounded-full transform origin-center scale-150"
              src="/phong-memoji-nonbg.png"
            />
          </div>
          <div className="space-y-1">
            <div className="flex justify-center items-center">
              <h1 className="text-black font-bold text-xl inline-flex">
                Nguyễn Hữu Phong
              </h1>
            </div>
            <p className="text-black text-center text-base uppercase font-sourcecodepro">
              @phong
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <a
              href="mailto:hello@phong.vn?subject=An%20email%20from%20PHONG.VN&body=Hello%20Phong%2C%0D%0A%0D%0AMy%20name%20is%20_________%0D%0A%0D%0AI%20got%20a%20something%20to%20tell%20you%3A"
              target="_blank"
            >
              <div className="border-2 border-[#7C56FB] text-[#7C56FB] p-3 flex items-center space-x-2 hover:bg-purple-200">
                <Envelope className="text-[#7C56FB]" />
                <h3 className="font-sourcecodepro text-sm uppercase">
                  Email: hello@phong.vn
                </h3>
              </div>
            </a>
            <a href="https://t.me/isnhp" target="_blank">
              <div className="border-2 border-[#7C56FB] text-[#7C56FB] p-3 flex items-center space-x-2 hover:bg-purple-200">
                <Send className="text-[#7C56FB]" />
                <h3 className="font-sourcecodepro text-sm uppercase">
                  Telegram: @isnhp
                </h3>
              </div>
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-7 h-7 relative">
              <img
                className="object-cover absolute"
                src="/emoji/emoji-look.png"
              />
            </div>
            <h2 className="text-black font-sourcecodepro uppercase text-base">
              My networks
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a href="https://www.twitter.com/isnhp/" target="_blank">
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3 hover:bg-purple-200 group">
                <h3 className="font-sourcecodepro text-sm uppercase transform transition-all group-hover:scale-110 group-hover:-rotate-12 origin-center inline-flex">
                  Twitter
                </h3>
              </div>
            </a>
            <a
              href="https://www.facebook.com/thereisadonutonthetable/"
              target="_blank"
            >
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3 hover:bg-purple-200 group">
                <h3 className="font-sourcecodepro text-sm uppercase transform transition-all group-hover:scale-110 group-hover:-rotate-12 origin-center inline-flex">
                  Facebook
                </h3>
              </div>
            </a>
            <a href="https://www.instagram.com/isnhp" target="_blank">
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3 hover:bg-purple-200 group">
                <h3 className="font-sourcecodepro text-sm uppercase transform transition-all group-hover:scale-110 group-hover:-rotate-12 origin-center inline-flex">
                  Instagram
                </h3>
              </div>
            </a>
            <a href="https://www.github.com/huuphongnguyen" target="_blank">
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3 hover:bg-purple-200 group">
                <h3 className="font-sourcecodepro text-sm uppercase transform transition-all group-hover:scale-110 group-hover:-rotate-12 origin-center inline-flex">
                  Github
                </h3>
              </div>
            </a>
            <a href="https://zalo.me/dropship" target="_blank">
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3 hover:bg-purple-200 group">
                <h3 className="font-sourcecodepro text-sm uppercase transform transition-all group-hover:scale-110 group-hover:-rotate-12 origin-center inline-flex">
                  Zalo
                </h3>
              </div>
            </a>
            <a href="https://www.pinterest.com/isnhp" target="_blank">
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3 hover:bg-purple-200 group">
                <h3 className="font-sourcecodepro text-sm uppercase transform transition-all group-hover:scale-110 group-hover:-rotate-12 origin-center inline-flex">
                  Pinterest
                </h3>
              </div>
            </a>
            <a href="https://www.producthunt.com/@isnhp" target="_blank">
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3 hover:bg-purple-200 group">
                <h3 className="font-sourcecodepro text-sm uppercase transform transition-all group-hover:scale-110 group-hover:-rotate-12 origin-center inline-flex">
                  ProductHunt
                </h3>
              </div>
            </a>
            <a
              href="https://stackoverflow.com/users/6277201/huu-phong-nguyen"
              target="_blank"
            >
              <div className=" border-2 border-[#7C56FB] text-[#7C56FB] p-3 hover:bg-purple-200 group">
                <h3 className="font-sourcecodepro text-sm uppercase transform transition-all group-hover:scale-110 group-hover:-rotate-12 origin-center inline-flex">
                  Stackoverflow
                </h3>
              </div>
            </a>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-7 h-7 relative">
              <img
                className="object-cover absolute"
                src="/emoji/emoji-diamond.png"
              />
            </div>
            <h2 className="text-black font-sourcecodepro uppercase text-base">
              My personal sites
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <NextLink href="/">
              <a>
                <div className="border-2 border-[#7C56FB] text-[#7C56FB] p-3 flex items-center space-x-2 hover:bg-purple-200 group">
                  <h3 className="font-sourcecodepro text-sm uppercase transform transition-all group-hover:scale-110 group-hover:-rotate-12">
                    PHONG.VN
                  </h3>
                </div>
              </a>
            </NextLink>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-7 h-7 relative">
              <img
                className="object-cover absolute"
                src="/emoji/emoji-brain.png"
              />
            </div>
            <h2 className="text-black font-sourcecodepro uppercase text-base">
              My project sites
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <a href="https://change.vn" target="_blank">
              <div className="border-2 border-[#7C56FB] text-[#7C56FB] p-3 flex items-center space-x-2 hover:bg-purple-200">
                <h3 className="font-sourcecodepro text-sm uppercase">
                  Change.vn
                </h3>
              </div>
            </a>
            <a href="https://theuvitinhanhxuyen.com" target="_blank">
              <div className="border-2 border-[#7C56FB] text-[#7C56FB] p-3 flex items-center space-x-2 hover:bg-purple-200">
                <h3 className="font-sourcecodepro text-sm uppercase">
                  TheuViTinhAnhXuyen.com
                </h3>
              </div>
            </a>
            <a href="https://emb.vn" target="_blank">
              <div className="border-2 border-[#7C56FB] text-[#7C56FB] p-3 flex items-center space-x-2 hover:bg-purple-200">
                <h3 className="font-sourcecodepro text-sm uppercase">EMB.VN</h3>
              </div>
            </a>
            <a href="http://xn--7biy658mpea72f.y.at/" target="_blank">
              <div className="border-2 border-[#7C56FB] text-[#7C56FB] p-3 flex items-center space-x-2 hover:bg-purple-200 group">
                <div className="flex items-center">
                  <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-75">
                    <img
                      className="object-cover absolute"
                      src="/emoji/emoji-hello.png"
                    />
                  </div>
                  <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-100">
                    <img
                      className="object-cover absolute"
                      src="/emoji/emoji-aliens.png"
                    />
                  </div>
                  <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-150">
                    <img
                      className="object-cover absolute"
                      src="/emoji/emoji-touch.png"
                    />
                  </div>
                  <div className="w-7 h-7 relative transform transition-all group-hover:scale-150 group-hover:-rotate-12 group-hover:delay-200">
                    <img
                      className="object-cover absolute"
                      src="/emoji/emoji-rocket.png"
                    />
                  </div>
                </div>
                <h3 className="font-sourcecodepro text-sm uppercase">
                  Y.AT | Human are Aliens
                </h3>
              </div>
            </a>
          </div>
          <div className="items-start mx-auto w-full max-w-3xl space-y-1 flex justify-center">
            <MoreHorizontal className="text-black" />
          </div>
          <div className="flex justify-between">
            <p className="text-black font-sourcecodepro uppercase text-base text-center">
              Love{" "}
              <a
                className="text-[#7C56FB]"
                href="https://www.google.com/search?q=purple&oq=purple&aqs=chrome..69i57j46i433j0l7j46.790j1j4&sourceid=chrome&ie=UTF-8"
                target="_blank"
              >
                purple
              </a>{" "}
              and crush on{" "}
              <a
                className="text-[#7C56FB]"
                href="https://www.instagram.com/dlwlrma"
                target="_blank"
              >
                IU
              </a>
            </p>
            <p className="text-black font-sourcecodepro uppercase text-base text-center">
              22+1
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
