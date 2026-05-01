/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function OverviewSection() {
  return (
    <div className="flex h-[300px] flex-col justify-between rounded-lg p-4 shadow-xl">
      <div>
        <p>FinPoint được xây dựng bởi ai?</p>
        <p>
          FinPoint được xây dựng bởi <strong>Hoa Nguyen</strong>,
          người quan tâm tới lĩnh vực tài chính - đầu tư, với mong
          muốn chia sẻ kiến thức, góc nhìn phân tích doanh nghiệp và
          các nội dung tài chính mang tính ứng dụng thực tiễn.
        </p>
      </div>

      <div className="mt-10 flex justify-between">
        <div>
          <img src="" alt="" />
          <p>
            Liên hệ: <a href="mailto:a@gmail.com">a@gmail.com</a>{" "}
          </p>
        </div>
        <Link href={"/contact"}>Liên hệ</Link>
      </div>
    </div>
  );
}
