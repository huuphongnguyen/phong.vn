import Container from "../../components/Container";
import Paragraph from "../../components/elements/block/Paragraph";
import TableOfContents from "../../components/elements/block/TableOfContents";
import Heading2 from "../../components/elements/block/Heading2";
import Heading3 from "../../components/elements/block/Heading3";
import CallOut from "../../components/elements/block/CallOut";
import EndPostSection from "../../components/structures/EndPostSection";
import TelegramComments from "../../components/elements/TelegramComments";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";
import BlogHeader from "../../components/structures/BlogHeader";

export default function Blog_minh_da_ung_tuyen_thanh_cong_Zalo_Product_Management_trainee_nhu_the_nao() {
  const seotitle = `Mình đã ứng tuyển thành công Zalo Product Management Trainee như thế nào?`;
  const seodescrip = `Mình đã ứng tuyển thành công Zalo Product Management Trainee như thế nào? Trong bài viết này mình sẽ ghi lại toàn bộ quá trình mình đã ứng tuyển và vượt qua những vòng thử thách để được nhận vào chương trình Zalo Product Management Trainee 2021.`;
  const seourl = `https://phong.vn/blog/minh-da-ung-tuyen-thanh-cong-zalo-product-management-trainee-nhu-the-nao`;
  const seopreviewimg =
    "/static/images/minh-da-ung-tuyen-thanh-cong-zalo-product-management-trainee-nhu-the-nao/minh-da-ung-tuyen-thanh-cong-zalo-product-management-trainee-nhu-the-nao-feature-img.png";
  const headerslug =
    "minh-da-ung-tuyen-thanh-cong-zalo-product-management-trainee-nhu-the-nao";
  const headerpublish = "2021-08-04";
  const headerreadingtime = "14";
  const headerfeatureimggif =
    "https://media.giphy.com/media/B150T0UlLdFMkTFv3H/giphy.gif";
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
            Bài viết này được viết ra với mục đích giúp mình lưu trữ lại điều
            tuyệt vời này và hy vọng giúp đỡ được những bạn có ý định hoặc muốn
            thử sức tham gia vào Zalo Product Management Trainee, tất nhiên
            không chỉ chương trình này mà còn rất rất nhiều chương trình dành
            cho Trainee khác của Zalo.
          </Paragraph>
          <TableOfContents>
            <li>
              <a href="#anchor1" className="hover:underline">
                1. Luyên thuyên
              </a>
            </li>
            <li className="pl-2">
              <ul>
                <li>
                  <a href="#anchor11" className="hover:underline">
                    1.1. Zalo Product Management Trainee Program là gì?
                  </a>
                </li>
                <li>
                  <a href="#anchor12" className="hover:underline">
                    1.2. Tại sao mình lại ứng tuyển vào chương trình này?
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#anchor2" className="hover:underline">
                2. Quá trình đăng ký tên miền .ETH của ENS
              </a>
            </li>
            <li className="pl-2">
              <ul>
                <li>
                  <a href="#anchor21" className="hover:underline">
                    2.1. Vòng 1: Nộp CV
                  </a>
                </li>
                <li>
                  <a href="#anchor22" className="hover:underline">
                    2.2. Vòng 2: Làm bài Research Assignment và thi 100 câu hỏi
                    trắc nghiệm
                  </a>
                </li>
                <li>
                  <a href="#anchor23" className="hover:underline">
                    2.3. Vòng 3: Phỏng vấn
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#anchor3" className="hover:underline">
                3. What's next?
              </a>
            </li>
          </TableOfContents>
          <Heading2 id="anchor1">1. Luyên thuyên</Heading2>
          <Paragraph>
            Trước khi đi vào những phần chính, mình muốn chia sẻ cảm giác khi
            ứng tuyển thành công vào chương trình này. Cảm giác thật sự lạ và có
            một chút gì đó khá vui. Còn gì tuyệt vời hơn được làm ở một trong
            những công ty tuyệt vời nhất ở Việt Nam đúng không 😄? Lần đầu tiên
            mình biết đến Zalo là khi mình đang học lớp 10, lúc ấy Zalo có đặt
            một banner quảng cáo ở trường mình để giới thiệu về ứng dụng nhắn
            tin OTT. Và đến thời điểm hiện tại, mình vẫn chưa tin được là có một
            ngày mình sẽ làm việc - cũng như học hỏi tại chính công ty tạo nên
            ứng dụng này. Zalo là ứng dụng mình dùng hằng ngày để giao tiếp, mẹ
            mình cũng sử dụng Zalo chính trong công việc và cuộc sống, thật sự
            khó tưởng tượng điều gì sẽ xảy ra nếu không có Zalo ở hiện tại.{" "}
          </Paragraph>
          <Paragraph>
            Một trong những điều mà mình, bản thân mình vẫn luôn tự hào là Việt
            Nam có một ứng dụng nhắn tin và mạng xã hội và được mọi người sử
            dụng. Mình chắc chắn là bạn, người đọc bài viết này cũng không muốn
            đất nước chúng ta phải sử dụng những ứng dụng nhắn tin của nước
            ngoài mà không có bất kỳ một local app nào. Đó chính là lí do mình
            cảm thấy thật sự tự hào, một chút sự lo lắng và hồi hộp khi chuẩn bị
            làm việc / học tập tại Zalo.
          </Paragraph>
          <Heading3 id="anchor11">
            1.1. Zalo Product Management Trainee Program là gì?
          </Heading3>
          <Paragraph>
            Theo mình tìm hiểu, Zalo Product Management Trainee Program là một
            hình thức mentorship được Zalo thiết kế đặc biệt để giúp đào tạo
            những sinh viên, những bạn mới ra trường trở thành những người làm
            sản phẩm / phát triển sản phẩm. Chương trình này sẽ kéo dài 6 tháng.
            Mình không biết hiện tại có các chương trình huấn luyện chuyên
            nghiệp nào khác ngoài Zalo PMT hay không nhưng đây là chương trình
            huấn luyện chuyên nghiệp tốt và duy nhất mình biết tính đến hiện tại
            ở Việt Nam.
          </Paragraph>
          <Paragraph>
            Một điểm mà mình thích ở chương trình này trong thời điểm ban đầu
            khi vừa mới biết đến là một lộ trình được thiết kế khá rõ ràng. Khi
            viết bài viết này, mình vẫn chưa bắt đầu công việc tại Zalo PMT nên
            chưa rõ cụ thể sẽ trải qua những gì trong suốt quá trình đó. Hy vọng
            là khi kết thúc 6 tháng, mình sẽ có cơ hội ghi lại những điều tuyệt
            vời của chương trình này.
          </Paragraph>
          <Heading3 id="anchor12">
            1.2. Tại sao mình lại ứng tuyển vào chương trình này?
          </Heading3>
          <Paragraph>
            Có khá nhiều lý do mình đã lựa chọn ứng tuyển vào chương trình Zalo
            Product Management Trainee Program từ cá nhân chủ quan đến hoàn cảnh
            khách quan.
          </Paragraph>
          <CallOut emoji="💬" bgcolor="bg-yellow-50 dark:bg-yellow-800">
            Bạn có thể bỏ qua phần dưới đây vì mình nói hơi chi tiết về cuộc
            sống mình trước thời điểm mình quyết định ứng tuyển vào Zalo PMT.
            Bạn có thể đọc tiếp phần bên dưới ***
          </CallOut>
          <Paragraph>
            Vào thời điểm mình quyết định lựa chọn ứng tuyển vào Zalo PMT, mình
            đã trải qua một giai đoạn có thể coi là không thật sự ổn trong mặt
            tâm lý và cuộc sống. Mình mất cân bằng mọi thứ từ cuộc sống và các
            mối quan hệ, bị chứng mất ngủ kéo dài và mình gần như kiệt quệ trong
            suốt 7 tháng. Có thể coi mình gần như đã bị trầm cảm nhẹ và
            overthinking quá nhiều.
          </Paragraph>
          <Paragraph>
            Quay trở lại tháng 11/2020, đó là một trong những thời điểm mà mình
            bắt đầu mất kiểm soát đi mọi thứ. Mình phải ngừng dự án BLVCK Saigon
            vì một vài lý do khách quan, có những sự việc không đáng xảy ra
            trong các mối quan hệ của mình và kết quả là mình đã bị mất đi mối
            quan hệ rất quan trọng đó (tất nhiên cốt lõi mọi vấn đề đều đến từ
            bản thân mình). Mình đã rời khỏi AX - không còn trực tiếp tham gia
            vào việc phát triển nữa, đó một hệ thống xưởng thêu mà mình làm
            co-founder (bạn có thể xem trong phần Project của website này). Về
            mặt cuộc sống và tâm lý, mình bị rối loạn và mất cân bằng đi mọi
            thứ, gần như tinh thần và thể chất mình kiệt quệ trong giai đoạn đó.
            Và rồi mình đi du lịch một mình, sống một cách có phần hơi bất cần
            và buông thả trong suốt thời gian ấy. Tất nhiên, mình không làm gì
            trong suốt 7 tháng ấy, mình đã nghĩ mình sẽ nghỉ hưu từ thời điểm đó
            🤣.
          </Paragraph>
          <Paragraph>
            Nhưng rồi, mình nhận ra là mình không muốn bản thân mình như vậy
            nữa. Khi có một khoảng thời gian đủ dài và đủ yên tỉnh để suy nghĩ,
            mình nhận ra mình cần phải quay trở lại xây dựng là bản thân mình.
            Mình chán một cuộc sống như vậy rồi, và mình nghĩ mình đã nghỉ ngơi
            đủ rồi.
          </Paragraph>
          <Paragraph>
            Thế là mình quyết định tìm một công việc gì đó để đi làm, để góp
            phần thay đổi đi thói quen hiện tại và giúp mình cởi mở hơn.
          </Paragraph>
          <Paragraph>***</Paragraph>
          <Paragraph>
            Đó là một ngày đẹp trời mà mình thấy được quảng cáo của Zalo PMT,
            bạn đầu mình cũng không thật sự quan tâm vì mình không thường chú
            tâm nhiều quảng cáo lắm. Sau đó thì có thấy một bài viết của anh
            Codeaholicguy "quảng cáo" về chương trình này, mình không nhớ là
            mình có thấy thêm anh Phạm Huy Hoàng (Tôi đi Code dạo) có đăng về
            chương trình này hay không nữa nhưng đến lần thứ 3 mình thấy trên
            News Feed mình mới thật sự đọc 😆 Sorry Zalo!!!.{" "}
          </Paragraph>
          <Paragraph>
            Và khi đọc chi tiết cũng như đó là cái gì, có ăn được hay không.
            Mình đã quyết định mình sẽ ứng tuyển chương trình này.{" "}
          </Paragraph>
          <Paragraph>
            Lý do ban đầu và quan trọng nhất là mình muốn học hỏi nghiêm túc về
            lĩnh vực Product Management sau khi tìm hiểu kỹ về nó. Đây giống như
            là điều cuối cùng mình còn thiếu để có thể thực hiện những điều mình
            muốn tốt nhất có thể. Mình từng đọc được đâu đó có nói rằng, ngoài
            vị trí CEO thì những vị trí trong lĩnh vực Product Management là
            điểm giao thoa giữa UX (Trải nghiệm người dùng), Business, và
            Technology. Mình đã từng có 1 năm học và tìm hiểu lĩnh vực UX/UI,
            mình cũng từng học và làm iOS Developer cho đến hiện tại mình có thể
            code Javascript với React (có thể coi mình cũng biết về Technology,
            website bạn đang đọc này do chính mình code đấy 😆 *khoe), và mình
            tốt nghiệp chuyên nghành Business Administration (HR) tại Đại học
            Greenwich Việt Nam. Khi đã trải qua cả 3 lĩnh vực, Product
            Management giống như là điểm giao thoa mình muốn dấn thân vào nhất,
            và muốn nghiêm túc theo đuổi nó nhất hiện tại.
          </Paragraph>
          <Paragraph>
            Lý do kế tiếp chính là để thay đổi đi con người mình, để đưa mình
            trở thành một người tốt hơn. Thoát khỏi những trạng thái tệ hại mà
            mình đã luyên thuyên ở phần trên. Khi có cơ hội gặp gỡ và trò
            chuyện, cùng làm việc với những người rất giỏi ngoài kia, mình nghĩ
            bản thân mình sẽ tốt hơn rất nhiều. Mặt khác, mình là một người
            hướng nội và có phần tiêu cực (có thời điểm đến mức toxic), và mình
            không muốn như vậy nữa.
          </Paragraph>
          <Paragraph>
            Và lý do cuối cùng thì khá thực tế, mình muốn có một công việc ổn
            định hơn trong tình hình dịch Covid-19 khá căng thẳng như hiện tại.
            Tìm được một công việc ở hiện tại thì rất là khó nên mình khá trân
            trọng điều hiện tại. Những gì mình đang làm trước đây đều đã có thể
            tự hoạt động, và bị ảnh hưởng khá nhiều bởi dịch.
          </Paragraph>
          <Paragraph>
            Đó là tất cả những lý do tại sao mình lại quyết định ứng tuyển Zalo
            Product Management Trainee 2021.
          </Paragraph>
          <Heading2 id="anchor2">2. Quá trình cần trải qua</Heading2>
          <Paragraph>
            Dưới đây là toàn bộ quá trình mà mình đã trải qua và bắt buộc đã
            trải qua trước khi được quyết định là có phù hợp cho Zalo Product
            Management Trainee hay không. Quá trình này đã kéo dài trong suốt
            gần 1 tháng. Mình không biết chính xác đã có bao nhiêu người tham
            gia ứng tuyển và bao nhiêu người đã thành công, nhưng quá trình
            tuyển chọn của Zalo PMT thật sự gắt gao. Khi bắt đầu, mình đã chuẩn
            bị tâm lý là sẽ bị từ chối bất kỳ lúc nào, bởi bản thân mình đã rất
            lâu rồi không tham gia phỏng vấn hay làm việc bên ngoài, mình đã tự
            phát triển doanh nghiệp và tự làm cá nhân rất lâu trước thời điểm
            này. Và rất rất nhiều người giỏi khác cũng đã ứng tuyển vào, tất
            nhiên tỉ lệ ứng tuyển thành công sẽ xuống thấp hơn khi có nhiều
            người ứng tuyển.{" "}
          </Paragraph>
          <Paragraph>
            Và với tâm lý đó, mình cứ tự nhủ là sẽ làm tốt nhất, thể hiện tốt
            nhất, bộc lộ hết khả năng và hiểu biết mà mình có thể. Phần còn lại
            là may mắn.
          </Paragraph>
          <Paragraph>
            Mình thích Nike và luôn làm theo slogan của họ "Just do it."
          </Paragraph>
          <Paragraph>
            Dưới đây là 3 vòng mà bất kỳ ai muốn tham gia chương trình Zalo PMT
            đều phải trải qua:
          </Paragraph>
          <Heading3 id="anchor21">2.1. Vòng 1: Nộp CV</Heading3>
          <Paragraph>
            Vòng này mình nghĩ là khá cơ bản bởi bạn cần phải có CV để ứng tuyển
            bất kỳ công việc nào. Mình đã làm lại CV cho bản thân mình, đã rất
            lâu rồi kể từ năm 2019 mình không làm CV. Bạn có thể tham khảo CV
            dưới đây mà mình đã dùng để ứng tuyển.
          </Paragraph>
          <div className="grid grid-cols-1 md:flex gap-2">
            <div className="md:w-[40%]">
              <img
                src="/static/images/minh-da-ung-tuyen-thanh-cong-zalo-product-management-trainee-nhu-the-nao/minh-da-ung-tuyen-thanh-cong-zalo-product-management-trainee-nhu-the-nao-img1.png"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
            <div className="md:w-[60%]">
              <Paragraph>
                Mình đã gửi bản PDF của CV này cho Zalo PMT và upload nó lên
                website của mình như một online link. Mình nghĩ điều này là cần
                thiết, nếu bạn có website thì cũng hãy nên làm như vậy.
              </Paragraph>
              <Paragraph>
                Đây là link CV trên website của mình:
                <br />
                <a
                  className="font-bold"
                  href="https://phong.vn/phong-zalo-cv-trainee.pdf"
                >
                  https://phong.vn/phong-zalo-cv-trainee.pdf
                </a>
              </Paragraph>
              <Paragraph>
                Mình đã cố gắng tối giản nhất có thể CV của mình với những thông
                tin cần thiết và tông màu mình lựa chọn cũng là mã màu của Zalo.
                Bản thân mình thường dùng tông màu chính của công ty mình ứng
                tuyển cho CV của mình. Đó là một sự tôn trọng mà mình muốn dành
                đến.
              </Paragraph>
              <Paragraph>
                Mình không rõ là CV có tác động nhiều đến quá trình ứng tuyển
                hay không nhưng là một người học HR và tốt nghiệp HR, mình nghĩ
                CV của mình đủ ấn tượng và đủ thông tin cần thiết cho quá trình
                skim CV rất nhanh của người duyệt.
              </Paragraph>
            </div>
          </div>
          <Paragraph>
            Một trong những điều mà mình làm là không sử dụng Template hay bất
            kỳ một dịch vụ tạo CV mẫu nào. Mình đã thiết kế CV này trong ứng
            dụng Sketch.com và thiết kế nó theo ý của mình. Tất nhiên, nếu dùng
            Icon trong CV thì mình cũng dẫn nguồn (tất nhiên là mình có license
            để làm vậy)
          </Paragraph>
          <Paragraph>
            Khi CV được chấp nhận và vượt qua vòng duyệt CV, mình đến vòng 2.
          </Paragraph>
          <Heading3 id="anchor22">
            2.2. Vòng 2: Làm bài Research Assignment và thi 100 câu hỏi trắc
            nghiệm
          </Heading3>
          <Paragraph>
            Trong vòng 2 này, mọi thứ sẽ trở nên căng thẳng hơn khi bạn sẽ phải
            làm một bài Research Assignment theo một đề bài do Zalo PMT Team đưa
            ra, và cả phần thi 100 câu hỏi trắc nghiệm trong vòng 60 phút về
            Logic, về Xã hội, và kỹ năng tiếng Anh.
          </Paragraph>
          <Paragraph>
            Đầu tiên, về bài Research Assignment, đề tài mình nhận được là mình
            phải lựa chọn một tính năng trong hện sinh thái Zalo như Zalo, Zing
            MP3, Laban Key... mà mình cảm thấy chưa hài lòng và muốn cải thiện.
            Đề bài này mình đã dự đoán trước nó sẽ xảy ra bởi đó là câu hỏi cơ
            bản nhất cho vị trí Product Management. Mình không rõ là chỉ có một
            đề bài duy nhất hay mỗi người sẽ có một đề bài khác nhau, nhưng với
            bản thân mình thì đề bài này khá là toàn diện. Bài Assignment này
            cũng không có những yêu cầu về số lượng chữ, hay ngôn ngữ, và mình
            đã làm một bài Research Assignment dài 4000 từ bằng tiếng Việt. Thực
            tế, với bản thân mình thì kiểu bài Research Assignment khá quen
            thuộc, mình học tại Đại học Greenwich Việt Nam và trong suốt 4 năm
            thì chương trình mình học không có thi, mà chỉ làm Assignment qua
            môn mà thôi. Do đó, khi làm bài Assignment này, mình cảm thấy thật
            sự hoài niệm 😕.
          </Paragraph>
          <Paragraph>
            Thời hạn 1 tuần là thời gian được phép để hoàn thành bài Research
            Assignment này, mình đã làm trong 3 ngày đầu và nộp bài sau đó.
          </Paragraph>
          <Paragraph>
            Dưới đây là bài Assignment mà mình đã làm, bạn có thể tham khảo dàn
            bài và cách mình đã làm một bài Research Assignment như thế nào. Tất
            nhiên, nếu bạn đang có ý định ứng tuyển, hãy làm bằng trải nghiệm cá
            nhân của bạn, mình tin là bạn sẽ làm tốt hơn mình rất rất nhiều.
          </Paragraph>
          <a
            className="font-bold"
            href="https://www.dropbox.com/s/r1tmtpedysq1elp/PMT_Research%20Assignment_Nguyen%20Huu%20Phong_210625.pdf?dl=0"
            target="_blank"
          >
            Xem trên Dropbox
          </a>
          <Paragraph>
            (Nội dung của file PDF trên thuộc quyền sở hữu của Nguyễn Hữu Phong,
            vui lòng không đăng tải lại hoặc sao chép dưới bất kỳ hình thức nào.
            Mọi lý do đều không được chấp thuận nếu không có sự đồng ý trước của
            chủ sở hữu. Chủ sở hữu sẽ không chịu bất kỳ trách nhiệm nào liên
            quan nếu người sử dụng gặp phải các vấn đề về mặt pháp lý hoặc liên
            quan khác.)
          </Paragraph>
          <Paragraph>
            Sau khi bạn nộp bài Research Assignment, bạn sẽ nhận được email để
            lựa chọn khung giờ và ngày thực hiện bài Zalo TEST (100 câu hỏi trắc
            nghiệm trong 60 phút). Do tình hình dịch căng thẳng nên bài thi này
            mình đã được thực hiện online thông qua website của Zalo. Nếu như
            không có dịch Covid-19, bài thi này sẽ được thực hiện trực tiếp tại
            Zalo HQ.{" "}
          </Paragraph>
          <Paragraph>
            Về bài thi Zalo TEST, 100 câu hỏi trắc nghiệm trong 60 phút bao gồm
            khá nhiều lĩnh vực trong vấn đề Xã hội, những câu hỏi Logic để kiểm
            tra tư duy, và những câu hỏi tiếng Anh để kiểm tra trình độ tiếng
            Anh. Tất nhiên, trong suốt quá trình làm bài, mình không được pháp
            sử dụng các thiết bị khác để tra cứu hay tính toán, mình đã tuân thủ
            đúng điều này mặc dù làm online mình có thể cheating 🤪 Mình đã sử
            dụng giấy và bút để tính toán.{" "}
          </Paragraph>
          <Paragraph>
            Và phần độ khó, mình thấy nó không khó lắm, mặc dù có những câu hỏi
            mình không hiểu lắm. Áp lực thời gian chính là vấn đề, vượt qua được
            áp lực thời gian là điều cần thiết.
          </Paragraph>
          <Paragraph>
            Sau khi thành công và vượt qua được 2 bài test này của vòng 2, mình
            đã tới vòng 3.
          </Paragraph>
          <CallOut emoji="🤣" bgcolor="bg-gray-50 dark:bg-gray-800">
            Có một tình huống khá vui là trong vòng này, sau khi làm xong thì
            mình nhận được tin nhắn tự động của Zalo Carreers thông báo mình đã
            bị từ chối vì không phù hợp. Mặc dù là cũng có cảm giác buồn, nhưng
            mình đã chuẩn bị tâm lý sẵn rồi nên mình đã nhắn tin cho chị hỗ trợ
            mình trong suốt quá trình ứng tuyển để thông báo là mình bị từ chối,
            cũng như gửi lời cảm ơn vì đã hỗ trợ. Và bạn biết không, đó là tin
            nhắn tự động bị lỗi và mình vẫn chưa có kết quả. Mình đúng kiểu "trở
            về từ cõi chớt" ấy. hahahah, nghĩ lại vẫn thấy vui. Nhiều cung bậc
            cảm xúc đã trải qua.
          </CallOut>
          <Heading3 id="anchor23">2.3. Vòng 3: Phỏng vấn</Heading3>
          <Paragraph>
            Đến với vòng phỏng vấn, vẫn như thường lệ, mình đã nhận được email
            lựa chọn khung giờ và ngày thực hiện phỏng vấn. Cũng giống như Zalo
            TEST, đáng ra là cuộc phỏng vấn này được thực hiện trực tiếp tại
            Zalo HQ, nhưng vì tình hình dịch Covid-19 vẫn quá phức tạp, mình đã
            được sắp xếp phỏng vấn thông qua Microsoft Teams.{" "}
          </Paragraph>
          <Paragraph>
            Cuộc phỏng vấn sẽ bao gồm 2 session với mỗi session kéo dài 1 tiếng.
            Những anh / chị làm Product Managers của Zalo sẽ trực tiếp phỏng vấn
            và rất nhiều anh / chị khác sẽ ở trong phòng và đánh giá.
          </Paragraph>
          <Paragraph>
            Cả 2 session, anh chị phỏng vấn đã hỏi mình rất rất nhiều câu hỏi
            liên quan đến những gì mình đã thể hiện trước đó như về chi tiết bài
            Research Assignment, về những lý do tại sao mình nghĩ như vậy. Ngoài
            ra, cũng có một vài câu hỏi liên quan đến website của mình do mình
            đã làm nổi bật yếu tố này. Và phân còn lại là những câu hỏi liên
            quan đế cá nhân mình, về cách mình ứng xử và trả lời như thế nào.
            Nhìn chung thì cuộc phỏng vấn khá là thoải mái, mình cảm nhận như
            vậy.
          </Paragraph>
          <Heading2 id="anchor3">3. What's next?</Heading2>
          <Paragraph>
            Và sau khi trải qua hết cả 3 vòng của quá trình ứng tuyển, mình đã
            có thời gian nghỉ ngơi 1 ngày trước khi nhận được một cuộc gọi từ
            anh / chị của Zalo PMT Team. Và mình đã thành công, mình đã được
            nhận. Lúc ấy, mình gần như bị đứng hình và cảm giác khá là bỡ ngỡ.
            Chắc là do bản thân của mình đã lâu rồi không đi phỏng vấn và ứng
            tuyển xin việc nên cảm xúc có phần hơi hỗn loạn.
          </Paragraph>
          <Paragraph>
            Sau khi nhận được cuộc gọi chúc mừng và nhận được email Offer, mọi
            thứ thật sự rất tuyệt vời.
          </Paragraph>
          <Paragraph>
            Và 6 tháng kế tiếp, mục tiêu của mình là sẽ học thật tốt, làm thật
            tốt chương trình này, và tất nhiên có thể chính thức trở thành một
            thành viên của Zalo Team.
          </Paragraph>
          <Paragraph>
            Đó là toàn bộ quá trình Mình đã ứng tuyển thành công Zalo Product
            Management Trainee như thế nào. Nếu bạn có ý định tham gia chương
            trình này, mình hy vọng là bài viết này sẽ giúp bạn tự tin - bình
            tĩnh - và có định hướng tốt hơn.
          </Paragraph>
          <Paragraph>
            Cảm ơn vì đã ở đây và đọc bài viết này của mình.
          </Paragraph>
        </div>
        <EndPostSection telegramid="17">
          <TelegramComments datatelegramdiscussion="phongchannel/17" />
        </EndPostSection>
        <script
          async
          src="https://telegram.org/js/telegram-widget.js?15"
          data-telegram-discussion="durov/126"
          data-comments-limit="5"
        ></script>
      </div>
    </Container>
  );
}
