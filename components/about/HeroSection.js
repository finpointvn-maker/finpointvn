import { francois } from "@/app/layout";

/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <div className="relative h-[400px] ">
      <img
        src="/img/about-banner.png"
        alt=""
        className="absolute inset-0 h-full w-full rounded-lg"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <p
          className={`text-4xl font-bold text-[#223e76] underline decoration-[#bf6008] underline-offset-[30px] `}>
          Finance For Freedom
        </p>
        <p className="mt-10 text-gray-700 ">
          Kiến thức tài chính - Góc nhìn doanh nghiệp
        </p>
        <p className="text-gray-700">Quản lý tài chính cá nhân</p>
      </div>
    </div>
  );
}
