import Container from "../components/Container";
import NextLink from "next/link";

export default function License() {
  return (
    <Container>
      <div className="items-start mx-auto w-full max-w-3xl">
        <div className="inline-flex items-center space-x-1 text-black dark:text-white text-base uppercase font-sourcecodepro mt-5">
          <NextLink href="/">
            <a>
              <p className="text-gray-300 dark:text-gray-600 hover:text-black dark:hover:text-white">
                FRONT-PAGE
              </p>
            </a>
          </NextLink>
          <p>/</p>
          <h1>License</h1>
        </div>
        <div className="text-black dark:text-white space-y-2 mt-4">
          <h2 className="font-bold text-black dark:text-white text-2xl">
            P License 2021
          </h2>
          <p className="text-black dark:text-white text-sm">
            Cập nhật lần cuối: 2021/08/06 20:08PM
          </p>
          <h3 className="text-black dark:text-white font-bold">
            Đối với nội dung / hình ảnh / media
          </h3>
          <ul className="text-sm space-y-2 list-disc pl-5">
            <li>
              <p>
                Mọi hành vi sao chép (copy), sử dụng, đăng tải lại nội dung,
                hoặc bất kỳ hình thức tương tự nào khác đều là trái phép nếu
                không có sự đồng ý của Nguyễn Hữu Phong.
              </p>
            </li>
            <li>
              <p>
                Vui lòng dẫn nguồn bài viết bằng đường dẫn động đến website này
                (backlink). Dẫn nguồn bài viết bằng đường dẫn không có giá trị
                nhấp (chuyển hướng đến website này) là trái phép.
              </p>
            </li>
            <li>
              <p>
                Mọi hành sử dụng nội dung của website này để đả kích, tạo hiệu
                ứng tiêu cực, cố tình viết sai sự thật là trái phép. Website này
                sẽ không chịu bất kỳ trách nhiệm liên quan nào nếu có vấn đề xảy
                ra.
              </p>
            </li>
            <li>
              <p>
                Toàn bộ nội dung của website này đều do Nguyễn Hữu Phong viết,
                sáng tạo, biên tập, cùng sự hỗ trợ (đồng ý) của những bên thứ ba
                khác liên quan.
              </p>
            </li>
          </ul>
          <h3 className="text-black dark:text-white font-bold">
            Đối với mã nguồn / source code
          </h3>
          <ul className="text-sm space-y-2 list-disc pl-5">
            <li>
              <p>
                Được phép sử dụng mã nguồn của website này như một nguồn cảm
                hứng sáng tạo, tham khảo.
              </p>
            </li>
            <li>
              <p>Vui lòng không sao chép trực tiếp.</p>
            </li>
            <li>
              <p>
                Dẫn nguồn đến trang Github chứa mã nguồn của website này là một
                điều trân trọng.
              </p>
            </li>
          </ul>
          <h3 className="text-black dark:text-white font-bold">
            Đối với tài nguyên / dữ liệu của bên thứ 3
          </h3>
          <ul className="text-sm space-y-2 list-disc pl-5">
            <li>
              <p>
                Vui lòng kiểm tra kỹ License / Quyền sử dụng của các tài nguyên
                / dữ liệu bên thứ ba được dùng trên website này trước khi sử
                dụng lại với nhu cầu / mục đích riêng.
              </p>
            </li>
            <li>
              <p>
                Tài nguyên / dữ liệu của các bên thứ ba dùng trên website này
                đều được mua license (nếu có) hoặc dùng dưới phạm vi cho phép
                của chủ sở hữu. Mọi hành vi sao chép, sử dụng lại bên ngoài
                website này sẽ không liên quan đến Nguyễn Hữu Phong (chủ sở hữu
                website này). Nguyễn Hữu Phong sẽ không chịu bất kỳ trách nhiệm
                này nếu có vấn đề xảy ra liên quan.
              </p>
            </li>
          </ul>
          <p className="text-black dark:text-white text-sm">
            Mọi thắc mắc / vấn đề cần hỗ trợ liên quan, vui lòng gửi email thông
            qua địa chỉ <strong>phong@phong.vn</strong>.
          </p>
        </div>
      </div>
    </Container>
  );
}
