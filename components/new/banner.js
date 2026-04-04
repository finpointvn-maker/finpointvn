import Link from "next/link";
import { francois } from "@/app/layout";

export default function Banner() {
  return (
    <div
      className="container mx-auto w-11/12 rounded-xl p-4 py-4 md:w-1/2 md:px-8"
      style={{
        backgroundImage: "url('/img/bgbanner.jpg')",
        backgroundSize: "cover"
      }}>
      <p
        className={`text-2xl font-bold text-[#223e76] md:text-3xl ${francois.className}`}>
        FinPoint - Finance for Freedom
      </p>
      <p
        className={`pt-2 text-sm text-gray-700 md:w-1/2 md:text-base`}>
        Giải thích tài chính, doanh nghiệp và tiền bạc cá nhân theo
        cách dễ hiểu, thực tế và thú vị
      </p>
      <Link
        href="/archive"
        className={`mt-4 inline-block rounded-md bg-[#223e76] px-5 py-2 text-sm font-medium text-white hover:bg-[#223e76]/90`}>
        Khám phá bài viết
      </Link>
    </div>
  );
}
