import Container from "../../components/Container";
import Paragraph from "../../components/elements/block/Paragraph";
import Heading2 from "../../components/elements/block/Heading2";
import Heading3 from "../../components/elements/block/Heading3";
import BulletList from "../../components/elements/block/BulletList";
import Quote from "../../components/elements/block/Quote";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";
import EndPostSection from "../../components/structures/EndPostSection";
import TableOfContents from "../../components/elements/block/TableOfContents";
import BlogHeader from "../../components/structures/BlogHeader";
import Comments from "../../components/Comments";

export default function Blog_minh_da_mua_ten_mien_eth_cua_ens_nhu_the_nao() {
  const seotitle = `Mình đã mua tên miền .ETH của ENS Domain như thế nào?`;
  const seodescrip = `Mình đã mua tên miền .ETH của ENS Domain trên mạng blockchain của Ethereum như thế nào? Trong bài viết này mình sẽ viết lại quá trình mình mua nó, thật sự rất dễ dàng và nhanh chóng. Blockchain và cách mà các DApps tương tác với nhau khiến mình thật sự rất bất ngờ, tương lai các ứng dụng nên được liên kết giống như vậy.`;
  const seourl = `https://phong.vn/blog/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao`;
  const seopreviewimg =
    "/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao-feature-img.png";
  const headerslug = "minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao";
  const headerpublish = "2021-05-21";
  const headerreadingtime = "12";
  const headerfeatureimggif =
    "/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao-feature-img.gif";
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
            Trước khi đi vào từng bước mình muốn giới thiệu sơ qua một vài thứ
            để giúp cho những bạn không rành về blockchain hay chưa từng sử dụng
            các DApps các điều cơ bản, nó không khó nhưng nghe sẽ có vẻ khó. Với
            bản thân mình từng là một người tìm hiểu và làm việc trong lĩnh vực
            UX/UI Design thì mình có thể nói rằng cách mà các DApps giao tiếp và
            hoạt động trên Blockchain được thiết kế với một trải nghiệm người
            dùng (UX) rất cao.
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
                    1.1. Tên miền .ETH và ENS Domain là gì?
                  </a>
                </li>
                <li>
                  <a href="#anchor12" className="hover:underline">
                    1.2. Tại sao phải mua tên miền .ETH?
                  </a>
                </li>
                <li>
                  <a href="#anchor13" className="hover:underline">
                    1.3. Những điều cần lưu ý khi đăng ký tên miền .ETH
                  </a>
                </li>
                <li>
                  <a href="#anchor14" className="hover:underline">
                    1.4. Cài đặt MetaMask và Rainbow trên điện thoại để nhận xác
                    nhận trong lúc đăng ký tên miền .ETH
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#anchor2" className="hover:underline">
                2. Quá trình đăng ký tên miền .ETH của ENS
              </a>
            </li>
            <li>
              <a href="#anchor3" className="hover:underline">
                3. Tận hưởng nó
              </a>
            </li>
          </TableOfContents>
          <Heading2 id="anchor1">1. Luyên thuyên</Heading2>
          <Paragraph>
            Trước khi đi vào các bước cụ thể việc đăng ký như thế nào, mình sẽ
            giới thiệu sơ qua vài điều trước nha. Chém gió tí 😙
          </Paragraph>

          <Heading3 id="anchor11">
            1.1. Tên miền .ETH và ENS Domain là gì?
          </Heading3>
          <Paragraph>
            Đầu tiên, <strong>tên miền .ETH là gì?</strong> Giống như bạn biết
            thì phần lớn tên miền đều có phần sau là "chấm" gì đó, ví dụ: .com ,
            .net , .org ,... hay .vn giống như website của mình. .ETH cũng vậy
            nhưng nó không phải là một tên miền dùng chính cho website giống như
            các tên miền mình vừa kể. "chấm ETH" cũng không thuộc quản lý của
            ICANN như phần lớn các tên miền hiện tại, nó được quản lý bởi ENS
            trên mạng blockchain của Ethereum.
          </Paragraph>
          <Paragraph>
            <strong>Vậy tên miền .ETH dùng để làm gì?</strong> tên miền .ETH
            dùng để thay thế dãy địa chỉ loằng ngoằng mà chúng ta hay thấy khi
            nó đến cryptocurrency. Cụ thể khi chuyển coin hay nhận coin, bạn sẽ
            phải gửi cho người đang giao dịch một địa chỉ ví có dạng
            (bnb1a5p77q9sp9qefejfdqe2ev5pkkhpqh7a9cccye) và từng loại coin sẽ có
            các địa chỉ như vậy khác nhau, thậm chí trong từng loại coin sẽ có
            những giao thức khác nhau như (TRC20, BEP20, ERC20,...) lại có những
            địa chỉ khác nhau nữa. Điều này hoàn toàn không thân thiện với người
            dùng bình thường, cơ bản nó cũng giống như số tài khoản ngân hàng
            của bạn nhưng ở dạng chuỗi bất kỳ. Chính vì điều này mà team phát
            triển Ethereum đã sinh ra tên miền .ETH để bạn có thể sử dụng một
            cách dễ dàng hơn trong các ứng dụng được xây trên blockchain
            Ethereum.
          </Paragraph>
          <Paragraph>
            <strong>ENS Domain là gì?</strong> ENS (Ethereum Name Service) là
            một trang giúp bạn có thể đăng ký và quản lý các tên miền .ETH mà
            bạn sở hữu. Nói cách khác thì đây giống như các nhà đăng ký tên miền
            mà chúng ta hay vào mua tên miền như Godaddy, Namecheap, Google
            Domain,... Tất nhiên, nhìn giống vậy ở khía cạnh nhìn thôi nhé, bản
            chất phía sau vẫn khác rất nhiều nhưng bạn không cần quan tâm.{" "}
          </Paragraph>
          <Paragraph>
            Bạn có thể đọc thêm các ứng dụng và tính năng của một tên miền .ETH
            tại:{" "}
            <a
              href="https://ens.domains/"
              target="_blank"
              className="rainbow_text_hover font-bold"
            >
              https://ens.domains/
            </a>
          </Paragraph>
          <Heading3 id="anchor13">
            1.2. Tại sao phải mua tên miền .ETH?
          </Heading3>
          <Paragraph>
            Thực tế thì bạn không cần phải mua tên miền .ETH làm gì nếu muốn ẩn
            danh, tức là không muốn công khai địa chỉ ví và cảm thấy ổn với việc
            sử dụng các địa chỉ dài ngoằn. Bản thân mình thì vẫn thích việc sử
            dụng các địa chỉ ví ẩn danh dài ngoằn kia. 😆 Vì ban đầu thì
            blockchain được xây dựng trên lý tưởng đó mà.
          </Paragraph>
          <Paragraph>
            Nhưng tại sao lại phải mua tên miền .ETH? Vì nó hiện tại đang còn
            rất rẻ và đang là xu hướng. Bạn có thể thấy rất nhiều người tham gia
            vào lĩnh vực crypto, đặc biệt trên Twitter đều đã mua tên miền .ETH
            cho bản thân. Phần lớn họ sẽ rất ít khi dùng mà vẫn sẽ dùng địa chỉ
            ẩn danh cho riêng tư nhưng vẫn mua và sẽ thay đổi địa chỉ nhận liên
            kết với tên miền .ETH thường xuyên.
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-[100%] md:w-[50%]"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img28-edited.jpg"
            />
          </div>
          <Paragraph>
            Đồng sáng lập của Ethereum và là một trong những người hiểu sâu và
            rộng nhất về crypto là{" "}
            <a
              href="https://twitter.com/VitalikButerin"
              target="_blank"
              className="rainbow_text_hover font-bold"
            >
              Vitalik Buterin
            </a>{" "}
            cũng để tên Twitter là domain .ETH. Và rất nhiều người khác cũng đã
            mua.{" "}
          </Paragraph>
          <Paragraph>
            Riêng mình thì mình mua vì ham vui và "have fun with hoomies" thôi.
            😆 chứ thực tế thì sử dụng chắc hiếm.{" "}
          </Paragraph>
          <Paragraph>
            Ethereum đang có một hệ sinh thái khổng lồ và là đầu tàu của thế
            giới Altcoin, thậm chí có thể lật đổ Bitcoin trong tương lai khi
            tính thực tế và áp dụng là rất lớn. Việc mua tên miền .ETH nhìn
            chung nó sẽ giống như bạn chuẩn bị cho một tương lai tươi sáng vậy
            (have fun thôi chứ đừng cố chấp quá nha 🤪 - cuộc sống vốn dĩ khó
            khăn rồi nên vui được lúc nào thì hãy vui.)
          </Paragraph>
          <Heading3 id="anchor13">
            1.3. Những điều cần lưu ý khi đăng ký tên miền .ETH
          </Heading3>
          <Paragraph>
            Những điều mà bạn cần lưu ý khi đăng ký tên miền .ETH.
          </Paragraph>
          <BulletList>
            <li>
              <Paragraph>
                Hãy chờ khi phí gas thấp rồi hãy đăng ký, đừng hấp tấp quá.
              </Paragraph>
            </li>
            <li>
              <Paragraph>Bỏ qua tính ẩn danh nhất định</Paragraph>
            </li>
            <li>
              <Paragraph>
                Ethereum đang phát triển rất vượt bậc và là tương lai của thị
                trường crypto lẫn blockchain. Khi mình viết bài này thì thị
                trường đang bay màu 50% 🤣 Nhưng đã nói về tương lai thì phải
                nói tương lai 10 năm đúng không?. "Have fun with homies" thôi
                nhé, đừng căng quá.
              </Paragraph>
            </li>
          </BulletList>
          <Heading3 id="anchor14">
            1.4. Cài đặt MetaMask và Rainbow trên điện thoại để nhận xác nhận
            trong lúc đăng ký tên miền .ETH
          </Heading3>
          <Paragraph>
            Luyên thuyên đủ rồi, giờ sẽ là lúc cài đặt các ứng dụng cần thiết để
            mua tên miền .ETH thôi. Do là tên miền .ETH được xây dựng trên
            Ethereum nên việc đầu tiên cần làm là cài đặt các ví (hay còn gọi là
            DApps của Ethereum). Và Metamask và Rainbow là cần thiết.
          </Paragraph>
          <Paragraph>
            Bạn có thể tải về MetaMask tại đây:{" "}
            <a
              href="https://metamask.io/"
              target="_blank"
              className="rainbow_text_hover font-bold"
            >
              https://metamask.io/
            </a>
          </Paragraph>
          <Paragraph>
            Và bạn có thể tải về Rainbow tại đây:{" "}
            <a
              href="https://rainbow.me/"
              target="_blank"
              className="rainbow_text_hover font-bold"
            >
              https://rainbow.me/
            </a>
          </Paragraph>
          <Paragraph>Cả hai đều có trên iOS và Android.</Paragraph>
          <Paragraph>
            Việc tải về MetaMask chỉ là dùng để tạo địa chỉ ví Ethereum mà thôi,
            sau đó mình sẽ thêm địa chỉ ví vào Rainbow và sử dụng (toàn bộ quá
            trình đăng ký sẽ dùng ứng dụng Rainbow, tại sao? vì nó đẹp 😍).
          </Paragraph>
          <Paragraph>
            Mà khoan,{" "}
            <strong>
              tại sao lại phải tạo địa chỉ ví trên MetaMask thay vì tạo trên
              Rainbow (hay các DApps khác như TrustWallet)?
            </strong>{" "}
            Vì MetaMask là ứng dụng duy nhất mà mình biết cho phép xuất{" "}
            <strong className="text-red-500">Private Keys</strong> của địa chỉ
            ví.
          </Paragraph>
          <Quote>Not your keys, not your coins</Quote>
          <Paragraph>
            Có một câu nói rất nổi tiếng trong thế giới crypto đó là nếu bạn
            không nắm Private Keys thì bạn không nắm địa chỉ ví, và không nắm
            địa chỉ ví thì bạn không thực sự sở hữu coin mà bạn đang có
          </Paragraph>
          <Paragraph>
            Lưu ý: Phần lớn các ứng dụng tạo địa chỉ ví sẽ đưa bạn 12 từ bất kỳ
            (gọi là Recovery Phases) và đây không phải là Private Keys. Private
            Keys sẽ có dạng loằn ngoằn như địa chỉ ví vậy. Thực tế, Recovery
            Phases cũng xem như là nắm key gốc rồi, nhưng mình vẫn thích nắm
            Private Keys hơn.
          </Paragraph>
          <Paragraph>
            Nếu bạn đã có ý định mua tên miền .ETH thì chắc đã có kiến thức tạo
            địa chỉ ví trên các ứng dụng này rồi nên mình sẽ không hướng dẫn lại
            nữa nha, bạn có thể tìm kiếm trên Google và có 800 trang đã hướng
            dẫn những thao tác cơ bản này rồi. Khi tạo địa chỉ trên bất kỳ ứng
            dụng nào thì với Private Keys hay Recovery Phases, bạn đều có thể
            thêm nó vào các ứng dụng khác (đây chính là điểm đặc biệt của các
            ứng dụng phi tập trung (DApps).
          </Paragraph>
          <Paragraph>
            Sau khi đã tạo địa chỉ ví và có thể thông tin Recovery Phases, bạn
            sẽ dùng nó để đăng nhập vào Rainbow, mình đã tạo một địa chỉ mới và
            gửi đến đây ~$50 ETH đủ để đăng ký tên miền.
          </Paragraph>
          <div className="grid grid-cols-2 md:flex gap-2">
            <div className="md:w-[40%]">
              <img
                src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img1-edited.jpg"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
            <div className="md:w-[60%]">
              <Paragraph>
                Đây là giao diện chính của Rainbow, nếu bạn đã tải về rồi thì sẽ
                thấy tương tự như mình à. Giao diện trực quan và rất đẹp nên
                cũng không có gì phải giải thích nhiều 😜
                <br />
                Kế tiếp, mình sẽ lên máy tính của mình, truy cập vào website{" "}
                <a
                  href="https://app.ens.domains/"
                  target="_blank"
                  className="rainbow_text_hover font-bold"
                >
                  https://app.ens.domains/
                </a>{" "}
                của ENS Domain để tìm kiếm và đăng ký.
              </Paragraph>
            </div>
          </div>
          <Heading2 id="anchor2">
            2. Quá trình đăng ký tên miền .ETH của ENS
          </Heading2>
          <Paragraph>
            Truy cập vào website{" "}
            <a
              href="https://app.ens.domains/"
              target="_blank"
              className="rainbow_text_hover font-bold"
            >
              https://app.ens.domains/
            </a>
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-full"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img2-edited.jpg"
            />
          </div>
          <Paragraph>
            Đây là giao diện của ENS Domain, nhìn khá giống với các trang đăng
            ký tên miền truyền thống đúng không?. Điều cần làm đầu tiên chính và
            kết nối địa chỉ ví của bạn với trang này. Có thể dễ hiểu là giống
            như đăng nhập tài khoản ấy. Nhưng trong thế giới blockchain và phi
            tập trung, không có khái niệm đăng ký tài khoản hay đăng nhập tài
            khoản mà chỉ có khái niệm "Connect your wallet". Đây chính là tương
            lai mà mình nói đến, khi đăng ký tài khoản bạn sẽ phải cung cấp
            thông tin cá nhân nhạy cảm và điều này tạo điều kiện cho các trang
            scam trục lợi. Với việc connect wallet thì các trang này sẽ không
            viết bạn là ai và đến từ đâu
          </Paragraph>
          <Paragraph>
            Bạn bấm vào góc trái trên nút "<strong>Connect</strong>"
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-full"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img3-edited.jpg"
            />
          </div>
          <Paragraph>
            Một cửa sổ sẽ hiện lên giống như vầy, nếu bạn dùng quen các ứng dụng
            DApps thì sẽ thấy nhiều lần những cửa sổ như vầy khi bấm "Connect".
            Có rất nhiều ví phi tập trung nhưng phần lớn bạn sẽ chọn
            WalletConnect.
          </Paragraph>
          <div className="grid grid-cols-2 md:flex gap-2">
            <div className="md:w-[40%]">
              <img
                src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img4-edited.jpg"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
            <div className="md:w-[60%]">
              <Paragraph>
                Sau khi chọn WalletConnect, bạn sẽ thấy một mã QR Code hiện lên,
                bạn dùng ứng dụng Rainbow trên điện thoại và scan nó (tương tự
                đăng nhập trên Zalo mà bạn hay làm).
              </Paragraph>
              <Paragraph>
                Rainbow sẽ hỏi để xác nhận và bạn bấm Connect.
              </Paragraph>
              <Paragraph>
                Vậy là trên website, trang sẽ tự động đổi và bạn đã Connect
                thành công ví của mình với ENS Domain. Rất rất dễ dàng đúng
                không?
              </Paragraph>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-full"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img5-edited.jpg"
            />
          </div>
          <Paragraph>
            Lúc này nhìn ở góc trái trên của trang bạn sẽ thấy địa chỉ ví của
            mình, nó trùng với địa chỉ ví mà bạn đã tạo và dùng trên Rainbow đó.
            (Cái này chắc ai cũng biết rồi 😙)
          </Paragraph>
          <Paragraph>
            Sau đó, mình search tên miền mình muốn mua, trong trường hợp này
            mình tính mua <strong>PHONGVN.ETH</strong> (giống tên miền Phong.vn
            của mình đang dùng).
          </Paragraph>
          <Paragraph>
            Phí gas (phí giao dịch để xác nhận) đang khá thấp chỉ có 33 Gwei lúc
            mình mua. Nếu như thời điểm bạn search tên miền mà phí gas này quá
            cao thì bạn hãy chờ mấy tiếng sau hay mấy ngày sau vào kiểm tra lại
            nha, có thời điểm mình thấy phí gas này lên đến 200 Gwei. Việc phí
            gas đang quá cao chính là vấn đề mà Ethereum đang đối mặt, việc có
            số lượng người dùng quá cao mà nền tảng scaleup không kịp khiến cho
            mạng blockchain của họ bị quá tải. Ethereum đang làm việc rất cực
            lực để giải quyết vấn đề này trong phiên bản Layer 2.0 sắp tới của
            họ.
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-full"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img6-edited.jpg"
            />
          </div>
          <Paragraph>
            Sau khi thấy phí gas khá thấp, mình quyết định tăng thời gian mua
            lên 5 năm luôn. 🤣 Tính làm luôn 10 năm mà lỡ chuyển vào có $50 à.
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-full"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img7-edited.jpg"
            />
          </div>
          <Paragraph>
            Lúc tăng lên 5 năm thì ENS Domain sẽ thống kê cho mình số tiền trung
            bình mình sẽ thanh toán cho mạng blockchain. ~$45. Vừa khít. 😗
          </Paragraph>
          <Paragraph>
            Bên dưới bạn sẽ thấy quy trình 3 bước mua tên miền .ETH. Giờ mình sẽ
            bấm "Request to Register" để tiến hành mua. Sau khi bấm thì ứng dụng
            Rainbow của mình sẽ ting ting lên.
          </Paragraph>
          <div className="grid grid-cols-2 gap-2">
            <img
              className="w-full border-gray-200 border-2 p-2"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img8-edited.jpg"
            />
            <img
              className="w-full border-gray-200 border-2 p-2"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img9-edited.jpg"
            />
          </div>
          <Paragraph>
            Bạn sẽ thấy một thông báo confirm như trên, chú ý phần dưới dùng bạn
            sẽ thấy Network Fee (Phí giao dịch hay còn gọi là Phí gas). Bạn bấm
            vào chỗ Normal nó sẽ tự động chuyển sang các mức khác nhau, nếu số
            tiền Network Fee thấp thì thời gian xác nhận sẽ lâu và có thể không
            thành công, nên trong trường hợp này mình nâng từ Normal lên Fast
            với phí tốn thêm khoảng $0.7 và thời gian xác nhận giảm từ ~2 phút
            xuống ~45 giây. Sau khi chọn xong thì mình bấm{" "}
            <strong>Confirm</strong>.
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-full"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img10-edited.jpg"
            />
          </div>
          <Paragraph>
            Sau khi bấm Confirm trên điện thoại thì trên website của ENS Domain
            cũng sẽ tự động chuyển sang dạng loading như thế này, việc bạn cần
            làm là chờ thôi. Bạn sẽ trải qua từng giai đoạn của quy trình mua.
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-full"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img11-edited.jpg"
            />
          </div>
          <Paragraph>
            Đây là bước 2, bước này chủ yếu là bạn đợi khoảng 1 phút để đảm bảo
            tên miền .ETH bạn đang mua không có ai mua (tránh được xung đột).
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-full"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img12-edited.jpg"
            />
          </div>
          <Paragraph>
            Và sau khi xong bước 2, bạn sẽ thấy nút Register hiện lên, bạn sẽ
            bấm vào nút này để tiến hành vào bước 3. Khi bạn bấm nút Register
            này, ứng dụng Rainbow trên điện thoại bạn sẽ ting ting.
          </Paragraph>
          <div className="grid grid-cols-2 md:flex gap-2">
            <div className="md:w-[40%]">
              <img
                src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img13-edited.jpg"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
            <div className="md:w-[60%]">
              <Paragraph>
                Một thông báo trên ứng dụng Rainbow sẽ xuất hiện, mình thấy hiển
                thị phí Network Fee là Fast với $23.91 và tổng phí thanh toán là
                $27.50. Và số dư trong ví mình là không đủ 😂. Bạn có thể đóng
                thông báo này (nó sẽ có thời gian chờ là 60 phút) và chuyển thêm
                ETH vào ví.{" "}
              </Paragraph>
              <Paragraph>
                Mình thì chỉ còn cái nịt nên mình bấm vào chỗ Fast để giảm
                Network Fee, chờ hơi lâu tí nhưng mà làm gì hơn được giờ 😌
              </Paragraph>
            </div>
          </div>
          <div className="grid grid-cols-2 md:flex gap-2">
            <div className="md:w-[40%]">
              <img
                src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img14-edited.jpg"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
            <div className="md:w-[60%]">
              <Paragraph>
                Sau khi giảm từ Fast xuống Normal, mình đã đủ tiền rồi 🥲.
              </Paragraph>
              <Paragraph>
                Network Fee còn $20.24 đô và thời gian xác nhận là ~4 phút. Móa,
                ít hơn có $3,5 mà thời gian xác nhận từ ~45 giây lên thành ~4
                phút. 🥲 Đòi hỏi gì hơn.
              </Paragraph>
              <Paragraph>
                Lặng lẽ bấm <strong>Confirm</strong>
              </Paragraph>
            </div>
          </div>
          <div className="grid grid-cols-2 md:flex gap-2">
            <div className="md:w-[40%]">
              <img
                src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img15-edited.jpg"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
            <div className="md:w-[60%]">
              <Paragraph>
                Sau khi Confirm, mình sẽ thấy trạng thái Seding đang quay, đây
                chính là quá trình các node trong mạng blockchain Ethereum tiến
                hành xác nhận giao dịch của bạn. Việc cần làm là chờ thôi, mình
                phải chờ ~4 phút lận do tiền ít, không hít được. 😪
              </Paragraph>
              <Paragraph>Mình đi tắm.</Paragraph>
            </div>
          </div>
          <div className="grid grid-cols-2 md:flex gap-2">
            <div className="md:w-[40%]">
              <img
                src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img17-edited.jpg"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
            <div className="md:w-[60%]">
              <Paragraph>
                Sau khi tắm rửa mát mẻ ra, thì giao dịch mình cũng đã thành
                công, mình tắm khá lâu nên không biết là có phải ~4 phút không
                nữa.
              </Paragraph>
              <Paragraph>Bạn sẽ thấy trạng thái Received (Đã nhận).</Paragraph>
              <Paragraph>
                Trên website của ENS Domain cũng đã load xong thanh quy trình
                đăng ký rồi, bạn có thể xem bên dưới.
              </Paragraph>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-full"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img18-edited.jpg"
            />
          </div>
          <Paragraph>
            Như vậy là mình đã đăng ký xong tên miền .ETH rồi, dễ đúng không
            nào. Bạn có thể xem trên ứng dụng Rainbow bạn đang sở hữu đó.
          </Paragraph>
          <div className="grid grid-cols-2 md:flex gap-2">
            <div className="md:w-[40%]">
              <img
                src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img20-edited.jpg"
                className="w-full border-gray-200 border-2 p-2"
              />
            </div>
            <div className="md:w-[60%]">
              <Paragraph>
                Nhìn xịn xò không nè. Và tất cả đều được lưu trữ trên mạng
                Blockchain của Ethereum rồi nên sẽ không ai có thể lấy của bạn,
                chỉ bạn là người có thể chuyển và quản lý mà thôi.
              </Paragraph>
              <Paragraph>
                Do là phi tập trung và lưu trữ trên blockchain nên trên các ứng
                dụng khác mà đang liên kết địa chỉ ví này của bạn, bạn sẽ thấy
                được tên miền .ETH bạn vừa mua luôn.
              </Paragraph>
              <Paragraph>
                Dưới đây là các Screenshot mà mình chụp trong các DApps như
                MetaMask, TrustWallet.
              </Paragraph>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <img
              className="w-full border-gray-200 border-2 p-2"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img26-edited.jpg"
            />
            <img
              className="w-full border-gray-200 border-2 p-2"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img27-edited.jpg"
            />
          </div>
          <Paragraph>
            Lúc này mình có thể trỏ địa chỉ ví ETH loằn ngoằn của mình về tên
            miền và sử dụng dễ dàng trên các DApps rồi. Bạn có thể tìm hiểu thêm
            một vài chức năng khác trên website của ENS Domain.
          </Paragraph>
          <Paragraph>
            Do mình đăng ký 5 năm nên 2026 sẽ hết hạn. Mình không che địa chỉ ví
            vì bạn có thể scan trên mạng blockchain của Ethereum, cũng không
            phải là địa chỉ ví chính nên không sao 😬
          </Paragraph>
          <div className="flex w-full items-center justify-center">
            <img
              className="w-full"
              src="/static/images/minh-da-mua-ten-mien-eth-cua-ens-nhu-the-nao/minh-da-dang-ky-ten-mien-eth-ens-nhu-the-nao-phongvn-img23-edited.jpg"
            />
          </div>
          <Paragraph>
            Vậy là xong rồi, bạn có thể từ từ mò thêm những chức năng khác của
            ENS Domain.
          </Paragraph>
          <Heading2 id="anchor3">3. Tận hưởng nó</Heading2>
          <Paragraph>
            Như vậy là trong bài viết này mình hướng dẫn và ghi chép lại quá
            trình mình đã mua tên miền .ETH của ENS Domain như thếo nào rồi.
            Thật sự là nó rất dễ và các ứng dụng DApps đã được thiết kế quá tốt
            để bạn có thể dễ dàng làm được mà không cần hướng dẫn nào. Khi bạn
            làm xong rồi có khi sẽ thấy bài viết của mình dài dòng và luyên
            thuyên quá 😂{" "}
          </Paragraph>
          <Paragraph>
            Trải nghiệm mua tên miền .ETH và dùng ứng dụng phi tập trung thật sự
            rất tuyệt vời, và đây chính là tương lai. Không biết nó sẽ phát
            triển đến đâu nữa nhưng nó chính là những điều tuyệt vời nhất mà
            những con người với mong muốn "Decentralization - Phi tập trung" đã
            tạo ra, một thế giới mới.
          </Paragraph>
          <Paragraph>Hãy thử và trải nghiệm tương lai.</Paragraph>
        </div>
        <EndPostSection telegramid="14">
          <Comments telegramdiscussurl="phongchannel/14" />
        </EndPostSection>
      </div>
    </Container>
  );
}
