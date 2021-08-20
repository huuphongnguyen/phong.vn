import Container from "../../components/Container";
import BlogHeader from "../../components/structures/BlogHeader";
import { NextSeo } from "next-seo";
import TwitterSEO from "../../components/TwitterSEO";
import Paragraph from "../../components/elements/block/Paragraph";
import { IconBrandTwitter, IconWorld } from "@tabler/icons";
import CopyToClipboard from "react-copy-to-clipboard";
import toast from "react-hot-toast";
import EndPostSection from "../../components/structures/EndPostSection";
import Comments from "../../components/Comments";

export default function one_hundred_simple_truths_blog() {
  const seotitle = `100 sự thật đơn giản`;
  const seodescrip = `100 sự thật đơn giản là bài viết mình repost sang tiếng Việt từ 100 Simple Truths của @traf - một người thật sự rất rất giỏi mà mình biết, người được biết đến với vai trò đồng sáng lập của Super - một công cụ giúp biến đổi nhanh trang Notion thành một website. 100 Simple Truths được Traf tổng hợp từ nhiều nguồn và với mình thì bài viết đó rất rất hay, vì vậy mình muốn repost sang tiếng Việt.`;
  const seourl = `https://phong.vn/blog/100`;
  const seopreviewimg =
    "/static/images/100/100-su-that-don-gian-feature-img.png";
  const headerslug = "100";
  const headerpublish = "2021-08-14";
  const headerreadingtime = "16";
  const headerfeatureimggif =
    "https://media.giphy.com/media/l41lLuV3wRmJ0DxCw/giphy.gif";
  const headerauthors = "Nguyễn Hữu Phong";

  function CopyTruthThing() {
    toast(<p className="text-black dark:text-white text-sm">Copied</p>, {
      icon: "👍",
    });
  }

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
            Dành một sự kính trọng và trân trọng nhất dành cho @traf - một
            Digital Designer mà mình theo dõi mỗi ngày từ rất rất lâu rồi. @traf
            là một người có cách suy nghĩ thật sự khác biệt và luôn tạo cho mình
            một cảm giác ngưỡng một khi anh ấy ra mắt một sản phẩm nào đó. @traf
            được biết đến một cách nổi tiếng khi là đồng sáng lập của một sản
            phẩm mang tên Super - một trong những công cụ đã được hơn $40.000
            MMR chỉ trong chưa đầy một năm ra mắt, một con số hoàn toàn xứng
            đáng cho những gì nó mang lại.
          </Paragraph>
          <Paragraph>
            Quay trở lại với bài viết mới nhất của @traf là 100 Simple Truths,
            đây là một bài viết đã được anh ấy tự tay biên soạn từ rất rất nhiều
            nguồn, từ chính kinh nghiệm và mindset của anh ấy. Và mỗi điều trong
            đó đều là một thứ khiến mình phải suy nghĩ rất rất nhiều. Gần như
            mình đọc nó mỗi ngày kể từ khi @traf đăng tải nó. Đó chính là lí do
            mình muốn đăng tải lại (repost) nó trên trang của mình, tất nhiên
            mình sẽ cố gắng diễn đạt lại ý nghĩa của những điều này bằng tiếng
            Việt.
          </Paragraph>
          <Paragraph>
            Bạn có thể xem bài viết gốc tại:{" "}
            <a href="https://tr.af/100" target="_blank" className="font-bold">
              tr.af/100
            </a>
          </Paragraph>
          <Paragraph>Và hãy follow @traf</Paragraph>
          <div>
            <div className="flex items-center space-x-2">
              <a href="https://twitter.com/traf" target="_blank">
                <div className="p-2 inline-flex items-center space-x-1 border-2 border-black dark:border-white">
                  <IconBrandTwitter className="text-black dark:text-white" />
                  <p className="text-black dark:text-white text-sm font-bold">
                    @traf
                  </p>
                </div>
              </a>
              <a href="https://tr.af" target="_blank">
                <div className="p-2 inline-flex items-center space-x-1 border-2 border-black dark:border-white">
                  <IconWorld className="text-black dark:text-white" />
                  <p className="text-black dark:text-white text-sm font-bold">
                    tr.af
                  </p>
                </div>
              </a>
            </div>
          </div>
          <Paragraph>
            Và dưới đây là những điều đó. Một lưu ý là phần dịch của mình có thể
            hơi thô bởi mình không giỏi dịch lắm, mình thấy câu tiếng Anh vẫn
            đầy đủ nghĩa nhất rồi. Ngoài ra bạn có thể bấm vào từng câu để copy
            cả câu nhanh.
          </Paragraph>
          <div className="pl-9">
            <ul className="list-decimal text-black dark:text-white text-xl font-bold">
              {OneHunredSimpleTruths.map((truth, index) => (
                <li key={index} className="text-black dark:text-white">
                  <CopyToClipboard text={truth[0]} onCopy={CopyTruthThing}>
                    <p className="font-bold text-xl rainbow_text_hover cursor-pointer transition-all active:scale-[0.9]">
                      {truth[0]}
                    </p>
                  </CopyToClipboard>
                  <p className="text-sm font-normal">{truth[1]}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <EndPostSection telegramid="18">
          <Comments telegramdiscussurl="phongchannel/18" />
        </EndPostSection>
      </div>
    </Container>
  );
}

export const OneHunredSimpleTruths = [
  [
    "It’s 100% off if you don’t buy it.",
    "Nó giảm giá 100% nếu như bạn không mua nó.",
  ],
  [
    "Not wanting something is as good as having it.",
    "Không muốn một cái gì đó cũng tốt như có nó vậy.",
  ],
  [
    "Someone else’s success isn’t your failure.",
    "Thành công của người khác không phải là thất bại của bạn.",
  ],
  [
    "A question opens the mind, a statement keeps it closed.",
    "Một câu hỏi mở ra tâm trí, một tuyên bố giữ cho nó đóng lại.",
  ],
  [
    "Spending time on things you can't control takes time away from things you can.",
    "Dành thời gian cho những điều bạn không thể kiểm soát sẽ làm mất thời gian của những điều bạn có thể kiểm soát.",
  ],
  [
    "Being creative is just combining interest with initiative.",
    "Sáng tạo chỉ là kết hợp sự quan tâm với sáng kiến.",
  ],
  [
    "Success, like happiness, cannot be pursued. It must ensue.",
    "Thành công, giống như hạnh phúc, không thể theo đuổi. Nó phải xảy ra sau đó.",
  ],
  [
    "Value compliments and insults the same.",
    "Giá trị lời khen và lời lăng mạ như nhau.",
  ],
  [
    "Consuming information won't make you smart, applying it will.",
    "Sử dụng thông tin sẽ không làm cho bạn trở nên thông minh, nhưng áp dụng nó sẽ làm được.",
  ],
  [
    "Be happy with what you have, while you work for what you want.",
    "Hãy hạnh phúc với những gì bạn có, trong khi bạn làm những gì bạn muốn.",
  ],
  [
    "Life is too short to not be pursuing the best opportunity you know of.",
    "Cuộc sống quá ngắn ngủi để không theo đuổi cơ hội tốt nhất mà bạn biết.",
  ],
  [
    "Inspiration is a productivity multiplier, but it’s perishable. Act quickly.",
    "Cảm hứng là một nhân tố năng suất, nhưng nó rất dễ biến mất. Hãy hành động nhanh chóng.",
  ],
  [
    "Minimalism isn't about owning nothing, it’s about nothing owning you.",
    "Chủ nghĩa tối giản không phải là không sở hữu gì, mà là không có gì sở hữu bạn.",
  ],
  [
    "Demotivated because of how long it’ll take? Remember the time will pass anyways.",
    "Thiếu động lực bởi vì điều đó sẽ tốn nhiều thời gian? Hãy luôn nhớ thời gian luôn luôn trôi.",
  ],
  [
    "People don't care what you can do, they care about what you can do for them.",
    "Mọi người không quan tâm bạn có thể làm gì, họ quan tâm đến những gì bạn có thể làm cho họ.",
  ],
  [
    "How much you eat affects your size, how much you move affects your shape.",
    "Mức độ bạn ăn ảnh hưởng đến kích thước của bạn, mức độ bạn di chuyển ảnh hưởng đến hình dạng của bạn.",
  ],
  [
    "Not having the time for it is another way of saying it’s not important.",
    "Không có thời gian cho nó là một cách khác để nói rằng nó không quan trọng.",
  ],
  [
    "Choose consistency over intensity, because consistency compounds.",
    "Câu này mình thật sự cũng chưa hiểu 😲",
  ],
  [
    "Most traditions are solutions to forgotten problems.",
    "Hầu hết các truyền thống là giải pháp cho các vấn đề bị lãng quên.",
  ],
  [
    "You were born in one day, you will die in one day, you can change in one day.",
    "Bạn sinh ra trong một ngày, bạn sẽ chết trong một ngày, bạn có thể thay đổi trong một ngày.",
  ],
  [
    "Yesterday is gone, tomorrow isn't promised, today is all there is.",
    "Ngày hôm qua không còn, ngày mai không chắc, hôm nay có tất cả.",
  ],
  [
    "Focus on nothing when it doesn’t matter, so you’ll focus better when it does.",
    "Không tập trung vào bất cứ điều gì khi điều đó không quan trọng, vì vậy bạn sẽ tập trung tốt hơn khi điều đó xảy ra.",
  ],
  [
    "More choices often lead to less action. Do more by doing less.",
    "Nhiều lựa chọn hơn thường dẫn đến ít hành động hơn. Làm nhiều hơn bằng cách làm ít hơn.",
  ],
  [
    "It’s not the thing itself that upsets you, but your interpretation of it.",
    "Bản thân nó không phải là điều khiến bạn khó chịu, mà là cách diễn giải của bạn về nó.",
  ],
  [
    "Focus is repeatedly saying no to almost everything.",
    "Tập trung liên tục nói không với hầu hết mọi thứ.",
  ],
  [
    "You can either build your dream, or help someone build theirs.",
    "Bạn có thể xây dựng ước mơ của mình hoặc giúp ai đó xây dựng ước mơ của họ.",
  ],
  [
    "Stop trading time for money, start trading value for money.",
    "Đã đến lúc dừng thời gian giao dịch đối với tiền, bắt đầu giao dịch giá trị của tiền.",
  ],
  [
    "Learning how to learn is one of the best investments of your time.",
    "Học cách học là một trong những cách đầu tư thời gian tốt nhất của bạn.",
  ],
  [
    "Your circumstances have nothing to do with your emotional state.",
    "Hoàn cảnh của bạn không liên quan gì đến trạng thái cảm xúc của bạn.",
  ],
  [
    "Discipline is choosing between what you want now and what you want most.",
    "Kỷ luật là lựa chọn giữa những gì bạn muốn bây giờ và những gì bạn muốn nhất.",
  ],
  [
    "The real value of money is what you can afford to no longer do.",
    "Giá trị thực của đồng tiền là những gì bạn có thể chi trả để không còn làm điều đó nữa.",
  ],
  [
    "If you lower your expectations, you’ll rarely be disappointed.",
    "Nếu bạn hạ thấp kỳ vọng của mình, bạn sẽ hiếm khi thất vọng.",
  ],
  [
    "Creativity is an infinite resource—the more you spend, the more you have.",
    "Sáng tạo là một nguồn tài nguyên vô hạn — bạn càng chi tiêu nhiều, bạn càng có nhiều hơn.",
  ],
  [
    "Every 'no' improves your ability to fulfill on a future yes.",
    "Mỗi từ 'không' sẽ cải thiện khả năng của bạn để hoàn thành một câu trả lời có trong tương lai.",
  ],
  [
    "The gap between where you are and where you want to be is closer than you think.",
    "Khoảng cách giữa nơi bạn đang ở và nơi bạn muốn đến gần hơn bạn nghĩ.",
  ],
  [
    "Your ideas are worth nothing without the will to act on them.",
    "Ý tưởng của bạn chẳng có giá trị gì nếu không có ý chí hành động.",
  ],
  [
    "Be interesting to others by being interested in them.",
    "Hãy thú vị với người khác bằng cách quan tâm đến họ.",
  ],
  [
    "Every single person you meet knows something you don’t.",
    "Mỗi người bạn gặp đều biết một vài điều gì đó mà bạn không biết.",
  ],
  [
    "Speak when you have something to say, not when you want to say something.",
    "Nói khi bạn có điều gì đó để nói, không phải khi bạn muốn nói điều gì đó.",
  ],
  [
    "Mediocrity is the path of least resistance, also making it the most competitive.",
    "Tầm thường là con đường ít phản kháng nhất, cũng là con đường cạnh tranh nhất.",
  ],
  [
    "Being busy is not a badge of honor—it's a lack of freedom.",
    "Bận rộn không phải là một huy hiệu của danh dự — đó là sự thiếu tự do.",
  ],
  [
    "Your thoughts and feelings are choices. Control them or they'll control you.",
    "Suy nghĩ và cảm xúc của bạn là sự lựa chọn. Kiểm soát chúng hoặc chúng sẽ kiểm soát bạn.",
  ],
  [
    "You don't lack motivation, you lack a better reason.",
    "Bạn không thiếu động lực, bạn thiếu một lý do tốt hơn.",
  ],
  [
    "Time is your most valuable resource, spend it wisely.",
    "Thời gian là tài nguyên quý giá nhất của bạn, hãy sử dụng nó một cách khôn ngoan.",
  ],
  [
    "Admit when you’re wrong, show humility when you’re right.",
    "Thừa nhận khi bạn sai, thể hiện sự khiêm tốn khi bạn đúng.",
  ],
  [
    "Your brain doesn’t fill up with more information, it expands along with it.",
    "Bộ não của bạn không chứa nhiều thông tin hơn, nó mở rộng ra cùng với những điều đó.",
  ],
  [
    "If it takes less than 5 minutes, don’t schedule it, do it now.",
    "Nếu chỉ mất chưa đến 5 phút, đừng lên lịch, hãy làm ngay.",
  ],
  [
    "Your biggest competitor in life is yourself.",
    "Đối thủ cạnh tranh lớn nhất của bạn trong cuộc sống là chính bạn.",
  ],
  [
    "Life only gives you what you decided you could have.",
    "Cuộc sống chỉ cho bạn những gì bạn quyết định bạn có thể có.",
  ],
  [
    "The internet removes the barrier from how much you can learn about anything.",
    "Internet xóa bỏ rào cản về việc bạn có thể tìm hiểu về bất cứ thứ gì.",
  ],
  [
    "Ignore the noise, people will criticize you no matter what you do.",
    "Bỏ ngoài tai những ồn ào đi, mọi người sẽ chỉ trích bạn dù bạn có làm gì đi chăng nữa.",
  ],
  [
    "Avoiding stupidity can often be a better strategy than seeking out brilliance.",
    "Tránh sự ngu ngốc thường có thể là một chiến lược tốt hơn là tìm kiếm sự thông minh.",
  ],
  [
    "If you have time to consume, you have time to create.",
    "Nếu bạn có thời gian để tiêu dùng một điều gì đó, bạn cũng có thời gian để tạo ra một cái gì đó.",
  ],
  [
    "There’s no right or wrong time, there’s just time and what you choose to do with it.",
    "Không có đúng hay sai thời điểm, chỉ có thời gian và những gì bạn chọn để làm với nó.",
  ],
  [
    "You can steal all the ideas you want, but action can only come from within.",
    "Bạn có thể đánh cắp tất cả những ý tưởng bạn muốn, nhưng hành động chỉ có thể đến từ bên trong.",
  ],
  [
    "Get comfortable with changing your mind after learning new information.",
    "Hãy thoải mái với việc thay đổi suy nghĩ của bạn sau khi tìm hiểu thông tin mới.",
  ],
  [
    "Food fuels your brain, information fuels your mind. You are what you consume.",
    "Thức ăn cung cấp năng lượng cho não của bạn, thông tin cung cấp năng lượng cho trí óc của bạn. Bạn là những gì bạn tiêu thụ chúng.",
  ],
  [
    "Read to find new ideas, write to understand them, implement to learn from them.",
    "Đọc để tìm ý tưởng mới, viết để hiểu chúng, thực hiện để học hỏi từ chúng.",
  ],
  [
    "Your current habits are a sneak peek of your desired future.",
    "Những thói quen hiện tại của bạn là một cái nhìn trước về tương lai mong muốn của bạn.",
  ],
  [
    "The best teachers are your previous mistakes.",
    "Những người thầy tốt nhất là những sai lầm trước đây của bạn.",
  ],
  [
    "Working hard doesn’t get you anywhere if you’re working on the wrong thing.",
    "Làm việc chăm chỉ sẽ không đưa bạn đến đâu nếu bạn đang làm sai việc.",
  ],
  [
    "Being alone is physical, feeling alone is mental.",
    "Ở một mình là thể chất, cảm thấy cô đơn là tinh thần.",
  ],
  [
    "Silence is a blank canvas for your thoughts.",
    "Im lặng là một bức tranh trống cho những suy nghĩ của bạn.",
  ],
  [
    "If it doesn't feel like work, no one can compete with you.",
    "Nếu cảm thấy không thích làm việc, không ai có thể cạnh tranh với bạn.",
  ],
  [
    "Compare upwards and feel envy, compare downwards and feel grateful.",
    "So sánh phía trên và cảm thấy ghen tị, so sánh phía dưới và cảm thấy biết ơn.",
  ],
  [
    "You are not what you say or think, you are what you do.",
    "Bạn không phải là những gì bạn nói hoặc nghĩ, bạn là những gì bạn làm.",
  ],
  [
    "There are no million dollar ideas, only million dollar executions.",
    "Không có ý tưởng triệu đô, chỉ có những thực thi triệu đô.",
  ],
  [
    "What you believe is what you settle for.",
    "Những gì bạn tin là những gì bạn giải quyết.",
  ],
  [
    "Saying yes benefits others, saying no benefits you.",
    "Nói có mang lại lợi ích cho người khác, nói không có lợi cho bạn.",
  ],
  [
    "The quality of your mind determines the quality of your life.",
    "Chất lượng tâm trí của bạn quyết định chất lượng cuộc sống của bạn.",
  ],
  [
    "Being great is just being consistently good.",
    "Trở nên tuyệt vời là luôn luôn tốt.",
  ],
  [
    "Spending time on things that buy you time is always a good use of it.",
    "Dành thời gian cho những thứ giúp bạn có thời gian luôn là một cách tận dụng tốt.",
  ],
  [
    "The dots only connect in retrospect.",
    "Các dấu chấm chỉ kết nối khi nhìn lại.",
  ],
  [
    "Consuming puts you to work for the internet, creating puts the internet to work for you.",
    "Tiêu dùng khiến bạn làm việc cho Internet, sáng tạo khiến Internet hoạt động cho bạn.",
  ],
  [
    "Hours don't equal output.",
    "Số giờ bạn làm không đồng nghĩa sản lượng bạn làm ra cũng bằng như vậy.",
  ],
  ["Luck favors those in motion.", ""],
  [
    "What separates creators & consumers isn't the ability to create, but the willingness to publish.",
    "Điều ngăn cách giữa người sáng tạo và người tiêu dùng không phải là khả năng sáng tạo mà là sự sẵn lòng xuất bản.",
  ],
  [
    "If you never get bored of learning, you'll never get tired of living.",
    "Nếu bạn không bao giờ cảm thấy chán học, bạn sẽ không bao giờ cảm thấy mệt mỏi với cuộc sống.",
  ],
  [
    "The more you move, the easier it is to keep moving.",
    "Bạn càng di chuyển, bạn càng dễ dàng tiếp tục di chuyển.",
  ],
  [
    "The only productivity hack you need is enjoying what you do.",
    "Cách tăng năng suất duy nhất bạn cần là tận hưởng những gì bạn làm.",
  ],
  [
    "How you do anything, is how you do everything.",
    "Bạn làm bất cứ điều gì, là cách bạn làm mọi thứ.",
  ],
  [
    "Beliefs are more about belonging than they are about truth.",
    "Niềm tin thiên về sự phụ thuộc về hơn là sự thật.",
  ],
  [
    "Continuous improvement is better than delayed perfection.",
    "Cải tiến liên tục sẽ tốt hơn sự hoàn thiện bị trì hoãn.",
  ],
  [
    "Do many things that you like to find the few things that you love.",
    "Làm nhiều việc mà bạn thích để tìm ra những thứ mà bạn yêu.",
  ],
  [
    "Your first impression isn’t your appearance, it’s your energy.",
    "Ấn tượng đầu tiên của bạn không phải là ngoại hình, mà là nghị lực của bạn.",
  ],
  [
    "You're not bad at something, you're just new to it.",
    "Bạn không tệ ở một thứ gì đó, bạn chỉ là người mới làm quen với nó.",
  ],
  [
    "Death is the price we pay for life, learn to make peace with it.",
    "Cái chết là cái giá mà chúng ta phải trả cho cuộc sống, hãy học cách làm hòa với nó",
  ],
  [
    "The sooner you pay the price, the less it will cost you in the long run.",
    "Bạn trả giá càng sớm, bạn càng ít phải trả giá về lâu dài.",
  ],
  [
    "Motivation more often comes after starting, not before.",
    "Động lực thường đến sau khi bắt đầu, không phải trước đó.",
  ],
  [
    "Integrity is being the same person no matter the circumstance.",
    "Chính trực là cùng một người trong bất kể hoàn cảnh nào.",
  ],
  [
    "Increase your rate of success by increasing your rate of failure.",
    "Tăng tỷ lệ thành công của bạn bằng cách tăng tỷ lệ thất bại.",
  ],
  [
    "The cost of anything in life is either money, time, or attention.",
    "Cái giá phải trả của bất cứ thứ gì trong cuộc sống là tiền bạc, thời gian hoặc sự chú ý.",
  ],
  [
    "Discipline is doing what you hate to do as if you love it.",
    "Kỷ luật là làm những gì bạn ghét làm như thể bạn yêu thích nó.",
  ],
  [
    "The less you have to work with, the more you'll do with what you have.",
    "Bạn càng ít phải làm việc, bạn càng làm được nhiều hơn với những gì bạn có.",
  ],
  [
    "Absorb what's useful, discard what isn't, add what's uniquely yours.",
    "Hấp thụ những gì hữu ích, loại bỏ những gì không, thêm những gì độc đáo của bạn.",
  ],
  [
    "Most bad things in life come from either too much or too little of any one thing.",
    "Hầu hết những điều tồi tệ trong cuộc sống đều đến từ quá nhiều hoặc quá ít của bất kỳ điều gì.",
  ],
  [
    "If you’re reading this, you have everything you need to start.",
    "Nếu bạn đang đọc điều này, bạn có mọi thứ bạn cần để bắt đầu.",
  ],
  [
    "Peace is the absence of desire.",
    "Nếu bạn không còn khao khát, lúc đó bạn sẽ cảm thấy yên bình.",
  ],
  ["No one owes you anything.", "Không ai nợ bạn bất cứ điều gì."],
  ["See #99.", "Đọc lại điều 99"],
];
