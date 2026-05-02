/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function OverviewSection() {
  return (
    <div className="flex lg:h-[350px] h-[300px] flex-col justify-between rounded-lg p-4 shadow-xl lg:p-8">
      <div>
        <p className="pb-2 text-lg font-bold text-[#223e76] lg:text-xl">
          Người đồng hành cùng FinPoint!
        </p>
        <p className="text-sm lg:text-base">
          Mình là <strong>Nguyễn Thị Hoa</strong>, quan tâm tới lĩnh
          vực <strong>tài chính – đầu tư</strong> và mình xây dựng
          FinPoint là một nơi để chia sẻ những kiến thức, góc nhìn cá
          nhân mà mình tích lũy được trong quá trình học hỏi và làm
          việc.
        </p>
        <p className="text-sm lg:text-base">
          Mình mong FinPoint sẽ giúp những chủ đề{" "}
          <strong>tài chính – đầu tư</strong> trở nên{" "}
          <strong> đúng hơn, gần hơn và thực tế hơn</strong> với nhiều
          người hơn.
        </p>
      </div>

      <div className="flex items-center justify-between gap-2 rounded-lg bg-[#e8f1f8] p-3 lg:flex-row lg:gap-0">
        <div className="flex gap-2">
          <EnvelopeIcon className="w-4 text-[#223e76]" />
          <p className="text-sm font-bold lg:text-base">
            <a
              className="text-sm text-[#223e76] lg:text-base"
              href="mailto:finpoint.vn@gmail.com">
              finpoint.vn@gmail.com
            </a>
          </p>
        </div>
        <Link
          className="rounded-lg border-2 border-[#223e76] bg-white px-3 py-1 text-sm hover:bg-[#223e76] hover:text-white lg:text-base"
          href={"/contact"}>
          Liên hệ
        </Link>
      </div>
    </div>
  );
}
