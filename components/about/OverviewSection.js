/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { UserIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function OverviewSection() {
  return (
    <div className="flex h-[250px] flex-col justify-between rounded-lg p-4 shadow-xl lg:h-[350px] lg:p-8">
      <div>
        <p className="pb-2 text-base font-bold text-[#223e76] lg:text-xl">
          Người đồng hành cùng FinPoint!
        </p>
        <p className="text-xs lg:text-base">
          Mình là <strong>Nguyễn Thị Hoa</strong>, quan tâm tới lĩnh
          vực <strong>tài chính – đầu tư</strong> và mình xây dựng
          FinPoint là một nơi để chia sẻ những kiến thức, góc nhìn cá
          nhân mà mình tích lũy được trong quá trình học hỏi và làm
          việc.
        </p>
        <p className="text-xs lg:text-base">
          Mình mong FinPoint sẽ giúp những chủ đề{" "}
          <strong>tài chính – đầu tư</strong> trở nên{" "}
          <strong> đúng hơn, gần hơn và thực tế hơn</strong> với nhiều
          người hơn.
        </p>
      </div>

      <div className="flex items-center justify-between gap-2 rounded-lg bg-[#e8f1f8] p-2 lg:flex-row lg:gap-0 xl:p-3">
        <div className="flex gap-2">
          <EnvelopeIcon className="w-4 text-[#223e76]" />
          <a
            className="text-xs font-bold text-[#223e76] lg:text-base"
            href="mailto:finpoint.vn@gmail.com">
            finpoint.vn@gmail.com
          </a>
        </div>
        <Link
          href="/contact"
          className={`inline-block rounded-md bg-[#223e76] px-3 py-2 text-xs font-medium text-white hover:bg-[#223e76]/90 xl:px-4 xl:text-sm`}>
          Liên hệ
        </Link>
      </div>
    </div>
  );
}
