/* eslint-disable @next/next/no-img-element */
import { mainColor } from "@/constants/constant";
import { francois } from "@/app/layout";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/" className="w-30 border-none dark:hidden">
      <div className="flex items-center justify-center">
        <img src={"/img/logo.png"} width={80} alt="logo" />
        <div className="text-center ">
          <p
            className={`text-[${mainColor}] text-3xl font-bold ${francois.className}`}>
            FinPoint
          </p>
          <p className={`text-xs text-gray-500`}>
            Finance for Freedom
          </p>
        </div>
      </div>
    </Link>
  );
}
