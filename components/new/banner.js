import Link from "next/link";
import { francois } from "@/app/layout";

export default function Banner() {
   return <div className="container px-8 mx-auto xl:px-10  max-w-screen-lg py-5 lg:py-8 rounded-xl"
      style={{
         backgroundImage: "url('/img/bgbanner.jpg')",
         backgroundSize: "cover"
      }}>
      <p className={`text-[#223e76] font-bold text-3xl ${francois.className}`}>FinPoint - Finance for Freedom</p>
      <p className={`text-base text-gray-700 pt-2 w-1/2`}>Giải thích tài chính, doanh nghiệp và tiền bạc cá nhân theo cách dễ hiểu, thực tế và thú vị</p>
      <Link href="/archive" className="inline-block mt-4 px-5 py-2 bg-[#223e76] text-white rounded-md text-sm font-medium hover:bg-[#223e76]/90">
         Khám phá bài viết
      </Link>
   </div>
}