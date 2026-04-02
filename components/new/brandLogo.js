/* eslint-disable @next/next/no-img-element */
import { francois } from "@/app/layout";
import Link from "next/link";

export default function BrandLogo() {
   return <Link href="/" className="w-30 dark:hidden border-none">
      <div className="flex items-center justify-center">
         <img src={'/img/logo.png'} width={80} alt='logo' />
         <div className="text-center ">
            <p className={`text-[#223e76] font-bold text-3xl ${francois.className}`}>FinPoint</p>
            <p className={`text-xs text-gray-500`}>Finance for Freedom</p>
         </div>
      </div>

   </Link>
}