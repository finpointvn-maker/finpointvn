import Link from "next/link";
import { francois } from "@/app/layout";
import { mainColor } from "@/app/constants/constant";

export default function Banner() {
   return <div className="container w-11/12 md:w-1/2 mx-auto py-4 p-4 md:px-8 rounded-xl"
      style={{
         backgroundImage: "url('/img/bgbanner.jpg')",
         backgroundSize: "cover",
      }}>
      <p className={`text-[${mainColor}] font-bold text-2xl md:text-3xl ${francois.className}`}>FinPoint - Finance for Freedom</p>
      <p className={`text-sm md:text-base text-gray-700 pt-2 md:w-1/2`}>Giải thích tài chính, doanh nghiệp và tiền bạc cá nhân theo cách dễ hiểu, thực tế và thú vị</p>
      <Link href="/archive" className={`inline-block mt-4 px-5 py-2 bg-[${mainColor}] text-white rounded-md text-sm font-medium hover:bg-[${mainColor}]/90`}>
         Khám phá bài viết
      </Link>
   </div>
}