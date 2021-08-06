import Container from "../../components/Container";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";
import Paragraph from "../../components/elements/block/Paragraph";
import CallOut from "../../components/elements/block/CallOut";
import Heading2 from "../../components/elements/block/Heading2";
import Heading3 from "../../components/elements/block/Heading3";
import BulletList from "../../components/elements/block/BulletList";
import EndPostSection from "../../components/structures/EndPostSection";
import TelegramComments from "../../components/elements/TelegramComments";
import BlogHeader from "../../components/structures/BlogHeader";

export default function Notion_la_gi_ung_dung_quan_trong_nhat_cua_minh_blog() {
  const seotitle = `Notion là gì? Ứng dụng quan trọng nhất của mình`;
  const seodescrip = `Notion là gì? Và tại sao mình xem nó là ứng dụng quan trọng nhất của mình. Trong bài viết này mình sẽ viết về những gì mình cảm nhận và trải qua trong suốt gần 4 năm dùng Notion. Nó gần như đã thay thế các ứng dụng ghi chú, soạn thảo của mình như Evernote, Word, Page,... Gần như mọi thông tin mình tìm hiểu và học được, mọi dự án mình làm, mỗi bài viết mình viết đều được viết và lưu trữ tại Notion đầu tiên`;
  const seourl = `https://phong.vn/blog/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh`;
  const seopreviewimg =
    "/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-feature-img.png";
  const headerslug = "notion-la-gi-ung-dung-quan-trong-nhat-cua-minh";
  const headerpublish = "2021-05-29";
  const headerreadingtime = "15";
  const headerfeatureimggif =
    "/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-feature-banner.gif";
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
          <Paragraph>
            Rất khó để kể chi tiết và giới thiệu tất cả những điểm hay của
            Notion bởi nó được thiết kế dành cho mọi người và gom mọi thứ lại
            làm một, điều bạn cần làm là hãy trải nghiệm - khám phá - và sáng
            tạo cho riêng bạn, sáng tạo một trang Notion cho bạn - một trang
            wiki về những gì bạn học được -biết được - và đã làm được.
          </Paragraph>
          <CallOut emoji="📌" bgcolor="bg-yellow-50 dark:bg-yellow-800">
            Địa chỉ chính thức của Notion:{" "}
            <a
              href="https://notion.so"
              className="font-bold rainbow_text_hover text-black dark:text-white"
              target="_blank"
            >
              https://notion.so
            </a>
          </CallOut>
          <Paragraph>
            Đến giờ mình vẫn thắc mắc là tại sao họ sở hữu{" "}
            <strong>Notion.com</strong> nhưng lại dùng tên miền{" "}
            <strong>Notion.so</strong> làm tên miền chính. Có thể đây là một
            cách chơi chữ và giúp bạn dễ nhớ hơn.
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-[100%] md:w-[50%]"
              src="/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-phongvn-img1-edited.jpg"
            />
          </div>
          <Paragraph>
            Trong bài viết này mình cũng không hướng dẫn nhiều chi tiết các bước
            dùng Notion như thế nào vì nó thật sự rất nhiều và Notion cũng đã
            thiết kế để bạn dễ sử dụng nhất có thể rồi. Mình tin là bạn chỉ cần
            khoảng 20 phút là nắm rõ các bước cơ bản, từ đó bạn có thể sáng tạo
            và làm những điều mà bạn có thể tưởng tượng ra với Notion như biến
            trang Notion thành một trang wiki cho bạn, tạo một trang tổng để
            quản lý công việc, một trang tổng kết và lịch cho việc học, hay một
            list những thứ bạn cần, thậm chí bạn có thể tạo một trang website
            cho riêng bạn.
          </Paragraph>
          <Heading2 id="anchor1">1. Luyên thuyên</Heading2>
          <Paragraph>
            Trong phần này này, mình "chém gió" một xíu về Notion là gì và nó có
            ăn được không. Tại sao trong khoảng một năm trở lại đây nó lại được
            rất nhiều người quan tâm và nó có tốt như những gì mà giang hồ đồn
            không. Đây là nhận xét và giới thiệu chủ quan của mình, một người
            yêu Notion và có 4 năm chung sống với nó.
          </Paragraph>
          <Heading3 id="anchor11">
            1.1. Notion là gì? Và Notion dùng để làm gì?
          </Heading3>
          <Paragraph>
            Đầu tiên, Notion là gì? Theo website chính thức của Notion giới
            thiệu bằng một dòng chữ rất rất to "All-in-one workspace", mình nghĩ
            đã thể hiện hết Notion là gì rồi, đó chính là một không gian làm
            việc duy nhất với tất cả mọi thứ mà bạn cần. Bạn có thể làm những
            điều sau với Notion:
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>Lên kế hoạch cho bản thân hay nhóm của bạn</Paragraph>
            </li>
            <li>
              <Paragraph>
                Bạn có thể tạo ra một trang giống như wiki liên kết các kiến
                thức và thông tin mà bạn có để dễ dàng tra cứu lại
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Bạn có thể dùng để quản lý dự án và những công việc cần làm, một
                danh sách những điều cần thực hiện
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Bạn có thể ghi chú và viết lại những điều quan trọng hay lưu trữ
                những file, những hình ảnh quan trọng nhất
              </Paragraph>
            </li>
            <li>
              <Paragraph>Và hơn thế nữa</Paragraph>
            </li>
          </BulletList>
          <Paragraph>
            Và tất cả những điều trên, bạn chỉ cần dùng Notion thay vì phải dùng
            các ứng dụng riêng biệt cho từng mục đích như Word, Excel, Note,
            Airtable, Everynote,... Tất nhiên, so với các ứng dụng chuyên dụng
            đó thì Notion không thể so sánh được, nhưng những gì mà người dùng
            bình thường sử dụng trên các ứng dụng đó thì Notion có thể làm được
            khoảng 90% rồi.
          </Paragraph>
          <Paragraph>
            Đó là về Notion. Mình cũng giới thiệu luôn là Notion là một start-up
            thuộc nhóm "Unicorn" - tức là những công ty khởi nghiệp được định
            giá trên 1 tỉ USD. Và định giá của Notion theo mình biết lần gần
            nhất mình tìm hiểu là đâu đó khoảng 2-3 tỉ USD. Khoảng 40.000
            -60.000 tỉ VND, một con số thật sự khủng khiếp cho thấy họ đang phát
            triển mạnh và trở thành một phần của rất rất nhiều cá nhân & doanh
            nghiệp trên thế giới. Và công ty này chỉ có khoảng 100-150 người thì
            phải.
          </Paragraph>
          <Paragraph>
            Cá nhân mình, mình đã biết Notion trong những ngày đầu, khi mà họ
            còn ở giai đoạn thử nghiệm beta và ra mắt trên Product Hunt. Notion
            của ngày ấy cũng không khác nhiều so với Notion của hiện tại nhưng
            chậm hơn rất nhiều. Kể từ khi Notion tuyển thêm rất nhiều người giỏi
            về mảng thiết kế hệ thống và xây dựng lại mọi thứ phía sau, mình có
            thể cảm nhận rõ ràng Notion đã nhanh hơn rất nhiều khoảng 70% rồi.
            Tốc độ bạn mở trang, tải các thông tin gần như ngay lập tức. Và lúc
            này thì bạn hoàn toàn có thể an tâm và thoải mái dùng nó.
          </Paragraph>
          <Paragraph>
            À đây là bảng giá của Notion mà bạn có thể tham khảo, với mình thì
            giá này thật sự quá rẻ cho một công cụ như vậy. Và thậm chí bạn biết
            không, bảng giá này với các tính năng hiện tại đã được chỉnh sửa
            cách nay khoảng 1 năm rồi. Trước đây nó không ngon như vậy đâu 🤣.
            Bạn có thể xem chi tiết giá của Notion tại đây:{" "}
            <a
              href="https://www.notion.so/pricing"
              className="font-bold rainbow_text_hover text-black dark:text-white"
              target="_blank"
            >
              Notion Pricing
            </a>
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-[100%] md:w-[90%]"
              src="/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-phongvn-img13-edited.jpg"
            />
          </div>
          <CallOut emoji="💡" bgcolor="bg-yellow-50 dark:bg-yellow-800">
            Một trong những điều mà mình ấn tượng nhất với Notion mà không có
            bất kỳ một công cụ, ứng dụng nào trong lĩnh vực làm đó là mở
            unlimited (không giới hạn) file upload lên kể cả dung lượng từng
            file. Mình thậm chí tải lên một file nặng 5Gb lên Notion luôn. Tốc
            độ tất nhiên không thể so sánh với các Cloud chuyên dụng nhưng nó
            khá nhanh đấy. Và với Notion API, hy vọng là không có "anh hai" nào
            lợi dụng điều này để host các website xem phim 😬
          </CallOut>
          <Paragraph>
            Hiện tại thì mình đang dùng gói Personal Pro với $48 một năm. Một
            mức giá thật sự khiến mình cảm thấy bất ngờ.
          </Paragraph>
          <Heading3 id="anchor12">
            1.2. Tại sao Notion đang được rất nhiều Tiktoker, Youtuber giới
            thiệu?
          </Heading3>
          <Paragraph>
            Tại sao Notion đang được rất nhiều Tiktoker, Youtuber giới thiệu
            trong các video của họ? Mình nghĩ là do Notion đã bắt đầu rất phổ
            biến và trở nên thân thiện hơn với mọi người. Và Notion thật sự tốt
            cũng như phù hợp với thế hệ GenZ hay Millenials hiện nay. Bản thân
            mình cũng thật sự bất ngờ khi xem Tiktok và thấy rất nhiều video
            giới thiệu về Notion, với Youtube thì mình không bất ngờ lắm. Nhưng
            mình thấy nó thật sự là một tín hiệu đáng mừng cho Notion cũng như
            những người dùng lâu năm rất nhiều.{" "}
          </Paragraph>
          <Paragraph>
            Mặc khác thì trong khoảng 2 năm trở lại đây, Notion đã tuyển dụng
            thêm rất nhiều nhân sự giỏi trong mảng Marketing và hỗ trợ người
            dùng. Rất nhiều video hướng dẫn từ chính Notion team và cả những
            người được gọi là "đại sứ" của Notion, rất nhiều những showcase và
            quan trọng nhất là rất nhiều template mẫu được tạo ra giúp người
            dùng Notion có thể nhanh chóng sử dụng mà không cần tốn thời gian để
            ngồi setup. Bên cạnh đó, rất nhiều công cụ từ những bên thứ 3 đã
            tham gia vào việc biến trang Notion của bạn thành một website thật
            thụ với Custom domain hay Custom CSS kiểu như{" "}
            <a
              href="https://potion.so"
              className="font-bold rainbow_text_hover text-black dark:text-white"
              target="_blank"
            >
              Potion
            </a>
            ,{" "}
            <a
              href="https://super.so"
              className="font-bold rainbow_text_hover text-black dark:text-white"
              target="_blank"
            >
              SuperSo
            </a>{" "}
            đã thu hút rất nhiều người dùng. Hiện tại, với Notion API vừa ra mắt
            chính thức, thực tế Notion API đã được thử nghiệm trong suốt 3 năm
            bên dưới bởi những lập trình viên, bản thân mình cũng đã thử Notion
            API rất lâu trước khi nó xuất hiện. Với Notion API, những gì bạn làm
            trên Notion có thể dùng ở rất nhiều nơi khác bên ngoài (tất nhiên
            đòi hỏi bạn có một kỹ năng lập trình nhất định). Notion API cũng mở
            ra một hướng đi mới, giúp Notion có thể kết nối với các ứng dụng
            khác thông qua những dịch vụ auto nổi tiếng nhất như{" "}
            <a
              href="https://zapier.com"
              className="font-bold rainbow_text_hover text-black dark:text-white"
              target="_blank"
            >
              Zapier
            </a>{" "}
            hay
            <a
              href="https://automate.io"
              className="font-bold rainbow_text_hover text-black dark:text-white"
              target="_blank"
            >
              Automate
            </a>{" "}
            (nếu bạn đi làm ở những công ty lớn sẽ có thể biết đến những dịch vụ
            auto workflow như vậy).{" "}
          </Paragraph>
          <Paragraph>
            Với những bước tiến khá dài như vậy, đó là lí do mà Notion được biết
            đến rộng rãi hơn và tiếp cận được rất nhiều nhóm khách hàng khác
            nhau.
          </Paragraph>
          <Heading3 id="anchor13">
            1.3. Dùng Notion có khó không và dùng trong những trường hợp nào?
          </Heading3>
          <Paragraph>
            Dùng Notion nhìn có vẻ khá khó khăn ở ban đầu đối với những người đã
            quen với các ứng dụng cũ hiện tại. Mặt khác thì văn hóa có những
            trang wiki cá nhân cho bản thân không thật sự phổ biến ở phương Đông
            nên những concept giống như Notion có thể khiến bạn hơi khó hiểu. Ở
            phương Tây, văn hóa Wiki cá nhân cũng khá phổ biến khi mình thấy dần
            có rất nhiều công cụ theo concept này ra đời như{" "}
            <a
              href="https://roamresearch.com/"
              className="font-bold rainbow_text_hover text-black dark:text-white"
              target="_blank"
            >
              RoamResearch
            </a>{" "}
            hay
            <a
              href="https://coda.io/welcome"
              className="font-bold rainbow_text_hover text-black dark:text-white"
              target="_blank"
            >
              Coda
            </a>
            .{" "}
          </Paragraph>
          <Paragraph>
            Để mình giải thích thêm một xíu về Wiki cá nhân, như chúng ta đã
            biết thì Wikipedia là một trong những trang lưu trữ định nghĩa và
            thông tin lớn nhất thế giới, phần lớn mọi người đều search thông tin
            về một điều gì đó trên Google sẽ vào Wikipedia để xem chi tiết nhất.
            Và văn hóa Wiki cá nhân cũng được xây dựng từ định nghĩa này. Khi
            các Note, Docs của bạn được liên kết với nhau thông qua các link
            kiểu như Wikipedia, bạn có thể thấy bất kỳ thông tin nào trên
            Wikipedia đều có dẫn nguồn giải thích sang một trang Wikipedia khác,
            và cứ như vậy tạo nên một khối kiến thức khổng lồ. Và với Wiki cá
            nhân, bạn có thể ghi chép lại những thông tin mà bạn học được, sau
            đó link chúng thành những khối giống nhau theo kiểu "Connecting the
            dots".{" "}
          </Paragraph>
          <Paragraph>
            Nghe thì có vẻ phức tạp và rối rắm, mình cũng từng nghĩ như vậy
            nhưng khi thử đưa bản thân theo concept này thì thật dễ dàng. Với
            một người có phần hơi "não cá vàng" như mình thì thỉnh thoảng mình
            sẽ nhớ mang máng là mình từng biết điều này nhưng quên mất. Và thế
            là mình vào Notion search lại và tìm thấy điều mình từng học, từng
            biết đó một cách nhanh chóng. Khi tìm lại thì não cũng sẽ khác sâu
            thông tin đó thêm một bậc. Điều này thể hiện rõ nhất khi mình còn
            học đại học. Và mình nghĩ là nó quan trọng khi bạn đang học ở
            trường.
          </Paragraph>
          <Paragraph>
            Trường hợp sử dụng Notion thì nhiều vô số kể luôn khi nó được tạo ra
            để sử dụng cho mọi người trong mọi tình huống, mọi hoàn cảnh mà muốn
            ghi chép và liên kết kiến thức, quản lý thông tin. Đây là trang
            template do chính Notion tạo ra để dành cho từng nhóm khách hàng
            riêng biệt, từng đối tượng trong những tình huống cụ thể, bạn có thể
            xem tại đây:
          </Paragraph>
          <Paragraph>
            Notion Template:{" "}
            <a
              href="https://www.notion.so/Notion-Template-Gallery-181e961aeb5c4ee6915307c0dfd5156d"
              className="font-bold rainbow_text_hover text-black dark:text-white"
              target="_blank"
            >
              https://www.notion.so/Notion-Template-Gallery-181e961aeb5c4ee6915307c0dfd5156d
            </a>
          </Paragraph>
          <Paragraph>
            Cơ bản nhìn chung thì Notion sẽ có thể dùng trong 3 trường hợp như
            họ đã giới thiệu trên website.
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>Dùng để tạo Wiki cá nhân hoặc dùng cho team</Paragraph>
            </li>
            <li>
              <Paragraph>
                Dùng để quản lý dự án và các nhiệm vụ cần làm
              </Paragraph>
            </li>
            <li>
              <Paragraph>Dùng để viết và viết 😙</Paragraph>
            </li>
          </BulletList>
          <Heading2 id="anchor2">2. Bắt đầu mọi thứ với Notion</Heading2>
          <Paragraph>
            Luyên thuyên khá nhiều rồi, trong phần này mình sẽ kể những điều mà
            mình làm với Notion. Gần như có thể coi mình bắt đầu mọi thứ với
            Notion từ công việc ,cuộc sống, đến học một điều gì đó mới.{" "}
          </Paragraph>
          <Heading3 id="anchor21">
            2.1. Mình dùng Notion cho những dự án mình đang làm
          </Heading3>
          <Paragraph>
            Với những project mà mình đang làm, điều đầu tiên chính là mình sẽ
            tạo một trang Notion cho nó bao gồm những phần quan trọng và từ đó
            sẽ thêm vào những thông tin mới trong suốt quá trình làm việc. Không
            chỉ thông tin mà còn là những file quan trọng và những hình ảnh,
            logo, banner (các file tải lên Notion đều là file gốc nên bạn có thể
            làm việc cùng team rất tốt).
          </Paragraph>
          <div className="grid grid-cols-2 md:flex gap-2">
            <div className="md:w-[40%]">
              <img
                src="/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-phongvn-img2-edited.jpg"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
            <div className="md:w-[60%]">
              <Paragraph>
                Đây là một cấu trúc file Notion mà mình có cho project Epilogue
                của mình. Và sản phẩm từ dự án này chính là{" "}
                <a
                  href="https://change.vn"
                  className="font-bold rainbow_text_hover text-black dark:text-white"
                  target="_blank"
                >
                  CHANGE.VN{" "}
                </a>
                .
              </Paragraph>
              <Paragraph>
                Gần như mọi thông tin mà mình làm việc cùng team đều nằm ở trong
                các trang Notion này. Khi cần file gì đó quan trọng thì mình có
                thể lên trên này lấy hoặc quản lý trực tiếp trên đó rất tiện.
              </Paragraph>
              <Paragraph>
                Với Notion API mình có thể lấy thông tin từ các ứng dụng bên
                ngoài khác và đổ vào trang Notion này luôn.
              </Paragraph>
            </div>
          </div>
          <Paragraph>
            Do là các trang Notion này đều là private nên mình không thể chụp
            chi tiết hơn trong bài viết này. Tuy nhiên, nhìn chung thì nó cũng
            tương tự như các Template mà Notion đã tạo sẵn.
          </Paragraph>
          <Heading3 id="anchor22">
            2.2. Mình dùng Notion cho trang wiki riêng của bản thân mình
          </Heading3>
          <Paragraph>
            Như mình đã giải thích ở phần trước về concept Wiki cá nhân, mình
            cũng dùng Notion để hệ thống những gì mình biết và những gì mình đã
            làm. "Connecting the dots" và biến chúng thành một trang mình sẽ
            search đầu tiên thay vì Google. Một trong những điều mình thấy thật
            sự tốt khi dùng Notion nói riêng làm một trang Wiki cho bản thân
            chính là bạn được học lại một lần nữa với những thông tin từng tìm
            hiểu. Khi mình đọc thông tin về một điều gì đó mới, mình thường có
            xu hướng hệ thống hóa lại những gì đọc và tìm hiểu được, và trong
            quá trình đó mình như đã ghi lại một lần nữa.
          </Paragraph>
          <Paragraph>
            Sau này, khi cần thì mình tìm lại sẽ dễ dàng hơn và nhanh chóng hơn
            trong việc tải lại. Và khi làm như vậy, lượng thông tin đó sẽ được
            học lại một lần nữa. Dần dần thì não bộ sẽ tiếp nhận kiến thức đó
            sâu hơn và lâu dài hơn.
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-[100%] md:w-[90%]"
              src="/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-phongvn-img6-edited.jpg"
            />
          </div>
          <Paragraph>
            Phía trên là một trang Notion mà mình đã dùng trong suốt quá trình
            học năm cuối đại học của mình tại Đại học Greenwich Việt Nam. Đó là
            nơi mình đã dùng để hệ thống kiến thức, làm luận án và liên kết các
            thông tin References cho hợp lý nhất. Nhìn lại, thì vào thời điểm đó
            mình thật sự dùng Notion nhiều nhất để làm luận án.
          </Paragraph>
          <Heading3 id="anchor23">
            2.3. Mình dùng Notion để viết blog cho website của mình
          </Heading3>
          <Paragraph>
            Gần như tất cả những bài viết blog mà bạn có thể tìm thấy trên trang
            phong.vn đều được mình viết trên Notion trước cả. Lý do tất nhiên là
            Notion được tạo ra để viết mà. 😆 Các định dạng và các structure đều
            được làm để dùng khá dễ giúp mình tập trung tối đa vào viết mà thôi.
            Sau khi viết xong thì việc dùng nó trên website sẽ dễ dàng hơn rất
            nhiều. Dưới đây là screenshot của bài viết này trong trang Notion
            của mình.
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-[100%] md:w-[90%]"
              src="/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-phongvn-img5-edited.jpg"
            />
          </div>
          <Paragraph>
            Có rất nhiều bài viết blog mà mình viết ở trong Notion vẫn chưa được
            publish lên website riêng của mình vì một vài lý do. Thậm chí có
            những bài mình viết để giải tỏa cảm xúc và để xàm là chính 🤣 Thấy
            nó khá là hiệu quả đấy, nếu bạn hay gặp căng thẳng, hoặc muốn viết
            một điều gì đó thì hãy thử cách này. Viết blog để chia sẻ suy nghĩ
            và những gì bạn muốn nói, đừng quan trọng quá và đừng để ý nhiều đến
            văn phông hay những điều học thuật, hãy cứ chính là bạn. Dần dần
            những điểm không phù hợp sẽ bị loại bỏ.
          </Paragraph>
          <Heading2 id="anchor24">
            2.4. Mình dùng Notion để viết nhật ký cho bản thân
          </Heading2>
          <Paragraph>
            Mình có viết nhật ký, là một người sống có xu hướng hơi hướng nội
            nên mình cũng thích điều này. Việc viết nhật ký vào cuối ngày giúp
            cho mình nhìn nhận lại mọi thứ tốt hơn và cảm thấy trân trọng hơn
            mọi thứ. Mình từng thử viết nhật ký vào cuốn sổ nhưng nó không hợp
            với mình, rất nhiều phương pháp khác nhau mình cũng từng thử nhưng
            viết vào trang Notion luôn là hợp nhất. Mình không phải là một người
            thích đăng tải quá nhiều lên mạng xã hội nên việc viết nhật ký trong
            Notion thay thế việc post bài lên Facebook cũng là một điều khá tốt.
          </Paragraph>
          <Paragraph>
            Mình cũng có một trang nhật ký công khai tại đây, mình tạo ra để cho
            vui và giúp mình cởi mở hơn nhưng theo thống kê thì có một lượng
            người nhất định vẫn đọc, khá lạ. 🙄
          </Paragraph>
          <Paragraph>
            {" "}
            <a
              href="https://log.phong.vn"
              className="font-bold rainbow_text_hover text-black dark:text-white"
              target="_blank"
            >
              log.phong.vn
            </a>{" "}
            → Địa chỉ này sẽ dẫn đến trang nhật ký public của mình, mình chia sẻ
            trực tiếp từ trang Notion luôn nên nó sẽ re-direct sang địa chỉ
            Notion.
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-[100%] md:w-[90%]"
              src="/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-phongvn-img7-edited.jpg"
            />
          </div>
          <Heading3 id="anchor25">
            2.5. Mình dùng Notion để làm database cho website của mình
          </Heading3>
          <Paragraph>
            Trước đây mình dùng một mã nguồn mở trong việc lấy nội dung từ trang
            Notion của mình để dùng trên website, nhưng hiện tại với Notion API
            thì mình đã có thể làm điều này dễ dàng hơn. Một vài trang trong
            website{" "}
            <a
              href="https://phong.vn"
              className="font-bold rainbow_text_hover text-black dark:text-white"
              target="_blank"
            >
              phong.vn
            </a>{" "}
            có dữ liệu được lấy trực tiếp từ trang Notion của mình. Ví dụ, dưới
            đây là trang Tools, một trang mà mình liệt kê ra những ứng dụng quan
            trọng nhất mà mình đang dùng cũng như hỗ trợ trong công việc, do là
            số lượng khá nhiêu và mỗi cái lại có những thông tin nhỏ khác nhau
            nên mình cần một Table để thống kê và quản lý cho dễ dàng. Mình đã
            dùng Notion để tạo bảng đó và nhập các thông tin vào, sau đó với
            Notion API mình có thể fetching trực tiếp theo thời gian thực lên
            website của mình một cách dễ dàng nhất.
          </Paragraph>
          <div className="grid grid-cols-2 md:flex gap-2">
            <div className="md:w-[50%]">
              <img
                src="/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-phongvn-img8-edited.jpg"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
            <div className="md:w-[50%]">
              <img
                src="/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-phongvn-img9-edited.jpg"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
          </div>
          <Paragraph>
            Trước đây mình phải cần dùng những Database chuyên dụng cho website,
            nhưng với Notion thì giờ đây mình có thể dùng trực tiếp cho website
            của mình luôn. Đúng nghĩa gom hết mọi thứ về 1 chỗ.
          </Paragraph>
          <Heading3 id="anchor26">
            2.6. Mình dùng Notion để quản lý cuộc sống hằng ngày và lưu trữ dữ
            liệu quan trọng
          </Heading3>
          <Paragraph>
            Có rất rất nhiều file quan trọng và những thông tin mà mình có hiện
            đang được lưu trữ trên Notion, tất nhiên là mình vẫn dùng Dropbox
            làm nơi lưu trữ chính. Ví dụ, trong trường hợp này dưới đây là mình
            lưu trữ lại những thông tin quốc tế mà mình dùng. Mình đã ghi lại
            chi tiết và thậm chí tải luôn cả những file PDF chứng từ để lưu trữ
            dùng cho các mục đích khác nhau. Tất nhiên, có thể bạn sẽ lo lắng về
            vấn đề bảo mật, nhưng mình hiểu cách Notion bảo mật và thiết kế các
            block như thế nào, yên tâm là sẽ rất khó để bị tấn công hay các vấn
            đề liên quan đến bảo mật.
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-[100%] md:w-[90%]"
              src="/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-phongvn-img10-edited.jpg"
            />
          </div>
          <Paragraph>
            Dưới đây là một trang Notion theo dạng bảng mà mình dùng để làm
            việc, việc quản lý trở nên dễ dàng hơn rất nhiều và mình không cần
            nhiều ứng dụng khác.
          </Paragraph>
          <div className="grid grid-cols-2 md:flex gap-2">
            <div className="md:w-[40%]">
              <img
                src="/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-phongvn-img11-edited.jpg"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
            <div className="md:w-[60%]">
              <Paragraph>
                Một vài trang quan trọng trong cuộc sống của mình mà mình dùng
                Notion để quản lý. Và trong những trang này lại có những trang
                nhỏ hơn, và trong các trang nhỏ hơn đó lại có thêm rất nhiều
                trang nhỏ hơn nữa 🤣
              </Paragraph>
              <Paragraph>
                Và đó là cách mà mình dùng Notion để quản lý và lưu trữ những
                điều quan trọng trong cuộc sống của mình.
              </Paragraph>
            </div>
          </div>
          <Heading2 id="anchor3">3. Notion là tất cả mọi thứ</Heading2>
          <Paragraph>
            Bài viết về Notion của mình khá dài và luyên thuyên rồi. Hy vọng là
            cho bạn một cái nhìn tổng quan hơn về công cụ này. Tất nhiên, nhìn
            hơi khô khan vậy thôi chứ bạn có thể sáng tạo những trang Notion
            nhìn rất đẹp, mình thấy khá nhiều bạn thuộc GenZ sáng tạo ra những
            trang Notion nhìn đẹp kinh khủng. Bạn có thể search Notion Template
            trên Google để xem những trang sáng tạo nhất của mọi người khắp nơi
            trên thế giới.
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-[100%] md:w-[90%]"
              src="/static/images/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh/notion-la-gi-ung-dung-quan-trong-nhat-cua-minh-phongvn-img12-edited.jpg"
            />
          </div>
          <Paragraph>
            Tóm lại, với mình, Notion là tất cả mọi thứ. Và thật khó khăn nếu
            như không có Notion. Nếu bạn chưa thử, hãy thử một lần, nó có thể
            thay đổi cách bạn suy nghĩ và cách mà bạn tổ chức thông tin - kiến
            thức. Hãy tận hưởng sản phẩm sáng tạo của một start-up "unicorn".
          </Paragraph>
        </div>
        <EndPostSection telegramid="16">
          <TelegramComments datatelegramdiscussion="phongchannel/16" />
        </EndPostSection>
      </div>
    </Container>
  );
}
