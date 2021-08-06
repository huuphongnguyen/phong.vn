import Container from "../../components/Container";
import ExternalLink from "../../components/elements/ExternalLink";
import TelegramComments from "../../components/elements/TelegramComments";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";
import EndPostSection from "../../components/structures/EndPostSection";
import BlogHeader from "../../components/structures/BlogHeader";

export default function Blog_dispo_la_gi_tai_sao_minh_thich_dispo() {
  const seotitle = `Dispo là gì? Tại sao mình thích Dispo?`;
  const seodescrip = `Dispo là gì? Tại sao mình rất thích Dispo? Đây chắc là những câu hỏi mà mình sẽ trả lời trong bài viết này. Dispo đặc biệt đến mức mình phải viết một bài blog trên trang cá nhân của mình để nói về nó.`;
  const seourl = `https://phong.vn/blog/dispo-la-gi-tai-sao-minh-thich-dispo`;
  const seopreviewimg =
    "/static/images/dispo-la-gi-tai-sao-minh-thich-dispo/dispo-la-gi-tai-sao-minh-thich-dispo-feature-img.png";
  const headerslug = "dispo-la-gi-tai-sao-minh-thich-dispo";
  const headerpublish = "2021-02-15";
  const headerreadingtime = "";
  const headerfeatureimggif =
    "/static/images/dispo-la-gi-tai-sao-minh-thich-dispo/dispo-la-gi-tai-sao-minh-thich-dispo-feature-image-phongvn.gif";
  const headerauthors = "Nguyễn Hữu Phong";

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
        <BlogHeader
          title={seotitle}
          publishedat={headerpublish}
          readingtime={headerreadingtime}
          viewcounterslug={headerslug}
          description={seodescrip}
          featureimggif={headerfeatureimggif}
          authors={headerauthors}
        />

        <div className="text-black dark:text-white space-y-3">
          <p>
            Dispo là gì? Tại sao mình rất thích Dispo? Đây chắc là những câu hỏi
            mà mình sẽ trả lời trong bài viết này. Dispo đặc biệt đến mức mình
            phải viết một bài blog trên trang cá nhân của mình để nói về nó.
            Thật sự ứng dụng này đã thay đổi suy nghĩ của mình, nó giúp mình
            trân trọng hơn và tận hưởng hơn những khoảnh khắc mà mình đã trải
            qua. Thời điểm mình viết bài viết này thì Dispo vẫn trong giai đoạn
            BETA thông qua Testflight (một ứng dụng trên iOS do Apple phát triển
            để giúp các Developer có thể chia sẻ ứng dụng sắp ra mắt đến một
            lượng người dùng cụ thể để dùng thử).
          </p>
          <h2 className="font-bold my-4 text-xl rainbow_text inline-block">
            Dispo là gì?
          </h2>
          <p>
            Dispo *từng là một ứng dụng camera đơn giản được phát triển và giới
            thiệu bởi một dream team rất giỏi trong đó có David Dobrik (một
            youtuber khá nổi tiếng với Twitter ~5.6 triệu người theo dõi, bạn có
            thể theo dõi tại{" "}
            <ExternalLink
              href="https://twitter.com/DavidDobrik"
              colortext="text-black dark:text-white"
              colortexthover="rainbow_text_hover"
            >
              @daviddobrik
            </ExternalLink>{" "}
            ). Bản thân mình thì cũng mới biết Dispo trong khoảng 2 tuần trước
            Tết thông qua một Twitter khác là{" "}
            <ExternalLink
              href="https://twitter.com/boop"
              colortext="text-black dark:text-white"
              colortexthover="rainbow_text_hover"
            >
              @boop
            </ExternalLink>{" "}
            (một người khá cá tính và cũng là lead designer cho dự án Dispo
            này). Mình đã sử dụng ứng dụng này khá nhiều trong các cuộc ăn chơi
            cuối năm 😆 với bạn bè và thật sự thích cách mà ứng dụng này hoạt
            động.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-y-2">
            <img
              src="https://dl.dropboxusercontent.com/s/gh5rti3f25666wo/dispo-la-gi-tai-sao-minh-thich-dispo-phongvn-img1.jpeg?dl=0"
              className=" w-full-80 md:w-full col-span-1 mx-auto"
            />
            <div className="col-span-2 space-y-2">
              <p>
                Dispo cơ bản mô phỏng lại máy chụp ảnh, những kiểu Disposable
                Camera và:
              </p>
              <p>
                - Bạn không cần phải chỉnh màu, các thông số, lựa chọn filter
                hay gì cả.
                <br /> - Bạn chỉ cần chỉnh Zoom (thu phóng) nếu cần và lựa chọn
                Tắt hoặc Mở flash mà thôi, và sau đó là chụp chụp và chụp.
                <br /> - Điểm đặc biệt mà Dispo làm là ứng dụng này sẽ không trả
                ảnh ra ngay lập tức như các ứng dụng camera bình thường mà nó sẽ
                đưa toàn bộ ảnh mà bạn chụp vào trạng thái gọi là Developing.
                <br /> - Vậy khi nào thì ứng dụng này "nhả ảnh" ra cho bạn? 9
                giờ sáng hôm sau. 🤣 Đây chính là điểm đặc biệt. Nghe thì có vẻ
                kỳ quặc nhưng thật sự nó là một trải nghiệm rất rất thú vị.
              </p>
              <p>
                Dispo hiện tại vẫn là một ứng dụng camera trên Appstore và bạn
                có thể tải về nó miễn phí. Tìm "dispo" và bạn sẽ thấy một ứng
                dụng camera đầu tiên với màu xanh lá cây. Tất nhiên, hiện tại
                chỉ có trên iOS mà thôi, họ nói sẽ phát triển phiên bản cho
                Android trong năm nay 2021.
              </p>
            </div>
          </div>
          <h2 className="font-bold my-4 text-xl rainbow_text inline-block">
            Tại sao Dispo đang được rất nhiều người nhắc đến?
          </h2>
          <div>
            <p>
              Nếu bạn dùng Twitter vào thời điểm này thì Twitter thật sự đang
              rất xôn xao về Dispo và Dispo Invite khi mà mọi người đang "xin"
              và "cho" nhau những Dispo Invite. Chủ yếu hiện tại là ở thị trường
              US. Một vài người đã thật sự hoang mang khi bỗng nhiên có rất
              nhiều người nói về Dispo và họ thậm chí không biết chính xác Dispo
              là gì. Bản thân mình cũng bất ngờ vào những ngày mùng 1-2 khi tự
              nhiên thức dậy và mọi người nói quá nhiều về ứng dụng mình mới
              xài. Sau khi tìm hiểu thì mình biết được Dispo đã gọi được rất
              nhiều vốn từ hồi cuối năm và dream team của họ đang biến Dispo trở
              thành một social app kết tiếp của thế hệ GenZ. Họ vẫn sẽ giữ lại
              hoàn toàn những gì mà ứng dụng Dispo đang làm là chụp ảnh và 9 giờ
              sáng trả ảnh, nhưng xa hơn là giờ đây mọi người có thể cùng nhau
              chụp ảnh và chia sẻ với nhau thông qua một album chung (dispo gọi
              là rolls - các cuộn phim).
            </p>
            <img
              src="https://dl.dropboxusercontent.com/s/r94ej74okhayshy/dispo-la-gi-tai-sao-minh-thich-dispo-phongvn-img2.png?dl=0"
              className="w-full my-4"
            />
            <p>
              Hiện tại thì Dispo đang trong giai đoạn beta thông qua Testflight
              của Apple nên để sử dụng và có thể cài đặt thì phải được mời.
              Chính vì điều này mà mọi người nói rất nhiều về Dispo Invite. Mình
              được mời vào ngày mùng 2 tết, chỉ 1 ngày sau khi @boop tweet về
              các Dispo Invite. <br />
              Chính vì dùng chiến lược Marketing "Invite to join" đang được rất
              ưa chuộng vì tạo ra làn sóng FOMO (cố gắng có được sớm nhất) đã
              giúp Dispo đang được nhắc đến rất nhiều. Hiện tại thì Clubhouse
              cũng đang dùng chiến lược Marketing này để thu hút người dùng.
            </p>
          </div>
          <h2 className="font-bold my-4 text-xl rainbow_text inline-block">
            Tại sao mình lại thích Dispo? Thật sự là rất rất thích.
          </h2>
          <div className="space-y-3">
            <p>
              Nó đã thực sự thay đổi suy nghĩ và cách nhìn nhận của mình về mạng
              xã hội. Có lẽ hiện tại đang có quá nhiều mạng xã hội và mình cũng
              dùng khá nhiều, và mình thấy được nó đang ảnh hưởng thế nào đến
              cuộc sống xung quanh mình.
            </p>
            <p>
              Dispo đã khiến mình thích bởi họ loại bỏ đi những điều phiền toái
              mà các mạng xã hội khác đang khiến chúng ta bị như vậy (ví dụ là
              Facebook và Instagram):
            </p>
            <p>
              - Dispo không có lựa chọn Filters, không có các thông số, không có
              hiệu ứng,... Ảnh của bạn sẽ được tự động chỉnh theo phong cách máy
              ảnh với màu sắc vintage và có phần hơi cũ.
              <br />
              - Dispo không trả ảnh ngay lập tức để bạn có thể upload lên mạng
              xã hội và chờ like hay chờ người ta vào xem, comment.
              <br />
              - Dispo mới (beta) không cho phép đăng ảnh thông qua Camera Roll
              (ảnh có sẵn trong thư viện), nên toàn bộ ảnh đều là ảnh gốc do bạn
              chụp vào thời điểm đó.
              <br />- Dispo mới (beta) không tập trung nhiều vào like hay
              follow. Bạn không cần phải bị ảnh hưởng hay tâm lý vì vấn đề đó.
              Bản thân mình không quan tâm nhưng mình khá chắc chắn là phần lớn
              bị ảnh hưởng rất nhiều bởi lượng like, follow, và comment. Một cảm
              giác khao khát được chú ý.
            </p>
            <p>
              Và với 3 yếu tố trên, Dispo đã tạo ra một cách sử dụng có phần
              khoảnh khắc hơn. Cụ thể nó sẽ theo kiểu như sau, và mình thích
              kiểu này.
            </p>
            <p>
              - Gặp bạn bè, cùng nhau chụp ảnh những khoảnh khắc cùng nhau. Chỉ
              cần giơ lên và chụp, chụp, chụp. Cùng nhau cười, cùng nhau quẩy và
              cùng nhau gãy 😂 và tất nhiên là cùng nhau chụp những khoảnh khắc
              f**ked up. Chúng ta không cần quan tâm chụp thế nào cho đẹp, cho
              không dìm nhau, cho không góc chết,... vì chúng ta không biết tấm
              ảnh vừa chụp trông như thế nào (chúng ta thấy nó trước khi chụp
              thông qua một màn hình nhỏ xíu mô phỏng ống kính máy ảnh). **Chúng
              ta chụp, bỏ điện thoại xuống và tiếp tục tận hưởng từng khoảnh
              khắc lúc ấy cùng nhau\*\* thay vì mỗi người một cái điện thoại
              ngồi chỉnh ảnh (trong suốt 30p) và up nó lên Instagram hay
              Facebook. Thậm chí xóa đi và chỉnh lại để đảm bảo nó hoàn hảo
              nhất. Và rồi khoảnh khắc chúng ta làm điều đó, chúng ta bỏ qua mọi
              thứ.
              <br />- Và, 9 giờ sáng hôm sau, sau khi cuộc vui đã tàn, sau khi
              tỉnh rượu và trở về thực tại. Dispo trả ra toàn bộ ảnh mà chúng ta
              đã cùng nhau chụp. Mình đã bật cười sau khi xem lại chúng, chia sẻ
              cho bạn bè và mọi người cười cùng nhau. Những khoảnh khắc mà chúng
              ta đã làm, đã có cùng nhau đều được lưu lại theo phong cách rất
              moments.
            </p>
            <p>
              Và điều này lặp đi lặp lại. Mỗi 9 giờ sáng mình có cơ hội nhìn lại
              những khoảnh khắc tuyệt vời của ngày hôm qua, nó sẽ giúp chúng ta
              thấy rằng mình phải sống tốt hơn hôm nay, trân trọng hơn hôm nay
              để 9g sáng mai mình lại có thể nhìn lại và mỉm cười vì điều ấy.
            </p>
            <p>
              Một trong những điều mà mình nhớ lại là, khi còn nhỏ, lúc mà điện
              thoại chưa phát triển và máy ảnh phim vẫn còn phổ biến. Khi chụp
              xong thì mình phải chờ mấy ngày trước khi những cuốn phim được rửa
              ra thành ảnh, những bức ảnh ấy thật sự lưu lại khoảnh khắc mà sau
              này chúng cầm tấm ảnh ấy xem lại vẫn đủ ký ức và hồi tưởng về nó.
              Dispo đang mô phỏng lại chính xác những gì đã diễn ra thời kỳ đó.
              Nó thật sự tuyệt vời.
            </p>
          </div>
          <h2 className="font-bold my-4 text-xl rainbow_text inline-block">
            Dispo có phát triển và trở thành một mạng xã hội lớn hay không?
          </h2>
          <div className="space-y-3">
            <p>
              Bản thân mình nghĩ là rất khó. Bởi hiện tại Instagram vẫn quá
              khổng lồ và họ có truyền thống copy (họ đã làm như vậy với
              Snapchat). Họ sẽ sớm copy hoặc có ý định mua lại Dispo theo mình
              nghĩ. Tuy nhiên, hy vọng là Dispo vẫn sẽ độc lập vì nó được phát
              triển bởi một người làm nội dung.
            </p>
            <p>
              Khi mình viết bài viết này thì tối hôm qua Dispo đã lauching ở
              Nhật, điều này làm cho số lượng bản Beta có thể cài thông qua
              Testflight của Dispo đầy và không thể cài nữa. Một bước khá thành
              công. 10 năm trước, Instagram phát triển global cũng bắt đầu từ
              Nhật đầu tiên và nhận được sự yêu thích giống như vậy. Hy vọng
              Dispo sẽ tiếp tục như thế.
            </p>
            <p>
              Mình không biết là khi scale to hơn thì Dispo có đánh mất đi những
              giá trị hiện tại không, nhưng với những gì tìm hiểu về dream team
              đang xây dựng ứng dụng này. Mình tin chắc là họ vẫn sẽ giữ điều
              ấy.
            </p>
            <p>Gửi một lời cảm ơn rất trân thành đến với:</p>
            <p>
              <ExternalLink
                href="https://twitter.com/boop"
                colortext="text-black dark:text-white"
                colortexthover="rainbow_text_hover"
              >
                @boop
              </ExternalLink>{" "}
              /{" "}
              <ExternalLink
                href="https://twitter.com/DavidDobrik"
                colortext="text-black dark:text-white"
                colortexthover="rainbow_text_hover"
              >
                @daviddobrik
              </ExternalLink>{" "}
              /{" "}
              <ExternalLink
                href="https://twitter.com/malonehedges"
                colortext="text-black dark:text-white"
                colortexthover="rainbow_text_hover"
              >
                @malonehedges
              </ExternalLink>{" "}
              /{" "}
              <ExternalLink
                href="https://twitter.com/negroprogrammer"
                colortext="text-black dark:text-white"
                colortexthover="rainbow_text_hover"
              >
                @negroprogrammer
              </ExternalLink>{" "}
              / và các thành viên khác trong Dispo Team.
            </p>
          </div>
        </div>
        <EndPostSection telegramid="5">
          <TelegramComments datatelegramdiscussion="phongchannel/5" />
        </EndPostSection>
      </div>
    </Container>
  );
}
