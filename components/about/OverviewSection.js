/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";

export default function OverviewSection() {
  return (
    <div className="flex h-[350px] flex-col justify-between rounded-lg p-8 shadow-xl">
      <div>
        <p className="pb-5 text-xl font-bold text-[#223e76]">
          FinPoint được xây dựng bởi ai?
        </p>
        <p>
          FinPoint được xây dựng bởi <strong>Hoa Nguyen</strong>,
          người quan tâm tới lĩnh vực tài chính - đầu tư, với mong
          muốn chia sẻ kiến thức, góc nhìn phân tích doanh nghiệp và
          các nội dung tài chính mang tính ứng dụng thực tiễn.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between rounded-lg bg-[#e8f1f8] px-4 py-2">
        <div className="flex gap-2">
          <UserIcon className="w-4 text-[#223e76]" />
          <p className="font-bold">
            Liên hệ:{" "}
            <a
              className="text-[#223e76]"
              href="mailto:finpoint.vn@gmail.com">
              finpoint.vn@gmail.com
            </a>
          </p>
        </div>
        <Link
          className="rounded-lg border-2 border-[#223e76] bg-white px-6 py-1 hover:bg-[#223e76] hover:text-white"
          href={"/contact"}>
          Liên hệ
        </Link>
      </div>
    </div>
  );
}
