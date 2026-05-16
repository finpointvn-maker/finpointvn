/* eslint-disable @next/next/no-img-element */
import { mainColor } from "@/constants/constant";
import { francois } from "@/app/layout";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link href="/" className="w-30 border-none dark:hidden">
      <div className="flex items-center justify-center">
        <img
          className="w-16 xl:w-20"
          src={"/img/logo.png"}
          alt="logo"
        />
        <div>
          <p
            className={`text-[${mainColor}] text-base font-bold xl:text-3xl ${francois.className}`}>
            FinPoint
          </p>
          <p className={`text-[0.6rem] text-gray-500 xl:text-xs`}>
            Finance for Freedom
          </p>
        </div>
      </div>
    </Link>
  );
}
