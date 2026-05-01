import Link from "next/link";
import { francois } from "@/app/layout";
import Container from "../container";

export default function Banner() {
  return (
    <Container>
      <div
        className="rounded-xl p-4 py-4"
        style={{
          backgroundImage: "url('/img/bgbanner.jpg')",
          backgroundSize: "cover"
        }}>
        {/* <p
        className={`text-2xl font-bold text-[#223e76] md:text-3xl ${francois.className}`}>
        FinPoint - Finance for Freedom
      </p> */}
        <p
          className={`pt-2 text-sm text-gray-700 md:w-1/2 md:text-base`}>
          Chúng tôi xây dựng{" "}
          <span className="font-bold text-[#223e76]">FinPoint</span>{" "}
          nhằm đem đến cho bạn những kiến thức trong lĩnh vực Tài
          chính - Chứng khoán, góc nhìn mới về doanh nghiệp và kĩ năng
          quản lí tài chính cá nhân cho bạn.
        </p>
        <Link
          href="/archive"
          className={`mt-4 inline-block rounded-md bg-[#223e76] px-5 py-2 text-sm font-medium text-white hover:bg-[#223e76]/90`}>
          Xem bài viết
        </Link>
      </div>
    </Container>
  );
}
