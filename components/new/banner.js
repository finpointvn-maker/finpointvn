import Link from "next/link";
import ContainerContent from "../containerContent";

export default function Banner() {
  return (
    <ContainerContent>
      <div className="bg-fit h-[150px] rounded-xl bg-[url('/img/mission-resize.png')] bg-center bg-no-repeat p-3 lg:h-[250px] lg:p-5 xl:bg-cover">
        <p
          className={`pb-2 pt-2 text-xs text-gray-700 md:w-1/2 md:text-base lg:pb-5`}>
          Chúng tôi xây dựng{" "}
          <span className="font-bold text-[#223e76]">FinPoint</span>{" "}
          nhằm đem đến cho bạn những kiến thức trong lĩnh vực Tài
          chính - Chứng khoán, góc nhìn mới về doanh nghiệp và kĩ năng
          quản lí tài chính cá nhân cho bạn.
        </p>
        <Link
          href="/archive"
          className={`inline-block rounded-md bg-[#223e76] px-2 py-1 text-xs font-medium text-white hover:bg-[#223e76]/90 xl:px-4 xl:py-2 xl:text-sm`}>
          Xem bài viết
        </Link>
      </div>
    </ContainerContent>
  );
}
