import { francois } from "@/app/layout";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <div className="relative h-[200px] xl:h-[400px]">
      <img
        src="/img/about-banner.png"
        alt=""
        className="absolute inset-0 h-full w-full rounded-lg"
      />
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
        <p className={`text-xl font-bold text-[#223e76] xl:text-5xl`}>
          Finance For Freedom
        </p>
        <div className="mx-auto mt-2 h-[2px] w-[80px] bg-[#bf6008] xl:mt-5 xl:w-[150px]"></div>
        <p className="mt-2 text-xs text-gray-700 xl:mt-5 xl:text-base">
          Kiến thức tài chính - Góc nhìn doanh nghiệp
        </p>
        <p className="text-xs text-gray-700 xl:text-base">
          Quản lý tài chính cá nhân
        </p>
      </div>
    </div>
  );
}
