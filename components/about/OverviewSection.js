/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/outline";

export default function OverviewSection() {
  return (
    <div className="flex h-[350px] flex-col justify-between rounded-lg p-8 shadow-xl">
      <div>
        <p className="pb-2 text-xl font-bold text-[#223e76]">
          Người đồng hành cùng FinPoint!
        </p>
        <p>
          Mình là <strong>Nguyễn Thị Hoa</strong>, quan tâm tới lĩnh
          vực <strong>tài chính – đầu tư</strong> và mình xây dựng
          FinPoint là một nơi để chia sẻ những kiến thức, góc nhìn cá
          nhân mà mình tích lũy được trong quá trình học hỏi và làm
          việc.
        </p>
        <p>
          Mình mong FinPoint sẽ giúp những chủ đề{" "}
          <strong>tài chính – đầu tư</strong> trở nên{" "}
          <strong> đúng hơn, gần hơn và thực tế hơn</strong> với nhiều
          người hơn.
        </p>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-[#e8f1f8] px-4 py-3">
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
