"use client";
import { ArrowUpIcon } from "@heroicons/react/24/solid";

// thêm component này phía trên return hoặc tách file riêng
export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-9 right-2 z-50 rounded-full bg-blue-600 p-2 text-white shadow-lg transition hover:bg-blue-700 lg:p-3">
      <ArrowUpIcon className="h-4 w-4 lg:h-5 lg:w-5" />
    </button>
  );
}
