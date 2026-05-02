import Link from "next/link";
import { francois } from "@/app/layout";
import Container from "../container";

export default function Banner() {
  return (
    <Container>
      <div
        className="h-[180px] rounded-xl p-3 lg:h-[250px] lg:p-5"
        style={{
          backgroundImage: "url('/img/mission-resize.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}>
        <p
          className={`pb-2 pt-2 text-sm text-gray-700 md:w-1/2 md:text-base lg:pb-5`}>
          Chúng tôi xây dựng{" "}
          <span className="font-bold text-[#223e76]">FinPoint</span>{" "}
          nhằm đem đến cho bạn những kiến thức trong lĩnh vực Tài
          chính - Chứng khoán, góc nhìn mới về doanh nghiệp và kĩ năng
          quản lí tài chính cá nhân cho bạn.
        </p>
        <Link
          href="/archive"
          className={`inline-block rounded-md bg-[#223e76] px-5 py-2 text-sm font-medium text-white hover:bg-[#223e76]/90`}>
          Xem bài viết
        </Link>
      </div>
    </Container>
  );
}
