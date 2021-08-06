import Container from "../../components/Container";
import Quote from "../../components/elements/block/Quote";
import Paragraph from "../../components/elements/block/Paragraph";
import Heading2 from "../../components/elements/block/Heading2";
import Heading3 from "../../components/elements/block/Heading3";
import Heading4 from "../../components/elements/block/Heading4";
import Heading5 from "../../components/elements/block/Heading5";
import BulletList from "../../components/elements/block/BulletList";
import TableOfContents from "../../components/elements/block/TableOfContents";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";
import TelegramComments from "../../components/elements/TelegramComments";
import EndPostSection from "../../components/structures/EndPostSection";
import BlogHeader from "../../components/structures/BlogHeader";

export default function Blog_case_study_qua_trinh_xay_dung_thuong_hieu_tai_cau_truc_Anh_Xuyen() {
  const seotitle = `Case Study: Quá trình xây dựng thương hiệu - tái cấu trúc Anh Xuyến`;
  const seodescrip = `Case Study: Quá trình tái cấu trúc – xây dựng thương hiệu cho Anh Xuyến , trong bài viết này mình sẽ nói về phần nào đó quá trình mình đã gần như làm lại mọi thứ tại đây. Đây chỉ là case study của mình, nó có thể đúng hoặc sai, nó cũng được hình thành từ kinh nghiệm và những gì mình hiểu.`;
  const seourl = `https://phong.vn/blog/case-study-qua-trinh-xay-dung-thuong-hieu-tai-cau-truc-anh-xuyen`;
  const seopreviewimg =
    " /static/images/case-study-qua-trinh-xay-dung-thuong-hieu-tai-cau-truc-anh-xuyen/case-study-qua-trinh-xay-dung-thuong-hieu-tai-cau-truc-anh-xuyen-feature-img.png";
  const headerslug =
    "case-study-qua-trinh-xay-dung-thuong-hieu-tai-cau-truc-anh-xuyen";
  const headerpublish = "2019-06-11";
  const headerreadingtime = "35";
  const headerfeatureimggif =
    "/static/images/case-study-qua-trinh-xay-dung-thuong-hieu-tai-cau-truc-anh-xuyen/case-study-qua-trinh-xay-dung-thuong-hieu-tai-cau-truc-anh-xuyen-feature-image-phongvn.gif";
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
          <Quote>
            Những gì đã đưa chúng ta đến đây, không thể đưa chúng ta đi xa thêm
            nữa. Phải thay đổi và đây là lúc làm điều đó.Mình đã nói điều này
            khi nói chuyện với những người tại Thêu vi tính Anh Xuyến dưới vai
            trò là Founder – Business Development Manager
          </Quote>
          <Paragraph>
            AX Computerized Embroidery – Thêu vi tính Anh Xuyến là một trong
            những project quan trọng nhất hiện tại của mình. Kể từ táng 11 năm
            2017, khi mình đến làm việc tại Thêu vi tính Anh Xuyến dưới vai trò
            là một thực tập sinh, mình đã cảm thấy bản thân mình thích và trở
            nên yêu lĩnh vực thêu này. Mặc dù công việc của mình tại đây không
            phải trực tiếp thêu, mình cũng muốn thử làm điều này nhưng chứng run
            tay khiến cho mình không thể xỏ kim 😆.
          </Paragraph>
          <Paragraph>
            Khi đến thực tập tại đây trong những ngày cuối tháng 11 năm 2017,
            mình đã đảm nhận rất nhiều việc và có nhiệm vụ đưa mọi thứ quay trở
            lại cuộc chơi khi các đối thủ đang dần mạnh lên và tiếp cận công
            nghệ tốt hơn. Lĩnh vực thêu mà Thêu vi tính Anh Xuyến đang làm nó
            cũng được mình đánh giá là nằm trong một thị trường nghách mà ở đó
            vẫn còn sơ khai về mặt public trên internet. Không chỉ về mặt bên
            ngoài, việc của mình tại đây còn là tái cấu trúc lại hoạt động và
            đưa doanh nghiệp này hoạt động hiệu quả hơn. Thậm chí mình còn đảm
            nhiệm luôn cả vai trò theo dõi và định hình cho văn hóa – nhân sự
            của doanh nghiệp. Một trong những nhiệm vụ quan trọng nhất đó là xây
            dựng lại thương hiệu để định hình trong tâm trí khách hàng. Một vài
            báo cáo mà mình nhận được khi làm việc trong những ngày đầu là có
            khá nhiều khách hàng hiện tại rất muốn giới thiệu với bạn bè nhưng
            họ không biết gọi Thêu vi tính Anh Xuyến là gì. Đó thật sự là một
            điều đáng báo động và mình phải làm việc để giải quuyết vấn đề này.
          </Paragraph>
          <Paragraph>
            Những gì mà mình đã – đang – và có thể sẽ làm tại Thêu vi tính Anh
            Xuyến có thể liệt kê vào những điều dưới đây. Mình chia vấn đề sang
            2 mảng là Vấn đề bên trong và Vấn đề bên ngoài – mình cần giải quyết
            chúng.
          </Paragraph>
          <TableOfContents>
            <li>
              <a href="#anchor1" className="hover:underline">
                1. Tổng quan
              </a>
            </li>
            <li>
              <a href="#anchor2" className="hover:underline">
                2. Các vấn đề cần phải giải quyết
              </a>
            </li>
            <li className="pl-2">
              <ul>
                <li>
                  <a href="#anchor21" className="hover:underline">
                    2.1. Vấn đề bên trong
                  </a>
                </li>
                <li className="pl-2">
                  <ul>
                    <li>
                      <a href="#anchor211" className="hover:underline">
                        2.1.1. Xây dựng thương hiệu và phát triển thương hiệu
                      </a>
                    </li>
                    <li>
                      <a href="#anchor212" className="hover:underline">
                        2.1.2. Đưa thương hiệu xuất hiện trên Internet
                      </a>
                    </li>
                    <li className="pl-2">
                      <ul>
                        <li>
                          <a href="#anchor2121" className="hover:underline">
                            2.1.2.1. Tạo website
                          </a>
                        </li>
                        <li>
                          <a href="#anchor2122" className="hover:underline">
                            2.1.2.2. Tạo social networks – phục vụ website
                          </a>
                        </li>
                        <li>
                          <a href="#anchor2123" className="hover:underline">
                            2.1.2.3. Google Adwords và Google Maps
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#anchor213" className="hover:underline">
                        2.1.3. Digital Marketing là tương lai
                      </a>
                    </li>
                    <li>
                      <a href="#anchor214" className="hover:underline">
                        2.1.4. Quan hệ khách hàng
                      </a>
                    </li>
                    <li>
                      <a href="#anchor215" className="hover:underline">
                        2.1.5. Tìm những đối tác – nguồn cung ứng tối ưu hơn
                      </a>
                    </li>
                    <li>
                      <a href="#anchor216" className="hover:underline">
                        2.1.6. Thu hút khách hàng và giữ chân khách hàng
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#anchor22" className="hover:underline">
                    2.2. Vấn đề bên ngoài
                  </a>
                </li>
                <li className="pl-2">
                  <ul>
                    <li>
                      <a href="#anchor221" className="hover:underline">
                        2.2.1. Xây dựng văn hóa – nguồn nhân sự
                      </a>
                    </li>
                    <li>
                      <a href="#anchor222" className="hover:underline">
                        2.2.2. Tái cấu trúc vận hành
                      </a>
                    </li>
                    <li>
                      <a href="#anchor223" className="hover:underline">
                        2.2.3. Mọi thứ cần chuyên nghiệp hơn
                      </a>
                    </li>
                    <li>
                      <a href="#anchor224" className="hover:underline">
                        2.2.4. Phân tích – thống kê chi tiết
                      </a>
                    </li>
                    <li>
                      <a href="#anchor225" className="hover:underline">
                        2.2.5. Thay đổi cơ cấu về giá
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="#anchor3" className="hover:underline">
                3. Đã đến lúc thay đổi
              </a>
            </li>
          </TableOfContents>
          <Heading2 id="anchor1">1. Tổng quan</Heading2>
          <Paragraph>Vấn đề bên ngoài</Paragraph>
          <BulletList>
            <li>
              <Paragraph>
                <strong>Xây dựng thương hiệu và phát triển thương hiệu</strong>:
                Điều này sẽ giải quyết vấn đề mà mình vừa nếu ở trên là có quá
                nhiều khách hàng muốn giới thiệu nhưng không biết rõ chính xác
                phải gọi như thế nào. Đôi khi xây dựng thương hiệu cũng là một
                điều bắt buộc vào thời điểm đó.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Đưa thương hiệu xuất hiện trên Internet</strong>: Điều
                này nghe có vẻ là khá cơ bản và hơi chậm chạp bởi năm 2017 là
                một thời điểm Internet đang quá phát triển tại Việt Nam. Bạn có
                thể hiểu 1 doanh nghiệp đã hoạt động 8 năm và đến năm 2017 mới
                có quyết định đưa doanh nghiệp xuất hiện trên Internet, nó thật
                sự nghiêm trọng.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Digital Marketing là tương lai</strong>: Digital
                marketing có rất nhiều lĩnh vực nhỏ khác nhau và rất sau rộng,
                tuy nhiên SEO (Search Engine Optimization) là chiến lược dài hạn
                mà mình cần xây dựng.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Quan hệ khách hàng</strong>: Điều này trước đây không có
                một quy chuẩn nhất định nào khiến cho khách hàng không có một
                cái nhìn tổng quan và có thể ghi nhớ được. Mình cần phải xây
                dựng một quy trình chuẩn cần có để người trực tiếp giao tiếp và
                trao đổi với khách hàng có thể chú ý hơn đến những điều mà chỉ
                có ở Thêu vi tính Anh Xuyến.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Tìm những đối tác – nguồn cung ứng tối ưu hơn</strong>:
                Một vấn đề mà mình phải đối mặt khi làm việc tại đây chính là
                việc có quá ít đối tác khiến cho trong những giai đoạn quá tải,
                Thêu vi tính Anh Xuyến không thể chịu đựng nổi (điều này giống
                như việc xây dựng cơ sở hạ tầng – khi một nguồn traffic quá lớn
                đổ vào thì phải có một hệ thống cân bằng tải đủ mạnh để scale hệ
                thống đảm bảo mọi thứ trơn tru). Mặt khác, việc có quá ít nguồn
                cung ứng là một trong những yếu tố khiến cho chi phí vận hành
                không để được tối ưu, việc tìm nguồn cung ứng trong lĩnh vực
                thêu vi tính cũng không phải dễ dàng và mình đã tìm – gặp ít
                nhất là 50 nguồn cung ứng khác nhau tính tới thời điểm hiện tại.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Thu hút khách hàng và giữ chân khách hàng</strong>: Đây
                là hai yếu tố có thể nói là quan trọng bậc nhất bởi khách hàng
                là người mang lại doanh thu cho doanh nghiệp. Thu hút khách hàng
                mới đã khó – giữ chân họ và khiến họ hài lòng lại càng khó hơn.
                Để làm được điều này đôi khi phải có một quá trình phù hợp được
                nghiên cứu và thảo luận rất kỹ. Mình đã làm việc với những người
                rất giỏi trong lĩnh vực thêu và xin ý kiến của họ trước khi
                thiết lập một quá trình đầy đủ cho Anh Xuyến.
              </Paragraph>
            </li>
          </BulletList>
          <Paragraph>Vấn đề bên trong</Paragraph>
          <BulletList>
            <li>
              <Paragraph>
                <strong>Xây dựng văn hóa – nguồn nhân sự</strong>: Việc xây dựng
                văn hóa và nhân sự tại Anh Xuyến nó cũng khá khác với những gì
                mình từng tiếp cận và làm việc bởi 50% nhân sự tại Anh Xuyến là
                nhân sự lao động phổ thông. Để tạo ra một môi trường trung hòa
                và hiệu quả cho 2 nhóm nhân sự này đôi khi là một thách thức với
                mình bởi mình không thực sự giỏi trong việc này. Mình đã nói
                chuyện rất nhiều với những người giỏi nhất mà mình biết để hiểu
                mình cần phải làm gì và phải làm gì để mọi thứ tốt hơn.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Tái cấu trúc vận hành</strong>: Điều này nghe có vẻ khá
                là nhiều việc nhưng với quy mô không quá khổng lồ nên mình đã
                tối giản đi những điều cần phải làm trong việc tái cấu trúc vận
                hành. Từ cách làm việc, quá trình làm việc, những điều mọi người
                cần làm, và cả những gì mà các quản lý trực tiếp cần phải làm để
                giúp mọi thứ vận hành trơn tru hơn.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Mọi thứ cần chuyên nghiệp hơn</strong>: Thiếu chuyên
                nghiệp và có phần hơi lạc hậu là điều mình nhận được khi bắt đầu
                làm việc tại Anh Xuyến. Một số lượng khách hàng đáng kể đã quay
                lưng khi cách làm việc bên trong của Anh Xuyến thiếu chuyên
                nghiệp ở những điểm nhỏ nhất. Hiện tại khách hàng chủ yếu của
                Anh Xuyến vẫn là khách hàng doanh nghiệp nên điều này khá đáng
                báo động.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Phân tích – thống kê chi tiết</strong>: Dữ liệu là “bản
                đồ” và để biết phải làm gì – điều đang làm có đúng không thì dữ
                liệu chính là thứ bản thân mình cần để đưa ra những quyết định
                đúng lúc và những thời điểm nhất định. Việc thống kê chi tiết và
                thu thập dữ liệu đôi khi hơi khó khăn và mình thậm chí đã phải
                chọn những phương pháp có phần “thủ công” để có dữ liệu. Những
                mọi việc đã ổn 😁
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                <strong>Thay đổi cơ cấu về giá</strong>: Cơ cấu về giá chính là
                thứ mình muốn thay đổi đầu tiên khi chi phí thêu lẻ cho khách
                hàng cá nhân với số lượng ít khá cao. Thỉnh thoảng chi phí này
                vượt cả giá trị sản phẩm khiến cho không ít khách hàng cảm thấy
                thất vọng. Việc thay đổi cơ cấu về giá chính là vấn đề mà Anh
                Xuyến cần tìm cách giải quyết sớm nhất.
              </Paragraph>
            </li>
          </BulletList>
          <Heading2 id="anchor2">2. Các vấn đề cần phải giải quyết</Heading2>
          <Paragraph>
            Trong phần này mình sẽ nói chi tiết hơn những gì mình đã làm và phần
            nào đó là cách mình làm để tìm ra giải pháp cho những vấn đề cần
            phải giải quyết.
          </Paragraph>
          <Heading3 id="anchor21">2.1. Vấn đề bên trong</Heading3>
          <Heading4 id="anchor211">
            2.1.1. Xây dựng thương hiệu và phát triển thương hiệu
          </Heading4>
          <Paragraph>
            Quá trình xây dựng thương hiệu và phát triển thương hiệu có thể nói
            là khá khó khăn bởi mình chưa từng có bất kỳ kinh nghiệm nào khi bắt
            đầu việc này. Lúc đấy, bản thân mình nghĩ những gì mình cần phải làm
            chính là tạo ra một cái tên ngắn gọn để tiếp cận những khách hàng
            hiện tại và cả những khách hàng trong tương lai.
          </Paragraph>
          <Paragraph>
            Đầu tiên, 2 người đồng sáng lập nên xưởng thêu vi tính này là Phan
            Tuấn Anh và Nguyễn Thị Xuyến, 1 người đóng vai trò rất lớn trong
            suốt quá trình thành lập và đi từ con số 0 – 1 người là người mà
            khách hàng biết đến và chịu trách nhiệm tất cả mọi mặt đang xảy ra
            trong xưởng thêu này. Cả hai người đều đóng một vai trò quuan trọng
            và mình quuyết định dùng tên của cả hai người cho thương hiệu. Tất
            nhiên, mình từng nghĩ đến việc chọn một cái tên nào đó hoàn toàn mới
            nhưng 1 yếu tố góp phần khiến bản thân mình phải chọn tên của 2
            người đồng sáng lập là 
            <strong>
              phần lớn khách hàng làm việc và nhớ tên Xuyến nhiều nhất
            </strong>
            . Vậy tại sao phải chọn một cái tên hoàn toàn mới? Đó là lý do mình
            chọn cái tên <strong>Anh Xuyến</strong> cho doanh nghiệp này.
          </Paragraph>
          <Paragraph>
            Trong lĩnh vực mà mình đang làm, thêu vi tính ở Việt Nam có thể coi
            là không quá phổ biến ít nhất là ở tên gọi. Thêu vi tính là cụm từ
            được dịch từ tên gốc “Computerized Embroidery” nên rất nhiều người
            dùng thường không nhớ hoặc biết. Một vài người bạn của mình khi được
            hỏi: Bạn biết những mẫu thêu trên balô hay trên áo từ đâu ra không?
            Họ đều chỉ nói là từ nghành thêu, và khi họ muốn thêu và search tìm
            nghành thêu thì nó lại ra lĩnh vực thêu tay. Chính vì điều này,
            nghành thêu ở Việt Nam vẫn còn tập trung nhiều vào thêu tay và thêu
            công nghiệp (thêu vi tính) vẫn dành cho phần lớn doanh nghiệp với số
            lượng khổng lồ.
          </Paragraph>
          <Paragraph>
            Do đó bước kế tiếp là đặt tên lĩnh vực kế bên tên thương hiệu, nó
            là: <strong>Thêu vi tính Anh Xuyến</strong>
          </Paragraph>
          <Paragraph>
            Tuy nhiên, mình vẫn chưa dừng lại ở đó, làm sao để cái tên này “bước
            ra khỏi đám đông” trên một Google có quá nhiều thương hiệu đang
            chung lĩnh vực Thêu vi tính. Mình quyết định tạo ra một ký tự viết
            tắt và đính nó phía sau. Chỉ một chi tiết nhỏ như vậy đủ để xuất
            hiện nổi bật khỏi 10 kết quả xuất hiện trên Google hay Google Maps.
          </Paragraph>
          <Paragraph>
            Tất cả gói lại thành 1 cái tên: 
            <strong>Thêu vi tính Anh Xuyến – AX</strong>
          </Paragraph>
          <Paragraph>
            Và đây là logo mà mình đã thiết kế cho doanh nghiệp này, nó do mình
            thiết kế luôn bởi trong giai đoạn này thì mình chẳng thể nào xin
            budget cho việc nhờ một công ty bên thứ 3 thiết kế cho toàn bộ.
          </Paragraph>
          <div className="w-full flex items-center justify-center">
            <div className="w-[200px] h-[200px] relative">
              <img
                src="/static/images/case-study-qua-trinh-xay-dung-thuong-hieu-tai-cau-truc-anh-xuyen/anh-xuyen-logo.png"
                className="object-cover absolute"
              />
            </div>
          </div>
          <Paragraph>
            Nhìn có vẻ hơi màu mè đúng hông, nhưng đó là những gì mình muốn,
            logo này thỏa mãn 2 điều là sự dễ nhớ – tác động nhanh và thể hiện
            đúng ý nghĩa mình muốn.
          </Paragraph>
          <Paragraph>
            Việc chuyển màu gradient chính là việc mình muốn Thêu vi tính Anh
            Xuyến – AX có thể tạo ra những mẫu thêu bằng chỉ mà về độ màu có thể
            chuyển giống như in, thêu luôn có những điểm hạn chế nhất định về
            màu sắc và chi tiết so với in nên ý nghĩa logo này mình muốn truyền
            tải rằng chúng tôi có thể tạo ra những mẫu thêu chất lượng – màu sắc
            – tỉ mỉ không thua kém gì những mẫu in.
          </Paragraph>
          <Paragraph>
            Logo cũng là chữ viết tắt của tên thương hiệu AX, chữ A được viết
            nhỏ hơn chữ X ở sau bởi chúng tôi muốn doanh nghiệp sẽ dần phát
            triển lớn hơn và lớn hơn nữa, đó cũng sẽ là đồ thị phát triển mà Anh
            Xuyến hướng đến – từ nhỏ cho đến lớn, 
            <strong>chữ A vững vàng khi nhỏ và chữ X vững vàng khi lớn</strong>
            . Font chữ mà mình dùng cho Logo này chính là Apple San Francisco –
            Font chữ đang xuất hiện trên tất cả những iPhone – iPad – Mac, việc
            font chữ này đã quá quen mắt với phần lớn khách hàng mỗi ngày cũng
            là một lợi thế khi font chữ này được dùng cho Logo.
          </Paragraph>
          <Paragraph>
            Vậy kế hoạch phát triển thương hiệu đó là gì? Bản thân mình đã đặt
            ra câu hỏi này cho chính bản thân mình. Mình chia giai đoạn phát
            triển thương hiệu này sang 3 giai đoạn chính là 
            <strong>Sơ Khai – Ổn Định – Nâng Cao</strong>.
          </Paragraph>
          <Paragraph>
            Trong giai đoạn Sơ Khai, mình sẽ tập trung định hình thương hiệu này
            và tiếp cận được nhiều khách hàng nhất trên Internet – tại chính trụ
            sở. Ở giai đoạn sơ khai này có thể nói chỉ để Giới thiệu với mọi
            người rằng: Chúng tôi đã có một thương hiệu nhất định là Thêu vi
            tính Anh Xuyến – AX, đây sẽ là tên của doanh nghiệp chúng tôi và
            chúng tôi làm tất cả để phát triển nó. Tuy nhiên, trong giai đoạn sơ
            khai này, chi phí Marketing sẽ được giảm ở mức tối thiểu và tập
            trung nhiều vào SEO hơn (ở phương diện online) và phủ thương hiệu
            trên các ấn phẩm như Hóa đơn / Card / Banner (ở phương diện
            offline).
          </Paragraph>
          <Paragraph>
            Kế tiếp, trong giai đoạn Ổn định, ở giai đoạn này, những điều liên
            quan đến thương hiệu sẽ là tạo một cái nhìn thiện cảm nhất đối với
            những khách hàng thường xuyên, những người đã biết đến cái tên của
            Anh Xuyến và chất lượng dịch vụ sẽ là yếu tố định hình cho thương
            hiệu. Đối với những khách hàng mới và chưa thật sự để ý nhiều đến
            thương hiệu, những phương pháp lấy feedbacks khách hàng cũ để định
            hình cho khách hàng mới là rất quan trọng. Thêu vi tính cũng là một
            lĩnh vực đặc thù mà khách hàng mới (tính trên phương diện khách hàng
            doanh nghiệp) thường biết nhau qua những nhận xét của các doanh
            nghiệp khác. Bản thân mình từng không nghĩ điều này xảy ra nhưng khi
            thử tin và có chiến lược tập trung vào việc này thì nó có thể coi là
            Work.
          </Paragraph>
          <Paragraph>
            Giai đoạn thứ 3 và kéo dài trước khi có những thay đổi sắp đến là
            giai đoạn Nâng cao, ở giai đoạn này thì bản thân mình đề xuất tuyển
            dụng những người thực sự giỏi nhất và chuyên cho lĩnh vực này để tối
            ưu hóa ý tưởng của mình. Thực tế, bản thân mình không mạnh về thương
            hiệu nên những gì mình có thể làm tốt nhất đều sẽ được xây dựng ở 2
            giai đoạn trước đó, đến giai đoạn nâng cao thì có được một người
            thật sự giỏi về vận hành vẫn là một lựa chọn tối ưu hơn. Tính đến
            thời điểm hiện tại thì Thêu vi tính Anh Xuyến đã đến tiền giai đoạn
            này, mặc dù còn một khoản khá xa những mình vẫn đang cố gắng chuẩn
            bị cho nó.
          </Paragraph>
          <Heading4 id="anchor212">
            2.1.2. Đưa thương hiệu xuất hiện trên Internet
          </Heading4>
          <Paragraph>
            Một trong những điều khó khăn nhất của Anh Xuyến hiện tại chính là
            việc để những đối thủ trong cùng lĩnh vực Thêu bỏ xa trên mạng
            Internet. Trong một thời đại mà Internet phát triển như hiện nay thì
            không xuất hiện trên mạng là một điều gì đó không thể chấp nhận được
            – đặc biệt đối với một doanh nghiệp mà muốn phát triển lớn hơn.
          </Paragraph>
          <Paragraph>
            Điều đầu tiên mà mình làm chính là Đăng ký Google Business, tất
            nhiên rồi và đó là điều cần phải làm bởi phải định danh trên Google
            thì doanh nghiệp mới có thể nghĩ đến những chuyện xa hơn. Một kế
            hoạch về SEO và Google Ads đã được mình đưa ra và thảo luận với
            những người tại Anh Xuyến trong suốt 2 tuần chờ xác nhận của Google
            Business (do mình chưa từng lần nào xác nhận nên Google bắt buộc
            mình phải chờ 2 tuần nhận thư xác nhận, một điều khá tốt trong giai
            đoạn đầu còn mới mẻ – hiện tại thì mình đã trở thành một user uy tín
            của Google nên việc tạo profile Google Business cũng không còn phải
            chờ nữa. Những vấn đề về chi phí – những vấn đề cần phải chuẩn bị về
            mặt khách hàng / doanh nghiệp / cách hoạt động sau khi đã public
            trên Internet đã được mình đưa ra và hướng dẫn những chủ doanh
            nghiệp có phần không rành về công nghệ, ít nhất cảm thấy may mắn khi
            mình bắt đầu trong một thị trường ngách.
          </Paragraph>
          <Paragraph>
            Sau khi đã xác nhận Google Business và doanh nghiệp chính thức xuất
            hiện trên Google, một điều tưởng chừng khá đơn giản nhưng đây có thể
            coi là bước đầu tiên của việc thống trị phần nào những từ khóa quan
            trọng của lĩnh vực này. 😁Nói chứ trong Top 5 thôi, đủ để thu hút
            một lượng khách hàng khá là đáng kể.
          </Paragraph>
          <Paragraph>
            Những gì mình đã làm trên Internet trong giai đoạn đó:
          </Paragraph>
          <Heading5 id="anchor2121">2.1.2.1. Tạo website</Heading5>
          <Paragraph>
            Tất nhiên rồi, đây được coi là “điều” digital quan trọng nhất của
            Thêu vi tính Anh Xuyến ở thời điểm đó và cũng là hiện tại. Trang web
            có địa chỉ tên miền là <strong>TheuViTinhAnhXuyen.com</strong>, nghe
            có vẻ hơi dài nhưng thật sự nó hiệu quả bởi bao gồm gần như tên
            doanh nghiệp và rất tốt cho cả SEO lẫn “đọc” nó cho khách hàng và dễ
            nhớ. Mình từng nghĩ đến những tên miền khủng như TheuViTinh.com,
            TheuViTinh.vn,… tuy nhiên những gì mà mình nghĩ nó không được hiệu
            quả lắm bởi những tên miền dạng này do quá chung chung và phần nào
            không giúp nhiều cho việc định hướng thương hiệu (😅thật ra những
            tên miền đó bị mua hết rồi, không mình cũng mua – mua để redirect
            thôi chứ mình cũng không xài đâu).
          </Paragraph>
          <Paragraph>
            Lúc này, việc lựa chọn trở nên khó khăn hơn mình có 2 lựa chọn quan
            trọng:
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>
                Tự code: [Lợi ích ] Sẽ rất tốt nếu tương lai nó phát triển mạnh
                mẽ hơn, nắm rõ được mọi thứ trong website và có thể tự do điều
                chỉnh bất kỳ điều gì mình thích. Giảm chi phí rất nhiều nếu như
                mình có thể tối ưu tốt trang web và thiết kế hệ thống đủ mạnh.
                [Bất lợi] Tốn nhiều thời gian và công sức của mình do mình chưa
                có budget đủ cho việc tuyển dụng lập trình viên làm điều này.
                Thật sự chưa cần thiết trong giai đoạn đầu bởi điều mình cần làm
                hiện tại là rất nhiều mặt khác và mình không thể tập trung nhiều
                vào việc này. Sau này, việc xây dựng một hệ thống lớn hơn lại là
                một câu chuyện khác và sẽ khó thực hiện chuyển đổi hơn.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Sử dụng nền tảng có sẵn. [Lợi ích] Nhanh chóng, không lo lắng
                quá nhiều về hệ thống hay lo sợ trang web sẽ bị tấn công, không
                quan tâm là cần code những gì tốt nhất – kéo thả là chính. Mình
                có thể làm tốt nhất và tối ưu nhất (😂 mình từng sử dụng qua gần
                hết những nền tảng có sẵn trong việc tạo website nên kinh nghiệm
                đầy mình luôn). [Bất lợi] Như đã nói sẽ rất khó thêm nhiều chức
                năng tự có bởi dù gì nó cũng không thể can thiệp sâu như tự
                code. Chi phí ban đầu có phần cao hơn so với những giá trị có
                được (so với việc tự code).
              </Paragraph>
            </li>
          </BulletList>
          <Paragraph>
            Và quyết định cuối cùng là Sử dụng một nền tảng có sẵn.
          </Paragraph>
          <Paragraph>
            Một quyết định có thể nói là mình đã cân nhắc khá kỹ bởi thật sự cần
            phải chính xác và không được quay lại, mọi quyết định lúc này nếu
            sai lầm sẽ được tính bằng tiền mặt.
          </Paragraph>
          <Paragraph>
            Mình đã chọn nền tảng phát triển website có thể coi là phổ biến nhất
            thời điểm hiện tại là WordPress và nó là WordPress.com. Tại sao là
            WordPress.com mà không phải những nền tảng khác? Bởi mình hiểu sức
            mạnh của WordPress mang lại và những gì mà nó có thể giúp mình can
            thiệp sâu và hiệu quả vào SEO. Điểm Bonus là WordPress.com rất hiểu
            luậ chơi của Google, họ giúp cho mình tối ưu SEO rất tốt và nhanh
            chóng khắc phục khi Google cập nhật thuật toán, trong suốt 2 năm
            mình dùng WordPress.com thì chưa bao giờ Google đổi thuật toán khiến
            mình tuột hạng cả 😄 thật đó. Bạn biết khi Google ra AMP (một hướng
            đi mới giúp web load nhanh hơn trên di động và Google đã nói sẽ ưu
            tiên trang web có AMP trên kết quả tìm kiếm, chỉ vài ngày sau
            WordPress.com đã tối ưu cho theme của mình hoàn hảo với Google AMP
            và bật sẵn cho mình luôn, điều mà mình theo dõi là trong tất cả
            những đối thủ của mình – chỉ có mình là bật AMP).
          </Paragraph>
          <Paragraph>
            Khi thiết kế trang web mình luôn đặt ra 2 điều mà bản thân mình phải
            tuân thủ về UX/UI: Đơn giản và đi thẳng vào lợi ích của khách hàng.
            Cả 2 điều này luôn được tuân thủ trong cách thiết kế và cả cách mình
            viết Content SEO cho trang web, bạn có thể xem trang web tại đây: 
            <a href="https://theuvitinhanhxuyen.com/" target="_blank">
              https://theuvitinhanhxuyen.com/
            </a>
          </Paragraph>
          <Paragraph>
            Tất nhiên, các kỹ thuật SEO mình sẽ không nói chi tiết trong bài
            viết này bởi mình cũng không quá giỏi về SEO hay là một người chuyên
            làm về lĩnh vực này. Tuy nhiên, mình sẽ có một bài viết những gì
            mình làm để tối ưu SEO cho các trang web mà mình đang có từ việc
            nghiên cứu từ khóa, viết bài, tối ưu ảnh, bla.bla. Rất nhiều mặt
            khác.
          </Paragraph>
          <Heading5 id="anchor2122">
            2.1.2.2. Tạo social networks – phục vụ website
          </Heading5>
          <Paragraph>
            Tạo social networks – nhưng tại sao là phục vụ website mà không phải
            khách hàng? Đó có lẽ là những điều mà nếu bạn đọc bạn có thể sẽ thắc
            mắc. Thật sự mình cũng muốn tạo các profile social để giúp khách
            hàng, tuy nhiên như mình đã nói là mình đang làm việc trong một thị
            trường nghách nên khách hàng cũng không thật sự dùng mạng xã hội quá
            nhiều cho lĩnh vực thêu vi tính (tất nhiên mình đang làm rất nhiều
            thứ để thay đổi điều này cho cả lĩnh vực này, nghe lớn lao thế chứ
            mình chỉ biết cố gắng thôi). Quay trở lại, trong SEO thì các tài
            khoản mạng xã hội có chứa tên miền phần nào là điều bắt buộc bởi khi
            đó Google sẽ hiểu rằng bạn đang nghiêm túc với chính project của
            mình. Đây là luật chơi của Google và mình phải tuân theo. Những mạng
            xã hội mà mình tham gia là những mạng xã hội khá phổ biến và nó thật
            sự cần thiết đặc biệt trong việc “phủ” Google search của mình. Những
            mạng xã hội mà Thêu vi tính Anh Xuyến xuất hiện là:
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>Facebook</Paragraph>
            </li>
            <li>
              <Paragraph>Instagram</Paragraph>
            </li>
            <li>
              <Paragraph>Twitter</Paragraph>
            </li>
            <li>
              <Paragraph>Pinterest</Paragraph>
            </li>
            <li>
              <Paragraph>Linkedin</Paragraph>
            </li>
            <li>
              <Paragraph>Youtube</Paragraph>
            </li>
            <li>
              <Paragraph>Flickr</Paragraph>
            </li>
            <li>
              <Paragraph>Zalo</Paragraph>
            </li>
            <li>
              <Paragraph>YellowPage</Paragraph>
            </li>
          </BulletList>
          <Paragraph>
            Thật ra là còn nhiều nữa những mình không tập trung phát triển những
            nền tảng đó và dần cũng quên luôn. Những nền tảng này mình thường
            upload những gì mà Thêu vi tính Anh Xuyến đã làm được như mẫu thêu,
            sản phẩm thêu,… Mục đích chính là để đi backlink ngược lại cho
            website chính đẩy SEO cho website chính, cũng như phủ kết quả Google
            Image.
          </Paragraph>
          <Heading5 id="anchor2123">
            2.1.2.3. Google Adwords và Google Maps
          </Heading5>
          <Paragraph>
            Thật sự mà nói trong giai đoạn đầu với một website quá mới thì việc
            tối ưu SEO cũng không thực sự hiểu quả mà mình cần tạo ra những động
            thái cho Google thấy là mình đang nghiêm túc với trang web này và
            những gì mình làm là vì doanh nghiệp chứ không phải spam. Và mình
            dùng chính Google Adwords để cho Google thấy điều đó, giai đoạn chạy
            adwords là mình tự custom theo kinh nghiệm của mình nên chi phí khá
            thấp vào khoảng 600.000VNĐ cho 3 tuần và độ hiệu quả thì theo đánh
            giá của mình là 6/10. Việc chi tiết mình sẽ không thể mô tả trong
            bài viết này bởi nó khá là dài và bạn biết là nó cần nhiều ảnh thế
            nào rồi, mình có kinh nghiệm và Google Adwords sẽ là một trong những
            chủ đề bài viết mà mình thêm vào To-do list.
          </Paragraph>
          <Paragraph>
            Google Maps thật sự là quan trọng, nó thật sự quan trọng đối với
            doanh nghiệp nội địa và bạn không nghĩ là nó miễn phí đâu. Nó mang
            lại một lượng traffic đáng kể và nếu bạn tối ưu tốt thì search kiểu
            nào trên Google Maps liên quan đến lĩnh vực bạn đang hoạt động thì
            bạn sẽ xuất hiện đầu tiên. Nếu như bạn đang có Google Maps cho doanh
            nghiệp, hãy tích cực chia sẻ hình ảnh mà bạn có lên Google Maps hay
            Google Business – bạn sẽ hiểu tại sao mình nói nó khá hiệu quả mà
            còn miễn phí.
          </Paragraph>
          <Heading4 id="anchor213">
            2.1.3. Digital Marketing là tương lai
          </Heading4>
          <Paragraph>
            Những gì mình đã làm cho Thêu vi tính Anh Xuyến thật ra chưa là gì
            nhiều so với những gì một doanh nghiệp cần phải làm trên Internet.
            Mình đã có toàn bộ kế hoạch cho những bước đi xa hơn nhưng vẫn chưa
            triển khai được bởi thị trường mình đang làm việc là một thị trường
            nghách và nó có phần phát triển hơi chậm trong mảnh Internet (mình
            chỉ đánh giá ở Việt Nam thôi bởi ở các thị trường châu Âu và châu Mỹ
            thì lĩnh vực thêu đã phát triển rất rất mạnh trên Internet từ những
            website đơn lẻ cho đến những nền tảng khổng lồ). Digital Marketing
            vẫn sẽ là tương lai cho tất cả những doanh nghiệp vừa và nhỏ cho đến
            rất nhỏ. Mình luôn quan sát từng ngày và có những điều chỉnh hợp lý
            cho các kế hoạch phát triển doanh nghiệp này, mình yêu nó và nó là
            điều đặc biệt trong cuộc sống của mình.
          </Paragraph>
          <Paragraph>
            Nói về Digital Marketing thì nó rất rộng và rất nhiều mảng khác
            nhau. Bản thân mình cũng chưa thực sự gọi là hiểu biết rộng và mình
            vẫn đang học từng ngày. Tất nhiên, trong những giai đoạn quan trọng
            và cần thiết thì mình sẽ tuyển nhân sự làm điều này. Đôi khi tự bản
            thân làm quá nhiều cũng không hiệu quả, mặc dù nó tiết kiệm chi phí
            đáng kể đấy.
          </Paragraph>
          <Paragraph>
            Hiện tại, điều quan trọng nhất chính là Google và mình phải điều
            chỉnh website theo đúng những gì Google thay đổi. Phải hiểu luật
            chơi của Google đưa ra và có những hành động đúng đắn để bám trụ lâu
            nhất và cao nhất trên kết quả tìm kiếm. Vào thời điểm này thì 90%
            khách hàng của Thêu vi tính Anh Xuyến đến từ Google Search nên SEO
            luôn được đặt lên hàng đầu và mình hướng khách hàng nhiều hơn vào 3
            điểm: Dẫn đường, nhắn tin, gọi trực tiếp. Những hình thức khác của
            Digital Marketing vẫn chưa thể áp dụng do quy mô và hành vi khách
            hàng còn quá ít để triển khai. Mặc dù không triển khai nhưng kế
            hoạch thì vẫn phải luôn xây dựng và điều chỉnh thường xuyên bởi
            “chưa triển khai” và “không triển khai” là 2 điều hoàn toàn khác
            nhau.
          </Paragraph>
          <Heading4 id="anchor214">2.1.4. Quan hệ khách hàng</Heading4>
          <Paragraph>
            Trước đây và hiện tại, quan hệ khách hàng được đảm nhận bởi một
            co-founder khác là Nguyễn Thị Xuyến (đó cũng là mẹ của mình), và
            khách hàng hiện tại cũng thường có xu hướng thích làm việc với mẹ
            mình hơn phần lớn họ đều là đối tác lâu năm và quen với cách làm
            việc ấy. Tuy nhiên, điểm quan trọng là quá trình này không còn thực
            sự hiệu quả đối với nhóm khách hàng mới, đặc biệt là khác hàng doanh
            nghiệp. Chính vì điều này mà mình cần phải xây dựng – thảo luận – và
            đưa ra một quy trình ổn hơn để có thể làm việc với nhóm khách hàng
            doanh nghiệp mới này.
          </Paragraph>
          <Paragraph>
            Bản thân mình cũng thường xuyên phải làm việc với nhóm khách hàng
            này, tuy nhiên mình không muốn đảm nhận quá nhiều việc và đôi khi nó
            sẽ kéo cả team đi xuống. Chính vì lý do đấy mà mình sẽ chịu trách
            nhiệm xây dựng quá trình quan hệ khách hàng từ lúc deal giá – thực
            hiện – sau khi thực hiện – giữ chân khác hàng – và hỗ trợ khách
            hàng. Quá trình này nhìn chung khá dài và trong từng giai đoạn sẽ có
            những điểm nhỏ cần phải lưu ý để nó tốt hơn. Thỉnh thoảng có những
            điểm mà khiến cho Anh Xuyến bị ép deal hoặc không thực sự làm tốt,
            mình và những người trong team luôn cải thiện điều này hằng ngày và
            nó quan trọng không kém gì những mảng khác.
          </Paragraph>
          <Paragraph>
            Có thể trong tương lai, mình cần một vài nhân sự đảm nhiệm vị trí
            này, hiện tại thì mình và team hiện tại vẫn còn kiểm soát được tình
            hình.
          </Paragraph>
          <Paragraph>
            Trong Quan hệ khách hàng, hiện tại Anh Xuyến chia làm 4 nhóm khách
            hàng nhỏ trong 2 nhóm khách hàng là Doanh nghiệp và Cá Nhân:
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>Khách hàng thân thiết – lâu năm</Paragraph>
            </li>
            <li>
              <Paragraph>Khách hàng mới</Paragraph>
            </li>
            <li>
              <Paragraph>
                Khách hàng tiềm năng: Là những khách hàng mới nhưng có thể trở
                thành đối tác lâu dài.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Khách hàng Master: Nhóm khách hàng này thường là những doanh
                nghiệp lớn và có thương hiệu, nhưng doanh nghiệp này chủ yếu đến
                từ các nước mà Anh Xuyến đã làm việc như Thái Lan, Hàn Quốc,
                Nhật Bản.
              </Paragraph>
            </li>
          </BulletList>
          <Paragraph>
            Mỗi nhóm khách hàng nhỏ sẽ có những chiến lược và quy trình nhất
            định trong Quan hệ khách hàng để thu hút nhiều hơn và giữ chân họ.
            Sự khác nhau đặc thù giữa Doanh nghiệp và Cá nhân cũng là vấn đề mà
            nhóm của mình đang research mỗi ngày để giải quyết hiệu quả những
            điều tồn đọng.
          </Paragraph>
          <Heading4 id="anchor215">
            2.1.5. Tìm những đối tác – nguồn cung ứng tối ưu hơn
          </Heading4>
          <Paragraph>
            Khi mình đến làm việc tại Anh Xuyến, một vấn đề khác mà mình phải
            giải quyết chính là việc đối tác và nguồn cung ứng chưa tối ưu khiến
            cho trong những khoảng thời gian đòi hỏi năng suất cao, Anh Xuyến
            thường xuyên rơi vào tình trạng rối và không đảm bảo được sự trơn
            tru trong cách vận hành.
          </Paragraph>
          <Paragraph>
            Tại Anh Xuyến, đối tác trong cùng lĩnh vực là một trong những yếu tố
            quan trọng bởi cách mình xây dựng Anh Xuyến không hẳn là cạnh tranh
            với các đối thủ khác mà là xây dựng một mạng lưới nhất định để giảm
            thiểu áp lực cho chính Anh Xuyến. Tất nhiên, không có gì là vĩnh cữu
            và điều này đi khi phần nào khá nhạy cảm. Trong giai đoạn hiện tại,
            đối tác chính là điều mà Anh Xuyến cần nhưng đến những giai đoạn sắp
            tới đây thì có thể mình sẽ chuyển hướng mô hình này. Có khá nhiều
            vấn đề đang xảy ra trong mạng lưới đối tác mà team Anh Xuyến đang
            xây dựng từ những ngày đầu.
          </Paragraph>
          <Paragraph>
            Về nguồn cung ứng vật tư, hiện tại việc tập trung vào 1 nguồn cung
            ứng cho từng mảng nhỏ trong Anh Xuyến là khá nguy hiểm bởi vấn đề về
            giá và trường hợp xấu đã có biểu hiện xảy ra trong vòng 2 năm trước
            khi mình đến. Thêu vi tính là một lĩnh vực đòi hỏi rất nhiều loại
            vật tư trong việc gia công thêu và cả nguồn cung ứng liên quan máy
            thêu, việc xây dựng một chuỗi cung ứng mở cho Anh Xuyến là cần
            thiết. Bản thân Anh Xuyến cũng đang là một mắc xích quan trọng trong
            một chuỗi cung ứng lớn hơn, mình không tiện đề cập trong Case Study
            này.
          </Paragraph>
          <Paragraph>
            Tất nhiên, trong 2 năm qua, mạng lưới đối tác và chuỗi cung ứng của
            Anh Xuyến đã được cải thiện tốt hơn rất nhiều so với trước đây và
            team của mình vẫn đang có những bước kế tiếp trong vấn đề này.
          </Paragraph>
          <Heading4 id="anchor216">
            2.1.6. Thu hút khách hàng và giữ chân khách hàng
          </Heading4>
          <Paragraph>
            Thu hút khách hàng trong lĩnh vực Thêu vi tính có phần khác biệt hơn
            so với việc thu hút khách hàng của các lĩnh vực dịch vụ khác bởi
            phần lớn khác hàng mới của Anh Xuyến đến từ mạng lưới giới thiệu
            giữa các đối tác với nhau. Khách hàng mới mà mình muốn đề cập và
            hướng đến thường là khách hàng doanh nghiệp, khách hàng cá nhân thì
            còn nhiều bất cập bởi Anh Xuyến được xây dựng nghiên về doanh nghiệp
            nhiều hơn, tức nhiên khách hàng cá nhân là mảng mà mình không bỏ qua
            và đang có 1 project nội bộ đang thực hiện để giúp Anh Xuyến tiếp
            cận khách hàng cá nhân tốt hơn, dễ dàng hơn và hỗ trợ tốt hơn.
          </Paragraph>
          <Paragraph>
            Giữ chân khách hàng là một vấn đề mà mọi doanh nghiệp muốn và có
            những kế hoạch nhất định để giữ chân khách hàng lựa chọn lại càng
            lâu càng tốt – càng nhiều càng tốt. Anh Xuyến cũng được mình xây
            dựng một bảng kế hoạch và chiến lược giúp cho Anh Xuyến phần nào
            “khách biệt và tạo dấu ấn” so với những doanh nghiệp khác trong lĩnh
            vực thêu vi tính. Bảng kế hoạch giải quyết các vấn đề trong Giữ chân
            khách hàng của Anh Xuyến sẽ xoay quanh 3 yếu tố chính:
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>
                Lợi ích của khách hàng – Key Point trong lần tiếp xúc ban đầu
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Tiện lợi – Thông tin nhận được – Nhanh chóng trong giai đoạn
                thực hiện
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Breaking Point về đơn giá – Hỗ trợ tư vấn trong giai đoạn hoàn
                thành
              </Paragraph>
            </li>
          </BulletList>
          <Paragraph>
            3 yêu tố này luôn được tập trung và xoay quanh khi Anh Xuyến thực
            hiện các chiến lược giữ chân khác hàng, đặc biệt là nhóm khách hàng
            Doanh Nghiệp và một phần nhỏ Khách hàng Cá nhân tiềm năng. 3 Yếu tố
            này do bản thân mình nghiên cứu và đọc sách, kèm theo kinh nghiệm từ
            những người rất giỏi trong lĩnh vực này mà xây dựng nên. Mình đã
            test và sử dụng nó trong thời gian rất dài và may mắn là nó hiệu
            quả, tất nhiên mình vẫn luôn điều chỉnh điều này để nó phù hợp trong
            từng giai đoạn.
          </Paragraph>
          <Heading3 id="anchor22">2.2. Vấn đề bên ngoài</Heading3>
          <Paragraph>
            Trong phần này, mình sẽ nói rõ hơn về những vấn đề và cách giải
            quyết cũng như hướng giải quyết mà mình đã thực hiện – đang thực
            hiện – và có thể sẽ thực hiện tại Anh Xuyến, những vấn đề diễn ra
            sâu bên trong nội bộ và nó thường không biểu hiện rõ ra bên ngoài.
          </Paragraph>
          <Heading4 id="anchor221">
            2.2.1. Xây dựng văn hóa – nguồn nhân sự
          </Heading4>
          <Paragraph>
            Xây dựng văn hóa là một phạm trù có phần hơi “Drama hóa” nhưng rất
            quan trọng và là nền móng trong việc phát triển một doanh nghiệp (ít
            nhất theo suy nghĩ của mình). Với mình, xây dựng văn hóa tốt sẽ giúp
            giảm rất nhiều chi phí sau này, tạo ra một môi trường tốt, dễ dàng
            thu hút nhân sự giỏi, tuyển dụng nhân sự tốt hơn, mọi mặt phần nào
            được nâng cao tốt hơn nếu như văn hóa được xây dựng đúng hướng.
          </Paragraph>
          <Paragraph>
            Trong những ngày đầu mình đến Anh Xuyến, đây có thể coi chỉ là một
            xưởng thêu nhỏ và thường xuyên gặp vấn đề với các nhân viên gia công
            – đứng máy. Thêu vi tính là lĩnh vực không chỉ tập trung những lao
            động phổ thông mà còn là lao động tri thức, chính vì điều này mà
            việc xây dựng văn hóa khó khăn hơn và cần thiết phải làm tốt bởi nó
            tác động rất mạnh vào doanh nghiệp. Nếu bạn từng đọc nhiều về Xây
            dựng văn hóa doanh nghiệp, thường thì sẽ chỉ đề cập đến việc xây
            dựng văn hóa cho đội ngũ nhân viên thuộc nhóm lao động tri thức. Tuy
            nhiên, lao động phổ thông đôi khi cũng phải được xây dựng một văn
            hóa nhất định, điều này thường có cấu trúc và cách tiếp cận khác hơn
            rất nhiều. Việc kết hợp cả hai vào cùng một môi trường đôi khi là
            một thử thách lớn. Rất nhiều biện pháp – chiến lược – hướng đi mà
            đôi ngũ đã đưa ra để giúp cải thiện văn hóa – con người tại Anh
            Xuyến nhưng phần nào thất bại và phần nào thành công. Đến thời điểm
            hiện tại những điều mà mọi người đang có xu hướng phát triển theo
            bao gồm:
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>
                Không ai được đặt lợi ích của bản thân lên trên lợi ích của tổ
                chức.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Bạn là một viên gạch quan trọng trong bức tường lớn, thiếu một
                viên bức tường có thể sụp đỗ, nhưng nếu bạn nghĩ mình là viên
                gạch quan trọng thì bức tường sẽ vững chải hơn nếu không có viên
                gạch như bạn.
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Đây là gia đình – không phải là công ty. Bạn là đối tác – không
                phải nhân viên.
              </Paragraph>
            </li>
          </BulletList>
          <Paragraph>
            Nguồn nhân sự như đã nói được mình phát triển theo 2 hướng: Nhân sự
            đảm nhiệm vai trò vận hành – phát triển, nhân sự lao động trực tiếp
            thực hiện công việc trên máy thêu và các công việc liên quan. Nguồn
            nhân sự luôn được backup hợp lý và những vấn đề về thiếu nhân lực
            cũng dần được khắc phục.
          </Paragraph>
          <Heading4 id="anchor222">2.2.2. Tái cấu trúc vận hành</Heading4>
          <Paragraph>
            Trước đây, quá trình vận hành của Anh Xuyến thường theo quyết định
            của quản lý trực tiếp tại xưởng và thỉnh thoảng có những rắc rối xảy
            ra. Hiện nay thì việc phân phối hàng và thực hiện công việc được vận
            hành bởi một hệ thống thông tin lớn hơn. Mình đang muốn xây dựng một
            hệ thống có phần AI hóa để giúp tối ưu thời gian và năng xuất hơn,
            quá trình này sẽ rất dài và đòi hỏi nhân lực thực hiện, tuy nhiên
            mình đang đi theo hướng này và đang được phát triển mỗi ngày. Việc
            tái cấu trúc vận hành theo hướng công nghệ sẽ giúp Anh Xuyến thu
            được nhiều dữ liệu hơn để nghiên cứu và tái phát triển, mặt khác sẽ
            giúp khác hàng nắm được thông tin hàng hóa tốt hơn và hỗ trợ tốt
            hơn.
          </Paragraph>
          <Paragraph>
            Bản thân mình muốn xây dựng Anh Xuyến trở thành một start-up công
            nghệ thật sự trong lĩnh vực thêu hơn là một xưởng thêu thủ công. Do
            đó rất nhiều thay đổi có phần nào hơi “ngộp” cho đội ngủ hiện tại.
            Tuy nhiên, mình tự tin với cách tiếp cận của mình sẽ giúp mọi người
            sớm thích nghi. Bằng chứng là 2 năm qua mọi thứ dần được chuyển
            hướng sang công nghệ nhiều hơn. Những thay đổi về việc vận hành của
            Anh Xuyến phải luôn đảm bảo 3 yếu tố chính là:
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>Hiệu quả.</Paragraph>
            </li>
            <li>
              <Paragraph>Giảm thiểu rủi ro.</Paragraph>
            </li>
            <li>
              <Paragraph>Đảm bảo độ scale đủ mạnh.</Paragraph>
            </li>
          </BulletList>
          <Heading4 id="anchor223">
            2.2.3. Mọi thứ cần chuyên nghiệp hơn
          </Heading4>
          <Paragraph>
            Khi mình đến Anh Xuyến, thực sự mà nói khi đó mọi thứ còn rất là sơ
            khai và có phần thiếu chuyên nghiệp. Lúc ấy, Anh Xuyến không phải là
            một doanh nghiệp thực sự hay đơn giản là một doanh nghiệp gia đình,
            mà có thể coi là một xưởng gia công có phần lao động hóa.
          </Paragraph>
          <Paragraph>
            Tính chuyên nghiệp mà mình nói là những áp dụng trong cách vận hành,
            quan hệ khách hàng, giao tiếp khách hàng, quản trị nhân sự phải được
            chuyên nghiệp hóa giống như một doanh nghiệp thực sự cho dù mình
            chưa tới đi chăng nữa. Những sự thay đổi này không phải để cố gắng
            biến mình trở thành một doanh nghiệp (lưu ý điều này rất nguy hiểm
            nếu không thể kiểm soát), mà những thay đổi này khiến cho mọi thứ
            hiệu quả hơn trong việc giảm chi phí, tăng tính an toàn, nhanh
            chóng.
          </Paragraph>
          <Paragraph>Một ví dụ trong điều này, khi mình đến thì:</Paragraph>
          <BulletList>
            <li>
              <Paragraph>Khách hàng thường sẽ giao mẫu cần thêu</Paragraph>
            </li>
            <li>
              <Paragraph>
                Anh Xuyến chuyển qua thiết kế mẫu – gia công mẫu thêu thực tế
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Sau khi chấp nhận, Anh Xuyến sẽ nhận sản phẩm bán thành phẩm
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Gia công xong – kiểm tra bằng tay lại – giao hàng cho khách hàng
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Thanh toán bằng hình thức tiền mặt hay ký sổ
              </Paragraph>
            </li>
          </BulletList>
          <Paragraph>
            Điều này hoàn toàn mất thời gian và phần nào không thể áp dụng cho
            những khách hàng chuyên nghiệp khác. Mình đã cải thiện vấn đề bằng
            cách công nghệ hóa và giải quyết theo hướng tối giản hơn.
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>Khách hàng giao mẫu cần thêu</Paragraph>
            </li>
            <li>
              <Paragraph>In mô phỏng kích thước thật</Paragraph>
            </li>
            <li>
              <Paragraph>Duyệt và thêu trên sản phẩm bán thành phẩm</Paragraph>
            </li>
            <li>
              <Paragraph>
                Kiểm tra bằng máy – Liên kết đơn vị vận chuyển
              </Paragraph>
            </li>
            <li>
              <Paragraph>
                Thanh toán bằng nhiều hình thức khác nhau và hóa đơn điện tử
              </Paragraph>
            </li>
          </BulletList>
          <Paragraph>
            Có một điểm lưu ý là những sự thay đổi này đôi khi không được áp
            dụng hoàn toàn và tùy vào từng nhóm khách hàng, tùy vào từng trường
            hợp và từng thời điểm mà team Anh Xuyến sẽ có cách giải quyết khác
            nhau. Cơ bản nó là những thay đổi giúp giải quyết vấn đề tốt hơn.
          </Paragraph>
          <Heading4 id="anchor224">
            2.2.4. Phân tích – thống kê chi tiết
          </Heading4>
          <Paragraph>
            Dữ liệu mà Anh Xuyến có thể thu được hiện tại là rất nhiều và mình
            đang giúp cho doanh nghiệp này xây dựng một cơ sở dữ liệu đủ lớn để
            phục vụ mục đích phát triển, tất nhiên là cho cả mục đích xây dựng
            AI mà mình nói trong tương lai tới. Nguồn dữ liệu này đến từ offline
            tại trụ sở – chi nhánh lẫn đến online trên các website vệ tinh –
            website chính – và từ cả các mạng xã hội. Dữ liệu cũng được thống kê
            và thu thập từ rất nhiều đối thủ.
          </Paragraph>
          <Paragraph>
            Mình và nhóm của mình có những công cụ nội bộ và cả những công cụ
            trả phí để phân tích và đánh giá nguồn dữ liệu thu được. Dữ liệu mà
            Anh Xuyến đang có nó khá lớn nhưng theo đánh giá của mình vẫn còn
            một khoảng thời gian nữa nó mới có thể phần nào được sử dụng một
            cách tốt nhất trong phát triển doanh nghiệp.
          </Paragraph>
          <Paragraph>
            Bản thân mình hiểu đây là thời đại của Big Data và dữ liệu là điều
            quan trọng nhất mà bất kỳ doanh nghiệp nào cũng cần phải có để đưa
            ra những hướng đi đúng và phát triển doanh nghiệp theo đúng hướng.
          </Paragraph>
          <Heading4 id="anchor225">2.2.5. Thay đổi cơ cấu về giá</Heading4>
          <Paragraph>
            Cơ cấu về giá là điểm khiến cho khách hàng cá nhân không thực sự mặn
            mà với nghành thêu bởi chi phí thêu có thể bị đẩy lên rất cao, đôi
            khi nó còn vượt qua cả giá trị sản phẩm. Điều này thường xuyên xảy
            ra đối với khách hàng cá nhân thêu số lượng ít.
          </Paragraph>
          <Paragraph>
            Cơ cấu về giá được mình xây dựng lại trong nửa năm đầu khi mình đến
            Anh Xuyến để giúp Anh Xuyến tiếp cận nhiều hơn đến nhóm khách hàng
            cá nhân và phần nào tạo điều kiện để mọi người đều có thể nhanh
            chóng thêu. Cơ cấu về giá của Anh Xuyến hiện tại đã được tách ra làm
            2 với chi phí gia công và chi phí thiết kế. Việc tách chi phí ra làm
            hai loại này sẽ giúp ích rất nhiều cho khách hàng và cả Anh Xuyến
            trong việc thu hút khách hàng, quản lý dữ liệu và khắc phục những
            vấn đề nội bộ khác. Tất nhiên, cơ cấu về giá nó rắc rối và nhiều thứ
            hơn rất nhiều, nếu mình chia sẻ hết trong Case Study này thì các bạn
            có thể đọc nó trong suốt 2 tiếng ấy. Mình sẽ nói nhiều hơn về vấn đề
            này trong các bài viết khác chuyên sâu hơn nếu có cơ hội.
          </Paragraph>
          <Heading2 id="anchor3">3. Đã đến lúc thay đổi</Heading2>
          <Paragraph>Như mình đã nói ở đầu Case Study:</Paragraph>
          <Paragraph>
            Những gì giúp mình đi đến ngày hôm nay, không giúp cho mình đi lên
            nữa. Điều cần làm là phải thay đổi.
          </Paragraph>
          <Paragraph>
            Những gì Anh Xuyến đã trải qua và thực hiện nó chỉ là những bước đầu
            trong một kế hoạch rất lớn của mình. Phần nào có thể đánh giá bước
            đầu khá thành công và đáp ứng 7/10 yêu cầu của mình. Vẫn còn nhiều
            thứ phải làm và sẽ có rất nhiều thay đổi diễn ra trong tương lai gần
            sắp đến. Mình muốn Anh Xuyến phát triển rộng hơn và giúp ích được
            nhiều người hơn nữa.
          </Paragraph>
          <Paragraph>
            Và đó là những gì mình muốn chia sẻ trong Case Study: Quá trình tái
            cấu trúc – xây dựng thương hiệu cho Anh Xuyến. Khá là dài và phần
            nào đã bao quát được những gì mình muốn chia sẽ, tất nhiên ở mỗi
            phần còn rất nhiều thứ khác nhưng mình sẽ không chia sẻ thêm bởi nó
            có thể đúng với mình nhưng chưa chắc đúng với các trường hợp khác.
            Những gì mình làm và tiếp cận có thể đúng – có thể sai, mỗi chúng ta
            sẽ có những cách tiếp cận khác nhau và đôi khi giống nhau, nhưng để
            nó hiệu quả thì cần phải điều chỉnh linh hoạt theo từng tình huống –
            từng giai đoạn – từng lĩnh vực.
          </Paragraph>
          <Paragraph>
            Cảm ơn bạn rất nhiều vì đã đọc đến dòng cuối cùng này, một bài viết
            dài nhưng nó dành cho mọi người – cho bản thân của mình.
          </Paragraph>
        </div>
        <EndPostSection telegramid="13">
          <TelegramComments datatelegramdiscussion="phongchannel/13" />
        </EndPostSection>
      </div>
    </Container>
  );
}
