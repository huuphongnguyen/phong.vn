import Container from "../../components/Container";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";
import {
  Air,
  ArrowUpRight,
  Clipboard,
  CloudDownload,
  Edit,
  File,
  Inbox,
  Leaf,
  Pin,
  Telescope,
  VictoryHand,
} from "akar-icons";
import ExternalLink from "../../components/elements/ExternalLink";
import CallOut from "../../components/elements/block/CallOut";
import Paragraph from "../../components/elements/block/Paragraph";
import Quote from "../../components/elements/block/Quote";
import Heading2 from "../../components/elements/block/Heading2";
import QuotePeople from "../../components/elements/block/QuotePeople";
import Heading3 from "../../components/elements/block/Heading3";
import BulletList from "../../components/elements/block/BulletList";
import TableOfContents from "../../components/elements/block/TableOfContents";

export default function SoundFromUniverse() {
  const seotitle = `'Sound from Universe'`;
  const seodescrip = `Sound from Universe là một khái niệm trong việc hình thành và xây dựng suy nghĩ của não bộ theo một chiều hướng tích cực hơn. Được xây dựng trên các định luật và quy tắc nổi tiếng về suy nghĩ, và được tinh chỉnh cho phù hợp hơn với Phong`;
  const seourl = `https://phong.vn/concepts/sound-from-universe`;
  const seopreviewimg =
    "/static/images/concepts/concepts-sound-from-universe-feature-img.png";

  const bannerImagesData = [
    "/static/images/sound-from-universe/sound-from-universe-banner-img1.gif",
    "/static/images/sound-from-universe/sound-from-universe-banner-img2.gif",
    "/static/images/sound-from-universe/sound-from-universe-banner-img3.gif",
    "/static/images/sound-from-universe/sound-from-universe-banner-img4.gif",
    "/static/images/sound-from-universe/sound-from-universe-banner-img5.gif",
    "/static/images/sound-from-universe/sound-from-universe-banner-img6.gif",
  ];

  return (
    <Container>
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
      <TwitterSEO
        currentURL={seourl}
        previewImage={`https://phong.vn/${seopreviewimg}`}
        siteName={seotitle}
        pageTitle={seotitle}
        description={seodescrip}
      />
      <div className="items-start mx-auto w-full max-w-3xl space-y-4">
        <div className="space-y-2 border_dash_animated dark:border_dash_animated_dark">
          <div>
            <h1 className="text-xl font-bold uppercase font-sourcecodepro text-black dark:text-white">
              'Sound from Universe'
            </h1>
            <p className="text-sm text-black dark:text-white">
              Một khái niệm trong việc hình thành và xây dựng suy nghĩ của não
              bộ theo một chiều hướng tích cực hơn. Được xây dựng trên các định
              luật và quy tắc về suy nghĩ và nhận thức, được tinh chỉnh cho phù
              hợp hơn với Phong
            </p>
          </div>
          <div>
            <div className="grid grid-cols-6 my-4">
              {bannerImagesData.map((image, index) => (
                <div key={index} className="relative group">
                  <div className="aspect-w-1 aspect-h-1">
                    <img src={image} className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-black dark:text-white grid grid-cols-1 md:grid-cols-2 gap-1">
            <div className="">
              <a href="#" target="_blank">
                <div className="flex py-1 items-center text-sm group">
                  <CloudDownload className="mr-1" size={22} />
                  Download PDF (available when done)
                  <ArrowUpRight
                    className="mr-1 opacity-0 group-hover:opacity-100"
                    size={22}
                  />
                </div>
              </a>
              <a
                href="https://www.notion.so/isnhp/Sound-from-Universe-580bc4fad2dd48e882fe3bff6e16f840"
                target="_blank"
              >
                <div className="flex py-1 items-center text-sm group">
                  <Inbox className="mr-1" size={22} />
                  Read on Notion
                  <ArrowUpRight
                    className="mr-1 opacity-0 group-hover:opacity-100"
                    size={22}
                  />
                </div>
              </a>
              <a
                href="https://github.com/huuphongnguyen/phong.vn/blob/main/pages/concepts/sound-from-universe.js"
                target="_blank"
              >
                <div className="flex py-1 items-center text-sm group">
                  <Edit className="mr-1" size={22} />
                  Edit on Github
                  <ArrowUpRight
                    className="mr-1 opacity-0 group-hover:opacity-100"
                    size={22}
                  />
                </div>
              </a>
              <div className="flex py-1 items-center text-sm">
                <Air className="mr-1" size={22} />
                Status: Đang viết
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <Pin className="mr-1" size={22} />
                Published at: 2021-02-15
              </div>
              <div className="flex items-center text-sm">
                <File className="mr-1" size={22} />
                Written by: Nguyễn Hữu Phong
              </div>
              <div className="flex items-center text-sm">
                <Telescope className="mr-1" size={22} />
                Experiment by: Nguyễn Hữu Phong
              </div>
              <div className="flex items-center text-sm">
                <Clipboard className="mr-1" size={22} />
                Review by: Nguyễn Hữu Phong
              </div>
            </div>
          </div>
        </div>

        <TableOfContents>
          <li>
            <a href="#gioi-thieu" className="hover:underline">
              Giới thiệu
            </a>
          </li>
          <li>
            <a href="#anchor1" className="hover:underline">
              1. Những quy tắc cơ bản của 'Sound from Universe'
            </a>
          </li>
          <li className="pl-2">
            <ul>
              <li>
                <a href="#anchor11" className="hover:underline">
                  1.1. Ngủ thật sớm và cố gắng thức dậy trong khoảng thời gian 3
                  giờ sáng đến 5 giờ sáng
                </a>
              </li>
              <li>
                <a href="#anchor12" className="hover:underline">
                  1.2. Loại bỏ phần lớn Wishful Thinking
                </a>
              </li>
              <li>
                <a href="#anchor13" className="hover:underline">
                  1.3. Luyện tập kiên trì từ những điều nhỏ nhất cho đến khi nó
                  trở thành bình thường
                </a>
              </li>
              <li>
                <a href="#anchor14" className="hover:underline">
                  1.4. Hạn chế - cố gắng loại bỏ việc trì hoãn
                </a>
              </li>
              <li>
                <a href="#anchor15" className="hover:underline">
                  1.5. Thử những điều mới dù là nhỏ nhất, và làm điều đó một
                  mình
                </a>
              </li>
              <li>
                <a href="#anchor16" className="hover:underline">
                  1.6. Hãy đưa bản thân vào trạng thái bình tĩnh trước mình sự
                  việc đang diễn ra
                </a>
              </li>
              <li>
                <a href="#anchor17" className="hover:underline">
                  1.7. Tìm cho mình một điều gì đó để tin
                </a>
              </li>
              <li>
                <a href="#anchor18" className="hover:underline">
                  1.8. Học cách từ bỏ từ những điều nhỏ nhất
                </a>
              </li>
              <li>
                <a href="#anchor19" className="hover:underline">
                  1.9. Cội nguồn của sự tự tin
                </a>
              </li>
              <li>
                <a href="#anchor110" className="hover:underline">
                  1.10. Định hình cho bản thân những ước mơ
                </a>
              </li>
              <li>
                <a href="#anchor111" className="hover:underline">
                  1.11. Kiềm hãm tối đa và chôn vùi cơn giận dữ của bản thân -
                  triệt tiêu việc bị kích động
                </a>
              </li>
              <li>
                <a href="#anchor112" className="hover:underline">
                  1.12. Đừng hối tiếc những gì đã trải qua, thay vào đó lạc quan
                  và kỹ càng nhìn nhận hơn ở tương lai
                </a>
              </li>
              <li>
                <a href="#anchor113" className="hover:underline">
                  1.13. Nổi sợ và sự ganh ghét chính là động lực lớn nhất giúp
                  não bộ kích hoạt mọi thứ cần thiết để cơ thể tiến lên
                </a>
              </li>
            </ul>
          </li>
        </TableOfContents>

        <div className="text-black dark:text-white">
          <Heading2 id="gioi-thieu">Giới thiệu</Heading2>
          <Paragraph>
            Sound from Universe là một khái niệm Phong muốn phát triển dựa trên
            những khái niệm của Luật Hấp Dẫn (Laws of Attraction - New thought).
            Đây là một bộ quy tắc các nguyên lý giúp sử dụng bộ não một cách
            thuần thục hơn. Sound from Universe được tinh chỉnh và tái khái niệm
            giúp phù hợp hơn với những người bắt đầu hoặc chưa từng tiếp xúc
            loại khái niệm này. Việc viết ra những quy tắc , khái niệm, dự đoán,
            trải nghiệm của Sound from Universe được thực hiện vào cùng một thời
            điểm bởi tác giá.
          </Paragraph>
          <Heading2 id="tom-luoc">Tóm lược</Heading2>
          <Paragraph>
            Từ lâu, bản thân Phong từng có một suy nghĩ về việc não bộ chúng ta
            được kiểm soát hoặc được tiếp nhận thông tin từ một nguồn phát nào
            đó bên ngoài trái đất, hoặc bên trong lòng trái đất. Đó là suy nghĩ
            của Phong, Phong vẫn chưa định hình chính xác được nguồn phát đó đến
            từ đâu, nó đến từ vũ trụ xa xôi bên ngoài kia - nơi mà Phong ngước
            nhìn lên, hay bên dưới lòng đất nơi mà chúng ta nhìn xuống, hay
            nguồn phát nằm trong chính bên trong não bộ của chúng ta. Đến thời
            điểm hiện tại, khi có thời gian tìm hiểu sâu hơn vào từng ngóc
            ngách, cũng như các khái niệm liên quan và nổi bật là{" "}
            <ExternalLink
              href="https://en.wikipedia.org/wiki/Law_of_attraction_(New_Thought)"
              colortexthover="rainbow_text_hover"
            >
              Laws of Attraction
            </ExternalLink>
            , những suy nghĩ mà Phong có nó không phải là đầu tiên, đã có rất
            nhiều người có suy nghĩ này và họ đã phát triển nó lên ở một tầm rất
            cao nơi họ có thể kiểm soát được não bộ và tạo ra một thứ gọi là
            Luật Hấp Dẫn hay Sự Hấp Dẫn giúp tác động lên những bộ não khác xung
            quanh. Cũng vì lý do này, Phong muốn thử trải nghiệm nó một cách có
            quy tắc hơn và khái niệm hơn khi viết lại toàn bộ quá trình Phong
            thực hiện, cũng như những chỉnh sửa liên quan và gọi nó là "Sound
            from Universe".
          </Paragraph>
          <Quote>
            Nếu bất cứ khi nào bạn đang làm một điều gì đó hoặc đang đi một
            hướng đi nào đó, có một điều khách quan* diễn ra và bạn cảm thấy nó
            thật sự trùng hợp và giúp ích cho mục tiêu hiện tại. Bạn có thể hiểu
            rằng, vũ trụ đang gửi đến não bộ của bạn một thông điệp rõ ràng
            "Đúng hướng rồi đấy, hãy tiếp tục và đừng bỏ cuộc".
          </Quote>
          <Paragraph>
            *Yếu tố khách quan đó thường sẽ không liên quan hoặc không có bất kỳ
            mối liên hệ nào với bạn, nếu nó có thì bạn phải cân nhắc kỹ vì nó có
            thể là một cái bẫy.
          </Paragraph>
          <Paragraph>
            Những dòng đầu tiên của Sound from Universe được viết vào 4:42 phút
            sáng ngày 26/02/2021. Đây cũng là lần đầu tiên sau rất lâu rồi Phong
            mới ngủ vào lúc 10 giờ tối và dậy lúc 3 giờ sáng, theo Luật Hấp Dẫn
            thì khoảng thời gian từ 3 giờ đến 5 giờ sáng cũng chính là thời gian
            não tiếp nhận và giao tiếp tốt nhất đến não bộ. Đó cũng là thời gian
            Vũ trụ gửi một thông điệp hoặc nhiều thông điệp đến bản thân.
          </Paragraph>
          <Paragraph>
            "Sound from Universe" cũng sẽ là nghiên cứu đầu tiên và nghiêm túc
            nhất mà Phong thực hiện về não bộ, về cách vận hành và nâng cấp nó.
            Phong từng được đọc đâu đó rằng là dần dần con người sẽ nghiên cứu
            nhiều hơn về não bộ, về bản thân của Phong trong tương lai, nơi mọi
            người tìm hiểu và đặt nhiều câu hỏi liên quan hơn đến bản thân về{" "}
            <strong>
              Vai trò của bản thân và sứ mệnh của bản thân trong Vũ trụ này
            </strong>
            . Những câu hỏi có phần hơn mông lung dẫn sẽ trở nên cơ bản trong
            một xã hội tương lai nơi mà Phong sẽ đến đó vào một ngày của tương
            lai.
          </Paragraph>
          <ol className="text-sm list-decimal px-5 leading-6 mb-2">
            <li>Có tồn tại mối liên hệ nào giữa con người và Vũ Trụ?</li>
            <li>
              Con người có thật sự được gửi đến Trái Đất hay được mang đến đây
              với một sứ mệnh được giao?
            </li>
            <li>
              Con người có thật sự điều khiển được não bộ ở một cấp độ cao hơn?
            </li>
            <li>
              Làm thế nào để có thể lắng nghe những thông điệp của Vũ trụ gửi
              đến não bộ một cách rõ ràng hơn?
            </li>
            <li>Nguồn phát nằm ở đâu?</li>
          </ol>

          <Heading2 id="anchor1">
            1. Những quy tắc cơ bản của 'Sound from Universe'
          </Heading2>
          <Paragraph>
            Những quy tắc này được xây dựng dựa trên trải nghiệm, khái niệm,
            hiện tượng từ nhiều nguồn khác nhau và được xây dựng trên trải
            nghiệm cá nhân của Phong.
          </Paragraph>
          <Heading3 id="anchor11">
            1.1. Ngủ thật sớm và cố gắng thức dậy trong khoảng thời gian 3 giờ
            sáng đến 5 giờ sáng
          </Heading3>
          <Paragraph>
            Trong một video Phong vô tình xem được trên Youtube của một Youtuber
            người Việt chuyên thực hiện những video về Luật Hấp Dẫn có tên "3
            Cách Tận Dụng Sức Mạnh từ Vũ Trụ nếu Bạn Giật Mình Thức Dậy vào lúc
            3h đến 5h Sáng" (
            <ExternalLink
              href="https://www.youtube.com/watch?v=OOl9fNT79xY"
              colortexthover="rainbow_text_hover"
            >
              Xem video trên Youtube
            </ExternalLink>
            ) có nhắc đến khoảng thời gian này. 3 giờ đến 5 giờ sáng thật sự là
            một khoảng thời gian đáng sợ, đó là khoảng thời gian thể trạng con
            người trở nên yếu nhất (trong trường hợp chúng ta không ngủ và thức
            đến giờ này), cũng là thời gian mà phần lớn mọi người xung quanh
            trong bán kính 1 muối giờ đang chìm trong giấc ngủ say. Nếu như
            chúng ta thức dậy trong khoảng thời gian này sau một khoảng thời
            gian dài chìm trong giấc ngủ, cụ thể là nếu chúng ta ngủ sớm trước
            10 giờ thì khoảng thời gian dậy từ 3 giờ đến 5 giờ sáng sẽ trở nên
            rất tỉnh táo và có phần bị điều khiển bởi não bộ.
          </Paragraph>
          <Quote>
            Trong vũ trụ này không có điều gì là ngẫu nhiên cả, những thứ đang
            diễn ra và sẽ diễn ra đều được lập trình sẵn dựa trên những điều mà
            Vũ trụ mong muốn - những điều mà sứ mệnh của chúng ta phải thực hiện
            khi được gửi đến Trái Đất, dựa trên những thỉnh cầu hoặc những thông
            điệp mà não bộ gửi ngược đến vũ trụ. Bất cứ mọi thứ đang diễn ra
            được quyết định bởi 50% sứ mệnh và 50% mong muốn của não bộ, chính
            vì điều này mà không phải ai cũng có thể thực hiện được sứ mệnh được
            giao. - Trích trong video bên trên
          </Quote>
          <Paragraph>
            Có 3 loại thông điệp từ Vũ trụ sẽ được gửi đến não bộ trong khoảng
            thời gian này:
          </Paragraph>
          <ol className="text-sm list-disc px-5 leading-6 mb-2">
            <li>
              <span className="text-red-500 font-bold">
                Bạn là người được chọn và Vũ trụ sẽ giúp bạn tạo ra một điều
                tuyệt vời
              </span>{" "}
              - Nếu bạn vô tình thức dậy vào khoảng thời gian 3 giờ đến 5 giờ
              sáng, đó không phải là điều ngẫu nhiên mà là một sự sắp đặt của Vũ
              trụ dành cho bạn. Tại sao không phải bất kỳ ai khác mà lại là bạn
              thực dậy trong khoảng thời gian này? Vì vũ trụ muốn bạn thức dậy
              và nó muốn gửi đến bạn một thông điệp và muốn bạn thực hiện một
              điều gì đó. Điều này, Phong cũng từng đã trải nghiệm và nó thật sự
              diệu kỳ, khi cơ thể ở trong trạng thái tốt nhất vào khoảng thời
              gian này, nó giúp chúng ta có thể làm được rất nhiều điều hơn. Một
              trong những ví dụ mà Phong thấy có thể dễ dàng thấy nhất là việc
              Tim Cook - CEO của Apple thường dậy lúc 4 giờ sáng để bắt đầu một
              ngày mới (điều này phần lớn được thực hiện bởi những CEO của các
              công ty hàng đầu thế giới bởi nó giúp họ có đủ mọi tỉnh táo để làm
              việc và suy nghĩ),{" "}
              <strong>
                Phong tự hỏi có phải là họ đã / đang thực hiện việc kiểm soát
                não bộ ở tầng cao để giúp tiếp nhận và thực hiện tốt nhất những
                thông điệp từ Vũ trụ hay không?. Và chúng ta có lẽ hoàn toàn có
                thể chủ động thực hiện điều vô tình này.
              </strong>
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Một lời giải đáp cho những vấn đề nan giải của bạn, Vũ trụ sẽ
                giúp bạn có được sự sáng suốt để vận hành tối đa những gì bạn có
                để giải quyết vấn đề
              </span>{" "}
              - Điều này có thể được giải thích dựa trên khoa học. Khi cơ thể đủ
              tỉnh táo và tràn đầy năng lượng, não bộ sẽ đủ nguồn năng lượng để
              vận hành tối đa giúp tận dụng mọi vùng trên não bộ giúp chúng ta
              có thể sáng suốt giải quyết những vấn đề nan giải.{" "}
              <strong>
                Với cá nhân Phong hiểu và quy tắc quan trọng trong "Sound from
                Universe", não bộ như một cổ máy và nó cần nguồn năng lượng để
                vận hành một cách tốt nhất, khi có đủ năng lượng và khả năng
                điều khiển, não bộ sẽ giúp cho cơ thể thực hiện, giải quyết được
                rất nhiều vấn đề.
              </strong>
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Thấu hiểu bản thân hơn
              </span>
              -{" "}
              <strong>
                Mình là ai? Mình đến với trái đất làm gì? Mình có sử mệnh gì ở
                không gian và thời gian này? Bản thân mình và Vũ trụ này có mối
                liên kết thế nào? Đó là những câu hỏi của con người trong tương
                lai và sẽ là những câu hỏi bắt buộc cơ bản mà một con người cần
                trả lời.
              </strong>{" "}
              Trong khoảng thời gian này não bộ cũng sẽ giúp cơ thể thấu hiểu rõ
              bản thân hơn thông qua những thông điệp mà nó nhận từ vũ trụ. Nếu
              thực tâm bản thân chúng ta hỏi những câu hỏi này, muốn não bộ hỏi
              những câu hỏi này để vũ trụ thì chúng ta sẽ có khả năng và đủ năng
              lượng nhất thực hiện điều này trong khoảng thời gian này. Vũ trụ
              trong một khoảnh khắc cũng sẽ trả lời chúng ta thông qua một suy
              nghĩ thoáng qua hoặc một quyết định bất chợt.
            </li>
          </ol>
          <CallOut emoji="💡" bgcolor="bg-yellow-50 dark:bg-yellow-800">
            Nếu bạn để ý, thức dậy vào khung giờ này sẽ giúp cả ngày hôm đó của
            bạn sẽ dài ra. Điều này không chỉ ở cảm giác là nó dài ra mà nó có
            thể do ảnh hưởng của việc giản nở thời gian trong việc thay đổi đồng
            hồ sinh học. Có một nghiên cứu đang thực hiện để tìm sự tồn tại của
            điều này. Có thể nó không tồn tại nhưng nếu bạn thử một lần thức dậy
            vào thời điểm này, cả ngày hôm đó của bạn sẽ trở nên dài hơn thấy
            rõ. Những điều bạn làm, những hoạt động trong ngày hôm đó sẽ trở nên
            tốn ít thời gian hơn và bạn hoàn thành nó trọn vẹn hơn.
          </CallOut>
          <Heading3 id="anchor12">
            1.2. Loại bỏ phần lớn Wishful Thinking
          </Heading3>
          <Paragraph>
            Wishful Thinking có thể hiểu nôm na là Suy nghĩ viễn vông. Trong một
            hội nghị với các nhà lãnh đạo và doanh nhân Ả Rập #Entspresso,{" "}
            <ExternalLink
              href="https://www.google.com/search?sxsrf=ALeKk02MmRupycWlTrjKpfNX2jd6LdBx6g%3A1614477605429&ei=Jfk6YOHfGfTomAW72qXIBA&q=elon+musk&oq=elon+musk&gs_lcp=Cgdnd3Mtd2l6EAMyDQgAEMcBEKMCELADEEMyDQgAEMcBEKMCELADEEMyBwgAELADEEMyBwgAELADEEMyBwguELADEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEENKBQg4EgExUPIJWPIJYO8MaAFwAHgAgAGeAYgB_wGSAQMxLjGYAQCgAQGqAQdnd3Mtd2l6yAELwAEB&sclient=gws-wiz&ved=0ahUKEwihhq3hvYvvAhV0NKYKHTttCUkQ4dUDCA0&uact=5"
              colortexthover="rainbow_text_hover"
            >
              Elon Musk
            </ExternalLink>{" "}
            đã từng phát biểu rằng:
          </Paragraph>
          <QuotePeople
            imgwhosaid="https://media.giphy.com/media/3jcgPn9fzfaXc1EHJC/giphy.gif"
            namewhossaid="Elon Musk"
            reflink="https://youtu.be/4HizRthlYD8?t=128"
            reftitle="#Entspresso talking"
          >
            One of the biggest mistakes people generally make and I’m guilty of
            a two is wishful thinking, you know, like you want something to be
            true even if it isn’t true and so you ignore other things that you
            ignore the real truth because of what you want to be true, this is a
            very difficult trap to avoid.
          </QuotePeople>
          <Paragraph>
            Wishful Thinking thật sự là một khái niệm có phần khá rộng bởi nó
            gần như bao hàm rất nhiều mặt và chiếm rất nhiều phần, cũng như được
            sử dụng rất nhiều trong suy nghĩ của mỗi người chúng ta. Nói một
            cách dễ hiểu hơn, phần lớn mọi người ngay cả bản thân mình thường
            dành phần lớn thời gian để suy nghĩ về những điều phần lớn không
            diễn ra. Chúng ta suy nghĩ về những điều có phần không thật sự chính
            xác và có phần phóng đại hóa để thỏa mãn sự ham muốn trong suy nghĩ.
            Bởi vì chúng phần lớn không diễn ra ở hiện tại mà chỉ có thể xảy ra
            trong tương lai (với một tỉ lệ thành công rất rất nhỏ vì chúng
            thường vượt ngoài khả năng và nhận thức của môi trường xung quanh
            với các yếu tố khách quan). Bản thân Phong từng trải qua một giai
            đoạn dài bị rơi vào khoảng nguy hiểm này và nó đã tạo ra những tác
            hại không chỉ về mặt tâm lý, sinh lý, mà còn là về mặt thể chất và
            tinh thần. Nếu không nhận thức và tìm cách loại bỏ nó càng nhiều
            càng tốt, dần dần chính não bộ của chúng ta sẽ không còn sáng suốt
            nữa và trở nên chay lì trước những sự việc đang diễn ra.
          </Paragraph>
          <Paragraph>
            Những điểm hại mà Wishful Thinking có thể gây tác động đến chúng ta
            mà có thể được liệt kê dựa trên những trải nghiệm bản thân và những
            hậu quả mà nó mang lại có thể kể đến
          </Paragraph>
          <ol className="text-sm list-disc px-5 leading-6 mb-2">
            <li>
              <span className="text-red-500 font-bold">
                Tạo ra một thế giới ảo bên trong suy nghĩ và khiến não bộ rơi
                vào "khoảng chết"
              </span>{" "}
              : Đây chính là một hậu quả lâu dài của việc có quá nhiều Wishful
              Thinking khi những suy nghĩ viễn vông này dần vẽ ra từng mảng từng
              mảng của những vấn đề mà chúng ta đang đối mặt. Chúng ta thường sẽ
              có xu hướng tạo ra các Wishful Thinking khi một tình huống, một
              vật sự việc không thật sự đi theo đúng hướng mong muốn. Ban đầu
              thì những suy nghĩ viễn vông này sẽ chỉ xảy ra với những tình
              huống lớn và có phần hiếm xảy ra nhưng dần nó sẽ bắt đầu xảy ra
              dày đặt hơn với những việc bình thường hơn với cấp độ tăng cao.
              Việc càng có nhiều Wishful Thinking được hình thành sẽ khiến não
              bộ bị các suy nghĩ này che lấp đi khả năng phần tích và đánh giá
              thể giới thực, thay vào đó não bộ sẽ dùng để vẽ ra những gì mà nó
              muốn và vượt ra ngoài khả năng xảy ra. Từ đó, một thế giới ảo bên
              trong não bộ được hình thành và có thể gọi nó là Universe of
              Minds. "Khoảng chết" được nhắc đến là khoảng thời gian và không
              gian mà não bộ mất nhận thức và khả năng đánh giá với tình huống -
              môi trường - sự vật & sự việc ở thế giới thực.
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Sử dụng quá nhiều năng lượng để vận hành não bộ trong việc kích
                hoạt các giác quan
              </span>{" "}
              : Việc có quá nhiều suy nghĩ viễn vông cũng tiêu tốn rất nhiều
              năng lượng. Nếu bạn từng có khoảng thời gian suy nghĩ viễn vông
              chắc hẳn bạn có thể cảm nhận được phần nào cơ thể như căng ra và
              bạn cảm thấy có phần hơi mệt mỏi nhẹ khi dừng lại và trở về thế
              giới thật. Điều này chính là hậu quả của việc não bộ sử dụng năng
              lượng liên tục để tạo ra các tình huống và lý lẽ bên trong Wishful
              Thinking. Những năng lượng này đáng lý ra sẽ được dùng cho các
              việc phân tích và đánh giá thế giới thực. Bản thân Phong cảm nhận
              rõ ràng rằng khi hạn chế rơi vào các suy nghĩ viễn vông này, Phong
              có thể sáng suốt và nhạy bén hơn trong các tình huống ở thế giới
              thực.{" "}
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Mất cảm giác với thế giới quan hiện thực và góp phần mang đến
                nguy cơ hình thành các suy nghĩ lệch lạc
              </span>{" "}
              : Việc sử dụng nhiều Wishful Thinking sẽ khiến cho não bộ mất đi
              cảm giác với thế giới quan hiện thực bởi nó sẽ luôn chuyển đổi suy
              nghĩ vào thế giới ảo của Wishful Thinking. Khi những dòng suy nghĩ
              viễn vông diễn ra, não bộ cũng sẽ ý thực được rằng nó kiểm soát và
              muốn các yếu tố đi theo mong muốn nên rất dễ dẫn đến các suy nghĩ
              lệch lạc hay thậm chí lệch ra khỏi các tiêu chuẩn đạo đức và tôn
              giáo. Não bộ trong thời gian này cũng dần hình thành suy nghĩ bí
              mật, có nghĩa nó sẽ tự động gửi 1 thông điệp đến chính nó rằng các
              suy nghĩ này là bí mật và sẽ ẩn danh tác động lên thế giới thực.
              Đây cũng chính là Wishful Thinking bên trong một Wishful Thinking
              khác và hiện tượng này sẽ xảy ra khi não bộ bắt đầu dần bị biến
              đổi sang hướng lệch lạc.
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Góp phần đưa cảm xúc bản thân dễ rơi vào trạng thái hụt hẫn hay
                căng thẳng ở trạng thái báo động
              </span>{" "}
              : Wishful Thinking đôi khi không hoàn toàn diễn ra mà có thể rơi
              vào trạng thái nghĩ ở một số khoảng thời gian nhất định, và trong
              khoảng thời gian này thì não bộ sẽ dùng thế giới thực để đối chiếu
              kết quả với thế giới mà nó xây dựng bên trong Wishful Thinking.
              Tất nhiên, phần lớn những kết quả hay những gì diễn ra ở thế giới
              thực sẽ không giống hoặc thậm chí đi theo chiều hướng ngược lại so
              với thế giới ảo trong các suy nghĩ viễn vông. Não bộ sẽ ý thức và
              phân biệt được hai loại này nhưng hoàn toàn đánh mất khả năng tự
              chủ và tạo ra cảm xúc hụt hẫn hoặc thậm chí là căng thẳng. Dễ hiểu
              hơn, chúng ta có thể liên tưởng đến việc hy vọng quá nhiều vào một
              điều chưa xảy ra và nghĩ rằng nó nên xảy ra và các điều tuyệt vời
              mà bản thân sẽ có được khi nó diễn ra. Và rồi khi thế giới thực
              không diễn ra đúng như những gì nó muốn thì cảm xúc tiêu cực / hụt
              hẫn / căng thẳng sẽ cùng nhau xảy ra ở một múc độ nhất định nào
              đó. Nó chắc chắn sẽ tăng dần khả năng ảnh hưởng và cường độ nếu
              xảy ra trong thời gian dài. Và khi nó đạt đến cực độ, não bộ có
              thể hình thành những hướng đi nguy hiểm như mất cảm xúc vào thế
              giới thực và có phần yêu thích hơn thế giới mà Wishful Thinking
              diễn ra.
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Cáng cân cảm xúc bị lệch hẳn về phía tiêu cực
              </span>{" "}
              : Cảm xúc tiêu cực sẽ dễ dàng diễn ra hơn đối với những tình huống
              và sự việc / sự vật bình thường hoặc ít tác động trước đây.
              Wishful Thinking lúc này sẽ không chỉ là những mong muốn ở cảm xúc
              vừa đủ nữa mà là cảm xúc bị tác động. Cụ thể hơn, khi một sự việc
              / tình huống diễn ra, thay vì suy nghĩ tích cực và chấp nhận những
              điểm nhỏ nhặt / những lỗi không đáng có hay không thật sự ảnh
              hưởng nhiều thì những suy nghĩ tiêu cực sẽ hình thành. Và khi các
              suy nghĩ tiêu cực hình thành, Wishful Thinking sẽ đóng vai trò như
              một người phán quyết độc ác tác động* tác động lên tình huống / sự
              việc đó. * có nghĩa là ở góc nhìn của não bộ. Điều này hoàn toàn
              tác động trực tiếp lên chính não bộ nhưng lại mang đến cảm giác
              thỏa mãn và thích thú cho người có suy nghĩ này. Đây có thể coi là
              một hậu quả rất đáng sợ vì khi não bộ không còn được tỉnh táo hay
              các cảm xúc thõa mãn hay thích thú không còn xảy ra vì các suy
              nghĩ này không còn đủ mạnh. Con người có thể dùng hành động ở thế
              giới thực để kích thích cảm giác này ở não bộ. Điểm nguy hiểm nhất
              chính là hành động ở thế giới thực là thực tại và não bộ sẽ không
              thể kiểm soát được hành vi.
            </li>
            <li>
              <span className="text-red-500 font-bold">
                Tạo ra một lý lẽ giả khiến chúng ta dễ rơi vào Wishful Thinking
                hơn
              </span>{" "}
              : Một trong những điều cuối mà Wishful Thinking tạo ra đáng sợ là
              nó sẽ khiến não bộ suy nghĩ ra một lý do để biện hộ chính nó. Đây
              là một điều khiến cho não bộ bảo vệ nó khỏi các suy nghĩ loại trừ.
              Wishful Thinking phần lớn sẽ biện hộ cho chính nó bằng việc cho
              rằng bản thân nó sẽ là một loại động lực giúp cho não bộ mạnh mẽ
              hơn và vượt qua được những khó khăn hiện tại ở thế giới thực mà
              đạt được thế giới ảo nó tạo ra. Não bộ có thật sự kiểm tra những
              biện hộ này hay không? Bản thân mình nghĩ là có bởi não bộ được
              hình thành dựa trên cơ chế đánh giá - phân tích tình huống. Vậy
              tại sao não bộ vẫn bị thuyết phục ở phần lớn thời gian, phải chăng
              hệ thống kiểm tra không thật sự tốt hay không đủ mạnh để phản biện
              lại những biện hộ mà Wishful Thinking tạo ra? Bởi vì Wishful
              Thinking biện hộ lý lẽ của nó đúng ở khởi đầu và đúng khi mức độ
              còn thấp. Não bộ chỉ thật sự phát hiện ra điều này khi thời gian
              đánh giá diễn ra lâu dài và được lặp lại nhiều lần. Các biện hộ
              bảo vệ chính nó của Wishful Thinking đúng ở giai đoạn đầu nhưng sẽ
              dần trở nên mất kiểm soát về sau, và phần lớn thì những suy nghĩ
              viễn vông này sẽ xảy ra rất dài nên nó chắc chắn nó sẽ vượt qua
              được giai đoạn kiểm thử và đánh lừa được não bộ ở phần lớn trường
              hợp.{" "}
            </li>
          </ol>
          <Paragraph>
            Vậy Wishful Thinking có mang lại những lợi ích gì không khi nó mang
            lại quá nhiều điểm có phần bất lợi? Bản thân mình nghĩ nó giúp não
            bộ suy nghĩ xa hơn, rộng hơn, và sâu hơn rất nhiều. Tuy nhiên, những
            lợi ích mà nó mang lại chỉ thật sự có ích khi bản thân não bộ kiểm
            soát được nó ở thế giới thực. Nếu như mất kiểm soát ở thế giới thực
            thì Wishful Thinking sẽ không những mang lại lợi ích mà nó biến
            chúng ta trở thành một người ảo tưởng bên trong lẫn bên ngoài. Phần
            lớn những người kiểm soát được Wishful Thinking và tận dụng được tối
            đa lợi ích của nó đều biết cách dừng nó ở những điểm thích hợp và cố
            gắng đạt được nó ở thế giới thực. Dễ nhận biết là mọi người sẽ thấy
            những người kiểm soát được Wishful Thinking giống như những gã điên.
            Nổi tiếng nhất chính là những người như{" "}
            <ExternalLink
              href="https://www.google.com/search?sxsrf=ALeKk02MmRupycWlTrjKpfNX2jd6LdBx6g%3A1614477605429&ei=Jfk6YOHfGfTomAW72qXIBA&q=elon+musk&oq=elon+musk&gs_lcp=Cgdnd3Mtd2l6EAMyDQgAEMcBEKMCELADEEMyDQgAEMcBEKMCELADEEMyBwgAELADEEMyBwgAELADEEMyBwguELADEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEEMyCgguELADEMgDEENKBQg4EgExUPIJWPIJYO8MaAFwAHgAgAGeAYgB_wGSAQMxLjGYAQCgAQGqAQdnd3Mtd2l6yAELwAEB&sclient=gws-wiz&ved=0ahUKEwihhq3hvYvvAhV0NKYKHTttCUkQ4dUDCA0&uact=5"
              colortexthover="rainbow_text_hover"
            >
              Elon Musk
            </ExternalLink>
            ,{" "}
            <ExternalLink
              href="https://www.google.com/search?q=steve+jobs&oq=steve+jobs&aqs=chrome..69i57j0l3j46j0j69i65j69i61.1271j0j9&sourceid=chrome&ie=UTF-8"
              colortexthover="rainbow_text_hover"
            >
              Steve Jobs
            </ExternalLink>
            ,{" "}
            <ExternalLink
              href="https://www.google.com/search?q=nikolas+tesla&oq=nikolas+tesla&aqs=chrome..69i57j46j0i10i22i30j0i22i30l7.3419j0j9&sourceid=chrome&ie=UTF-8"
              colortexthover="rainbow_text_hover"
            >
              Nikolas Tesla
            </ExternalLink>
            , hay những người đã thật sự thúc đẩy nhân loại đi lên, phần lớn họ
            đều kiểm soát được yếu tố này. Có một câu nói được Steve Jobs nói mà
            mình có thể thấy nó là hệ quả của việc kiểm soát và hiểu về Wishful
            Thinking ở mức độ rất cao.
          </Paragraph>
          <QuotePeople
            imgwhosaid="https://media.giphy.com/media/p6z2lHvl4Da4U/giphy.gif"
            namewhossaid="Steve Jobs"
            reflink="https://abcnews.go.com/Technology/steve-jobs-death-20-best-quotes/story?id=14681795"
            reftitle="Steve Jobs - 20 Quotes - ABC News"
          >
            The people who are crazy enough to think they can change the world
            are the ones who do.
          </QuotePeople>
          <Paragraph>
            Và nếu không kiểm soát được Wishful Thinking họ sẽ trở thành những
            gã điên không thể thay đổi được thế giới.
          </Paragraph>
          <Heading3 id="anchor13">
            1.3. Luyện tập kiên trì từ những điều nhỏ nhất cho đến khi nó trở
            thành bình thường
          </Heading3>
          <Paragraph>
            Với những người không thật sự có khả năng kiên trì tốt, luyện tập từ
            những điều nhỏ nhất là một điều khá tốt. Cụ thể làm một việc gì đó
            nhỏ, một cách nhẹ nhàng lặp lại hàng ngày cho đến khi nó dần trở
            thành bình thường. Một trong những điều khó khăn nhất chính là làm
            một việc gì đó hằng ngày và vượt qua cảm giác chán nản mà nó mang
            lại. Sau khoảng thời gian đó thì những việc này sẽ trở nên bình
            thường và não bộ sẽ dần hình thành một thói quen dựa theo hành động
            đó. Việc làm một việc nhỏ với một sự hào hứng và yêu thích ở thời
            điểm ban đầu, chấp nhận và quyết tâm nó thực hiện hằng ngày là điều
            cần thiết. Tuy nhiên, nếu sau một khoảng thời gian, sự nhiệt huyết -
            quyết tâm hay sự hào hứng mất đi mà thay vào đó là cảm giác chững
            lại và muốn không làm nữa sẽ xảy ra, điều này hoàn toàn bình thường.
            Lúc này, thử thách mới thật sự bắt đầu và nhiệm vụ là vượt qua nó.
          </Paragraph>
          <Paragraph>
            Về cơ bản, thói quen được hình thành từ những điều lặp đi lặp lại,
            những điều này lại được hình thành bởi tính chất cuộc sống, những
            điều này cũng là hệ quả cuộc việc vượt qua được sự chán chường trong
            các hành vi lặp lại. Một ví dụ cơ bản có thể dễ dàng liên tưởng là
            việc viết nhật ký. Phần lớn những người bỏ việc viết nhật ký đến từ
            việc họ không vượt qua được giai đoạn thử thách để biến một hành
            động lặp đi lặp lại trở thành thói quen. Các cảm giác nặng nề và
            ngao ngán sẽ góp phần đánh bại ý chí. Và nếu nó vượt qua được giai
            đoạn này, tính kiên trì sẽ được nâng lên một tầm mới ở một cấp độ
            cao hơn trong sự chịu đựng.
          </Paragraph>
          <Paragraph>
            Một trong những cách luyện tập tính kiên trì theo hướng này mà Phong
            cảm thấy vừa có lợi, vừa hội tụ đủ các thử thách để giúp bạn có thể
            rèn luyện tính kiên trì ngày qua ngày chính là sử dụng Duolingo.{" "}
            <ExternalLink
              href="https://www.google.com/search?q=duolingo&oq=duolingo&aqs=chrome..69i57j69i59j35i39j69i59j0l2j69i60j69i61.1463j0j4&sourceid=chrome&ie=UTF-8"
              colortexthover="rainbow_text_hover"
            >
              Duolingo
            </ExternalLink>{" "}
            là một ứng dụng học ngoại ngữ có thể coi là phổ biến nhất hiện nay
            trên thiết bị di động. Điểm đặc biệt là Duolingo được thiết kế để
            giúp bạn tiếp cận cách học ngôn ngữ thông qua sự lặp đi lặp lại. Các
            bài học là một sự lặp đi lặp lại rất nhiều lần đến khi nó trở thành
            thói quen và hằn sâu vào não bộ của bạn. Việc này giúp bạn có thể
            rèn luyện tính kiên trì và sự lặp lại ngay trong suốt quá trình học.
            Điểm đặc biệt hơn của ứng dụng này chính là Streak, điểm ghi nhận
            liên tục. Mỗi ngày nếu bạn vượt qua giới hạn đã đặt cho bản thân
            bằng cách hoàn thành các bài học, bạn sẽ nhận được 1 ngày streak, và
            nếu bạn từ bỏ 1-3 ngày (trong trường hợp bạn có dùng Freeze Streak,
            một vật phẩm trong ứng dụng giúp bạn không mất toàn bộ Streak khi
            nghỉ 1-2 ngày để phòng tránh trường hợp bất khả kháng từ bên ngoài).
            Việc bạn mất toàn bộ streak sẽ mang đến một cảm giác rất khó tả,
            giống như việc bạn hoàn toàn thất bại vậy. Chính vì điều này mà bạn
            có một động lực vô hình đánh thẳng vào tâm lý không bỏ cuộc. Bạn sẽ
            có thể bất ngờ khi gặp những người có điểm streak ở những con số
            đáng sợ 3000-5000-7000, có nghĩa trong từng ấy ngày liên tiếp họ đã
            sử dụng ứng dụng mỗi ngày. Đến khi bạn dùng ứng dụng này bạn sẽ thấy
            điều đó là thật sự ngượng mộ. Tất nhiên, với số streak như vậy, phần
            thưởng cho bạn là bạn đã hiểu rất nhiều về ngôn ngữ mà bạn đang học.
            Sự lặp lại trong Duolingo được hiểu như một sự lặp lại kép và nó
            giúp bạn có thể luyện tập tính kiên trì rất cao.
          </Paragraph>
          <Paragraph>
            Cơ bản là mọi thứ điều có thể giúp bạn luyện tập tính kiên trì mà
            không chỉ gói gọn trong những điều sử dụng một cái gì đó. Thực tế,
            nếu bạn thực hiện điều đầu tiên{" "}
            <strong>
              1.1. Ngủ thật sớm và cố gắng thức dậy trong khoảng thời gian 3 giờ
              sáng đến 5 giờ sáng
            </strong>
            , bạn cũng có thể luyện tập tính kiên trì rồi. Những gì nằm ngoài
            thói quen hiện tại của bạn có xu hướng lặp đi lặp lại đều rèn luyện
            cho chính não bộ một tính kiên trì nhất định.
          </Paragraph>
          <Heading3 id="anchor14">
            1.4. Hạn chế - cố gắng loại bỏ việc trì hoãn
          </Heading3>
          <Heading3 id="anchor15">
            1.5. Thử những điều mới dù là nhỏ nhất, và làm điều đó một mình
          </Heading3>
          <Heading3 id="anchor16">
            1.6. Hãy đưa bản thân vào trạng thái bình tĩnh trước mình sự việc
            đang diễn ra
          </Heading3>
          <Heading3 id="anchor17">
            1.7. Tìm cho mình một điều gì đó để tin
          </Heading3>
          <Heading3 id="anchor18">
            1.8. Học cách từ bỏ từ những điều nhỏ nhất
          </Heading3>
          <Heading3 id="anchor19">1.9. Cội nguồn của sự tự tin</Heading3>
          <Paragraph>
            Sự tự tin chính là một trong những yếu tố khiến cho bản thân chúng
            ta trở nên thu hút và tốt hơn rất nhiều. Với sự tự tin, giới hạn của
            cơ thể từ tâm hồn đến thể xác sẽ được đẩy lên mức cao nhất. Mặt
            khác, sự tự tin giúp cho não bộ tiếp nhận và xử lý vấn đề một cách
            sáng tạo, có logic, và có phần đặc biệt hơn. Sự tự tin chính là một
            trong những yếu tố quan trọng nhất của một con người. Nếu như không
            có sự tự tin, não bộ sẽ trở nên dần mất kiểm soát và bị cuốn vào một
            vòng xoáy gọi là sự tự ti.
          </Paragraph>
          <Paragraph>
            Cội nguồn của sự tự tin bắt đầu tư đâu? Đây có lẽ là một câu hỏi mà
            rất khó có thể trả lời chính xác bởi sự tự tin không có một hình
            dạng hay một chuẩn mực nhất định. Sự tự tin có thể bắt nguồn từ thực
            tế, tự sự ảo vọng, đến những điều không có thực. Đôi khi, một số
            người có khả năng sinh ra sự tự tin ở bản thân bằng cách đánh lừa
            não bộ và điều này trong một vài trường hợp là rất tốt. Tuy nhiên,
            nó chắc chắn sẽ không bền vững. Sự tự tin bền vững nhất bắt đầu từ
            chính những thứ bền vững, những thứ được người sở hữu xây dựng từng
            ngày, trải qua từng giờ và trải qua rất rất nhiều chuyện khó khăn để
            tạo nên. Có thể nói, sự tự tin ở từng thời điểm sẽ có những cung bậc
            khác nhau nhưng nhìn chung nó đều được tạo ra bởi những yếu tố mà
            người nắm giữ đã trải qua.
          </Paragraph>
          <Quote>Sự tự tin tỉ lệ thuận với thành tựu đạt được.</Quote>
          <Paragraph>
            Sự tự tin trong trường hợp này được đề cập chính là sự tự tin bền
            vững. Một trong những sự tự tin thật nhất và thuần khiết nhất. Và nó
            có tác động mạnh mẽ nhất để không chỉ người nắm giữ mà còn tác động
            đến những người xung quanh khiến bản thân nhũng người ở gần cảm nhận
            được nó. Việc hiểu rõ được cội nguồn của sự tự tin bền vững, não bộ
            sẽ xúc tiến và đưa nó vào một quá trình dài trong việc phát triển
            bản thân. Cứ mỗi thành tựu đạt được, mỗi cột mốc và mỗi giai đoạn mà
            con người trải qua, sự tự tin sẽ dần được sinh ra và lớn mạnh. Để
            rồi một lúc nào đó, sự tự tin bền vững khiến cho người nắm giữ cảm
            nhận được và chợt nhận ra. Một số người trải qua nhiều giai đoạn của
            cuộc đời, sự tự tin bền vững trong họ được não bộ sử dụng một cách
            vô thức khiến cho bản thân họ không nhẫn ra được cội nguồn. Việc
            hiểu được nguồn gốc của yếu tố này giống như hiểu được cội nguồn của
            các tiếng nói mà não bộ tiếp nhận. Một lúc nào đó, bất kỳ ai cũng sẽ
            nhận ra, nhưng họ chôn vùi nó thay vì truyền đạt lại, vì điều đó
            cũng không mang lại hiệu quả cho người được truyền đạt.
          </Paragraph>
          <Heading3 id="anchor110">
            1.10. Định hình cho bản thân những ước mơ
          </Heading3>
          <Quote>
            "Chẳng ai đánh thuế ước mơ cả, nó miễn phí và bất kỳ ai cũng có
            quyền tìm cho mình một ước mơ. Và đã là ước mơ thì không quan trọng
            nó lớn như thế nào, không quan trọng nó hão huyền ra sao, điều quan
            trọng nhất là bản thân người ước mơ phải luôn có niềm tin khi nghĩ
            về nó".
          </Quote>
          <Paragraph>
            Một trong những điều sai lầm nhất là coi thường những ước mơ, và tệ
            hại nhất là không có bất kỳ ước mơ nào. Đừng đánh giá ước mơ của
            người khác, và cũng đừng tự ti về ước mơ của bản thân. Não bộ được
            lập trình để tạo ra những điều tuyệt vời giao thoa giữa ước mơ và
            hiện thực. Hãy luôn nhớ điều đó.
          </Paragraph>
          <Paragraph>
            Ước mơi của mình là gì? "Mình muốn trở thành một triệu phú trước năm
            mình 30 tuổi".
          </Paragraph>
          <Paragraph>
            Nếu bạn nghe qua chắc cũng nghĩ mình giống Bill Gates, cũng đúng vì
            ông ấy từng nói như vậy. Nhưng mình không bắt chước ông ấy, mình
            thậm chí không thần tượng hay quan tâm nhiều đến ông ấy. Vậy tại sao
            mình lại muốn làm triệu phú trước năm 30 tuổi. Vì tiền giải quyết
            được rất nhiều vấn đề, nó giúp cho cuộc sống của bạn tốt hơn, những
            người xung quanh có một cuộc sống tốt hơn, và khi đó mình mới có khả
            năng giúp thêm những người mình muốn giúp. Năm nay, khi mình viết
            bài viết này, mình 23 tuổi, và mình còn 7 năm nữa để thực hiện ước
            mơ này, một khoảng thời gian nghe thì rất dài nhưng nó thật sự rất
            ngắn. Với bản thân mình, tiền hoàn toàn có thể mua được hạnh phúc.
          </Paragraph>
          <QuotePeople
            imgwhosaid="https://i.imgur.com/rd1LCQJ.gif"
            namewhossaid="Amancio Ortega"
            reflink="https://www.google.com/search?q=from+zero+to+zara&oq=from+zero+to+zara&aqs=chrome.0.0i19l2j0i13i19i30j0i19i22i30l2.3149j0j7&sourceid=chrome&ie=UTF-8"
            reftitle="'From Zero To Zara' Book"
          >
            "Tôi kiếm nhiều tiền để làm gì? Để tôi có một cuộc sống tốt đẹp hơn,
            gia đình tôi cũng vậy, và những người xung quanh tôi có một cuộc
            sống coi được hơn."
          </QuotePeople>
          <Paragraph>
            Mình đã đọc được câu trả lời này khi đọc cuốn From Zero To Zara, đó
            là một ngày đẹp trời mấy năm trước. Và đến giờ mình vẫn dành một sự
            kính trọng to lớn nhất cho người đã lập ra để chế thời trang đó,
            ngài Amancio. Thời điểm đó, mình đã có ước mơ là muốn trở thành một
            triệu phú, thậm chí thỉnh thoảng đó là một tỉ phú. Đã có rất nhiều
            giai đoạn mình gần chạm được ước mơ này, nhưng rồi lại vụt mất.
            Nhưng mình không buồn vì điều ấy, mình tin là vũ trụ này đang thử
            thách bản thân mình, và mình vụt mất vì mình chưa đủ xứng đáng và đủ
            sức nắm giữ nó. Mình cần thêm thời gian để rèn luyện và vững tin hơn
            vào ước mơ, vào bản thân mình để có thể đạt được ước mơ đó. Đừng bỏ
            cuộc.
          </Paragraph>
          <Heading3 id="anchor111">
            1.11. Kiềm hãm tối đa và chôn vùi cơn giận dữ của bản thân - triệt
            tiêu việc bị kích động
          </Heading3>
          <Paragraph>
            Có một câu nói rất hay "Việc giận dữ vào một ai đó hay một điều gì
            đó giống như là việc uống thuốc độc mà mong cho người khác trúng độc
            vậy.". Cơn giận dữ chính là một trong những cảm xúc cội nguồn, cảm
            xúc cổ xưa nhất của không chỉ con người mà còn là của mọi sinh vật
            sống. Cơn giận dữ chính là liều thuốc độc hại nhất đối với não bộ
            khi chúng khiến cho não bộ tăng nhiệt theo nghĩa đen và cả nghĩa
            bóng, sử dụng một lượng lớn năng lượng từ não bộ mà không mang lại
            bất kỳ một lợi ích nào. Việc giận dữ không chỉ khiến não bộ mất đi
            sự tỉnh táo, sự sáng suốt mà còn kéo theo sự mất kiểm soát về hành
            vi trong một vài trường hợp khi não bộ quá tải.{" "}
          </Paragraph>
          <Paragraph>
            Tất cả chúng ta đều biết một điều rằng "Chúng ta thật ngu ngốc và ấu
            trĩ khi giận dữ", nhưng cơn giận dữ là một trong những yếu tố có thể
            coi là khó kiểm soát và khó kiềm hãm nhất của con người. Và khi nó
            giống với tất cả mọi người thì bất kỳ ai kiềm hãm tốt nhất, quản lý
            tốt nhất cơn giận dữ của bản thân sẽ là người kiểm soát được mọi
            thứ.
          </Paragraph>
          <Paragraph>
            Kiềm hãm tối đa và chôn vùi cơn giận dữ của bản thân chính là một
            trong những điều kiện kiên quyết để bảo đảm não bộ ở trong trạng
            thái tốt nhất. Kiềm hãm là một điều rất khí nhưng nó chính là bước
            đầu tiên khi việc này dễ thực hiện nhất trong quá trình này (nhấn
            mạnh là dễ nhất trong quá trình này, điều dễ nhất trong những điều
            khó nhất). Và khi kiềm hãm được trong một thời gian dài, chúng ta
            không thể kiềm hãm nó mãi mà phải tiến vào giai đoạn quan trọng nhất
            và cũng là khó nhất chính là chôn vùi nó.
          </Paragraph>
          <Paragraph>
            Đầu tiên, làm thế nào để kiềm hãm tối đa cơn giận dữ? Đây có thể coi
            là một câu hỏi triệu đô, một câu hỏi mà phần lớn mọi người có thể
            xây dựng cho bản thân một câu trả lời riêng. Điều đó không quan
            trọng, quan trọng là có thực hiện được câu trả lời đó vào những thời
            khắc giận dữ hay không. Riêng bản thân của Phong, việc kiềm hãm
            thường được Phong thực hiện bằng cách hỏi 2 câu hỏi quan trọng nhất:
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>
                Việc giận dữ này có giúp giải quyết vấn đề hay không? (câu hỏi
                này bao gồm cả hàm ý nó có trực tiếp tác động đến người khác để
                tạo ra một giải pháp khách quan hay không). Nếu việc giận dữ này
                không giải quyết vấn đề hay không tác động lên những người bị
                tác động một lực tích cực giúp sinh ra giải pháp thì không có lý
                do gì để cho nó bộc phát ra ngoài. Và phần lớn mọi người không
                nghĩ được câu hỏi này khi giận dữ, hoặc nếu có thì nó đều bị bỏ
                qua sau khi thoáng chốc xuất hiện, hoặc nó được biện hộ bằng
                chính não bộ là giúp cho chủ nhân được giải tỏa áp lực. Đây
                chính là điều nguy hiểm, giận dữ không giúp giải tỏa áp lực mà
                nó khiến cho áp lực trở nên nghiêm trọng hơn, một lỗi của não
                bộ.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Việc giận dữ này có phá hủy hay tạo ra một sự tiêu cực trong các
                mối quan hệ hay không? Hậu quả của việc giận dữ nhất thời chính
                là phá hủy một mối quan hệ đối với những mối quan hệ thật sự
                đang diễn ra tốt đẹp. Và nó cũng góp phần tạo ra một sự tiêu cực
                trầm trọng hơn với những mối quan hệ đang diễn biến không thật
                sự ổn. Phong nghĩ tất cả mọi người đều biết rằng giận dữ tác
                động xấu đến thế nào tình hình và sự bền vững của các mối quan
                hệ, và ai cũng biết đều đó nhưng không ai có thể kiềm hãm được.
              </Paragraph>
            </li>
          </BulletList>
          <Paragraph>
            Vậy tại sao mọi người đều biết hai câu hỏi này hoặc có thể nghĩ ngay
            đến chúng khi giận dữ nhưng không thể nào kiềm hãm được nó. Chính là
            lý trí của não bộ đã mất kiểm soát trong thời gian dài và không được
            sử dụng, cảm xúc lấn át đi hoàn toàn lý trí là nguyên do. Với những
            người có lý trí mạnh thì họ có thể dễ dàng kiểm soát được nếu ý thức
            được vấn đề này, nhưng những người thiên về cảm xúc sẽ rất khó có
            thể kiểm soát được bởi lý trí của họ không thể được vận hành trong
            những trường hợp như thế. Vậy làm sao để giải quyết được vấn đề này?
            Hãy để bản thân họ trải qua những điều cay đắng nhất, đau khố nhất,
            kiệt quệ nhất, và tệ hại nhất của việc mất sự kiềm soát. Đó chính là
            thời điểm cảm xúc chết đi và nhường lại quyền kiểm soát cho lý trí.
            Phong cũng trải qua giai đoạn này, một cách tệ hại.
          </Paragraph>
          <Paragraph>
            Và sau đó, chôn vùi. Chôn vùi không có một giải pháp nào cụ thể, và
            chính vì vậy nó là một trong những điều khó khăn nhất mà con người
            có thể thực hiện. Chôn vùi sự giận dữ chính là khiến bản thân không
            còn cảm nhận được sự giận dữ bộc phát ra trước một tình huống hay
            một trường hợp không theo ý muốn của bản thân. Đã một thời gian rất
            dài rồi Phong không cảm nhận được sự giận dữ trổi dậy,, và Phong cố
            gắng chôn vùi nó ở nơi sâu nhất của linh hồn mình. Sự giận dữ luôn
            có một mối quan hệ mất thiết với đau khổ, sự giận dữ sẽ luôn đi kèm
            sau đó là sự đau khổ, và khi sự giận dữ kéo dài thì mức độ đau khổ
            mà nó mang lại ngày càng lớn. Và đến một lúc nào đó, khi sự đau khổ
            diễn ra ở mức độ cao nhất, con người chúng ta không bộc phát ra sự
            giận dữ và từ sự giận dữ đó không sinh ngược lại đau khổ, chúng ta
            chỉ mỉm cười và bước tiếp. Thời điểm đó chính là lúc, bản thân chúng
            ta, bản thân não bộ chúng ta đã thật sự chôn vùi sự giận dữ ở một
            góc khuất nào đó trong linh hồn. Nó có thể không mãi mãi, nhưng nó
            sẽ kéo dài một khoảng thời gian rất lâu.
          </Paragraph>
          <Paragraph>
            Khi trải qua hai giai đoạn trên, giai đoạn kiểm soát cơn giận dữ và
            giai đoạn chôn vùi nó, con người và não bộ sẽ bước vào một giai đoạn
            đỉnh cao nhất của yếu tố này: chính là triệt tiêu việc bị kích động.
            Chúng ta sẽ trở nên điềm tĩnh và không còn phản ứng thái hóa với
            những gì đang diễn ra. Chúng ta không quá bị kích động bởi những
            điều tuyệt vời hay đúng ý, chúng ta cũng không bị sự giận dữ lấn át
            khi xảy ra những điều tệ hại, và chúng ta cũng không bị rơi vào vòng
            xoáy giận dữ - mất kiểm soát - đau khổ khi bị một yếu tố gì đó kích
            động. Chúng ta sẽ luôn điềm tĩnh và đón nhận chúng, tiếp nhận chúng,
            phân tích và trải nghiệm, từ đó đưa ra những điều chính xác hơn mà
            não bộ mong muốn. Đây là một giai đoạn rất khó đạt được trong một
            sớm một chiều hay trải qua nhiều chuyện, nó phụ thuộc vào cả thời
            gian và không gian, nó phụ thuộc vào cả hoàn cảnh và khả năng tiếp
            nhận.
          </Paragraph>
          <Paragraph>
            Và yếu tố này, con người có thể mất cả đời hoặc không bao giờ có thể
            đạt được mức độ cao nhất.
          </Paragraph>
          <Heading3 id="anchor112">
            1.12. Đừng hối tiếc những gì đã trải qua, thay vào đó lạc quan và kỹ
            càng nhìn nhận hơn ở tương lai
          </Heading3>
          <Paragraph>
            Tất cả những cơ hội vụt qua hay những điều tốt đẹp đi qua mà bản
            thân bỏ lỡ hay không nắm bắt kịp, hãy xem đó là một bài học và đừng
            hối tiếc. Việc hối tiếc sẽ khiến cho bản thân rơi vào trạng thái
            tuột cảm xúc và dằn vặt, những điều tiêu cực sẽ đến và dần cuốn trí
            não đi vào một vùng vô định. Mặt khác, việc hối tiếc cũng sẽ góp
            phần tạo ra một tâm lý "sợ bị bỏ lỡ" cho dù nó đã thật sự bị bỏ lỡ
            (trong đầu tư thường được gọi là FOMO), và tất nhiên điều này là
            hoàn toàn nguy hiểm và chính việc bị FOMO có thể khiến sự hối tiếc
            mới được hình thành. Kiên nhẫn chờ đợi và phân tích mọi thứ ở mức
            tối đa có thể để không bỏ lỡ cơ hội hay những điều tốt đẹp đang đến
            trong tương lai. Cuộc sống là một thị trường không bao giờ ngừng lại
            và nó sẽ luôn lên và xuống theo từng giai đoạn, hãy chấp nhận và
            hiểu cách nó vận hành.
          </Paragraph>
          <Paragraph>
            Một trong những điều mà Phong học được khi đặt chân vào thị trường
            Cryptocurrency chính là những điều này. Bước vào thị trường và tìm
            hiểu thị trường này vào giai đoạn đi từ bình thường đến khủng hoảng
            trầm trọng và bước vào giai đoạn tăng trưởng chưa từng có trong lịch
            sử, những gì mà Phong học được chính là{" "}
            <strong>sự kiên nhẫn và đừng hối tiếc</strong>. Việc hối tiếc sẽ tạo
            ra một tâm lý rất nguy hiểm và bất ổn, tạo cho bản thân một tâm lý
            FOMO (sợ bị bỏ lỡ) và FUD (sợ bị không kịp). Và khi trải qua những
            lần như vậy, Phong nhận thấy việc hối tiếc vào những gì không may
            hay không như mong muốn giống như 1 liều thuốc độc và nó tác động
            trực tiếp đến cả tinh thần lẫn thể chất, nó chẳng có bất kỳ một lợi
            ích nào và cũng không góp quá nhiều vào việc thúc đẩy hay tạo động
            lực (và phần lớn chúng ta dùng sự hối tiếc - dằn vặt để biện hộ cho
            bản thân rằng đây sẽ như là một bài học - một động lực - một cột mốc
            giúp chúng ta không mắc lại sai lầm đó, tất nhiên là nếu nhìn kỹ lại
            thì rất khó và rất hiếm nó như vậy).
          </Paragraph>
          <Paragraph>
            Chúng ta sinh ra, tồn tại, phát triển trong thế giới này mà không có
            bất kỳ một "bảng hướng dẫn trước" hoàn chỉnh nào. Chính vì vậy ai
            cũng sẽ có những sai lầm, cũng sẽ có những quyết định và tính toán
            không theo mong muốn. Không có ai hoàn hảo tuyệt đối và cũng không
            có ai là biết trước cả, tất cả đều đã - đang -sẽ trải qua quá trình
            để nhìn nhận ra điều này.{" "}
          </Paragraph>
          <Paragraph>
            Tại sao lúc đó mình lại không làm vậy? Tại sao lúc ấy mình bỏ lỡ?
            Tại sao mình lại hành động như thế? Tại sao điều đó lại diễn ra mà
            mình không nhận ra? Tại sao mình lại nhận ra mà không có bất kỳ hành
            động nào để nắm bắt nó? Tại sao? Tại sao? và Tại sao?. Rất nhiều câu
            hỏi đặt ra khi chúng ta bỏ lỡ những điều hoặc nhìn lại những chuyện
            không mong muốn trong quá khứ. Sao chúng ta kông nghĩ rằng hay không
            tự hỏi rằng Tại sao chúng ta lại như vậy? và nó có mang lại bất kỳ
            lợi ích gì không hay chỉ khiến chúng ta tệ thêm?{" "}
          </Paragraph>
          <Paragraph>
            Bản thân Phong cũng từng trải qua một dài đoạn dài sống trong hối
            tiếc và thậm chí hối hận, dằn vặt về những gì đã diễn ra. Và nó kéo
            dài một khoảng thời gian quá dài, dài tới mức nó khiến Phong kiệt
            quệ và rơi vào trạng thái tiền trầm cảm. Thật khó để vượt qua giai
            đoạn đó, và thật sự khó để nghĩ về nó. Nếu cứ tiếp tục chạy theo và
            tiếp tục hối tiếc những điều đã xảy ra, bản thân chúng ta sẽ dần bị
            rơi vào một vòng lặp vô tận khi lại bỏ lỡ những điều đang diễn ra ở
            hiện tại và sắp diễn ra ở quá khứ. Và cứ thế, chúng ta bị cuốn vào
            cái vòng lặp "chết tiệt" đó mà dần đánh mất đi sự sáng suốt, sự bình
            tĩnh, và sự lạc quan trong suy nghĩ. Và năng lượng mà não bộ dùng
            cho các vấn đề đó là quá lớn, và chẳng bao giờ chúng ta còn nghe
            thấy những tiếng phản hồi từ nó nữa.
          </Paragraph>
          <Paragraph>
            Vì vậy, Phong à, đừng hối tiếc những gì đã trải qua nữa, thay vào đó
            lạc quan và kỹ càng hơn trong cách nhìn nhận các vấn đề ở tương lai.
          </Paragraph>
          <Heading3 id="anchor113">
            1.13. Nổi sợ và sự ganh ghét chính là động lực lớn nhất giúp não bộ
            kích hoạt mọi thứ cần thiết để cơ thể tiến lên
          </Heading3>
          <Paragraph>
            Động lực lớn nhất của một con người, hay có thể gọi là động lực lớn
            nhất của não bộ bao gồm 2 thứ: Nổi sợ và sự ganh ghét. Hai yếu tố
            này có khả năng mạnh nhất trong việc kích thích não bộ tạo ra các
            yếu tố cần thiết, từ đó sẽ thúc đẩy con người tiến tới những giới
            hạn mà họ chưa từng tới, thậm chí là làm những điều chưa từng làm,
            và có suy nghĩ chưa từng có.{" "}
          </Paragraph>
          <Paragraph>
            Đầu tiên, NỔI SỢ, khi chúng ta sợ một điều gì đó, sợ mất một thứ gì
            đó, hay nổi sợ cô đơn và bị bỏ lại, não bộ sẽ được kích thích mạnh
            mẽ giúp chúng ta vực dậy và vượt qua những khó khăn hiện tại, trở
            nên sáng suốt và có phần tích cực hơn. Có một câu nói rất nổi tiếng
            "Đừng bao giờ dồn người khác vào bước đường cùng, vì lúc ấy bạn sẽ
            đánh thức con quỷ trong người họ.". Và điều này cũng đúng với chính
            bạn, chỉ cần là con người, trong những tình huống mà cơ thể bị dồn
            nén đến mức không thể bị dồn nén hơn, nó sẽ sinh ra nổi sợ và từ nổi
            sợ đó, nó sẽ hình thành một động lực to lớn. Và chúng ta hay còn gọi
            đó là bản năng sinh tồn. Thậm chí, nổi sợ tạo ra nguồn động lực lớn
            đến nổi mà bản thân người đó sẽ không bao giờ có thể làm lại điều
            tương tự, họ thậm chí bị phản ứng ngược sau này khi không còn đủ sức
            nữa. Có thể hiểu như một trạng thái "chai". Bạn sẽ không biết bạn
            mạnh mẽ, và giỏi đến dường nào nếu bạn chưa phải đối mặt với một nổi
            sợ hãi vượt ngoài tầm kiểm soát. Nó kích thích một nguồn lực khủng
            khiếp khiến não bộ bạn chống lại mà cả bạn cũng không thể kiểm soát
            được nữa.
          </Paragraph>
          <Paragraph>
            Và điều thứ hai chính là SỰ GANH GHÉT, điều này là một con dao hai
            lưỡi, nó là một trong hai yếu tố giúp cho bạn có một động lực không
            thể to lớn hơn, nhưng nó cũng góp phần khiến cho bạn mất kiểm soát
            dễ hơn. Có hai trường hợp, hai hướng đi cụ thể khi não bộ tạo ra
            động lực bằng sự kích thích của sự ganh ghét.
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>
                Mất kiểm soát ở điểm đích đầu: Khi sự ganh ghét tạo ra một nguồn
                động lực to lớn thông qua não bộ, bạn sẽ có thể làm được những
                điều mà bạn muốn, đạt được những giới hạn mà bạn chưa bao giờ có
                thể vượt qua. Tuy nhiên, khi đạt được mục đích đầu tiên đó, bạn
                có đủ sức dừng lại sự ganh ghét và thay vào đó là sự cảm thông
                và tha thứ hay không chính là vấn đề. Nếu như bạn không thể
                kliểm soát được sau khi đạt được điểm đích đầu, bạn sẽ mất đi
                chính mình và rất rất rất khó sau này mới có thể quay lại. Và
                phần lớn, động lực được tạo ra từ sự ganh ghét đều có xu hướng
                đi vào nhánh này.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Kiểm soát ở điểm đích đầu: Khi kiểm soát được bản thân ở điểm
                đích đầu, não bộ sẽ bắt đầu dịu đi và hình thành ra những điều
                tích cực hơn như một "liều thuốc giảm đau" giúp não bộ trở nên
                bớt nóng đi. Rất khó để kiểm soát được điều này và đây chính là
                điều mà bất kỳ ai muốn tận dụng sự ganh ghét để tạo động lực
                cũng phải nhận thức được, và tính được khả năng kiểm soát. Đừng
                nghĩ rằng bản thân sẽ có thể đi vào điểm này dễ dàng. Khi đặt
                chân vào yếu tố này thì việc đi được đến nhánh này là một thử
                thách rất lớn. Hãy cẩn thận.
              </Paragraph>
            </li>
          </BulletList>
          <div className="w-full p-2 my-2 flex items-center space-x-2 justify-center">
            <VictoryHand />
            <p className="text-black dark:text-white uppercase font-bold inline-flex">
              More soon
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
