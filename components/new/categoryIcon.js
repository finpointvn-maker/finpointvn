"use client";
import { mainColor } from "@/constants/constant";
import getColorHex from "@/utils/getColorHex";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function CategoryIcon({ category, isActive }) {
  const color = getColorHex(category.color) ?? mainColor;
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleClick(slug) {
    const params = new URLSearchParams(searchParams);
    const current = params.get("category");
    if (current === slug) {
      params.delete("category");
    } else {
      params.set("category", slug);
    }
    const query = params.toString();
    router.push(`/archive?${query}`);
  }
  return (
    <div
      className={`relative h-[40px] cursor-pointer rounded-lg border px-4 py-2 lg:h-[90px] lg:w-1/3`}
      style={{
        borderColor: hover ? color : "",
        backgroundColor: hover ? color + "25" : color + "10",
        transition: "all 0.3s ease"
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleClick(category.slug.current)}>
      {isActive && (
        <CheckCircleIcon
          className="absolute right-2 top-2 h-5 w-5"
          style={{ color }}
        />
      )}
      <p className={`text-[${mainColor}] font-semibold`}>
        {category.title}
      </p>
      <p className="hidden lg:line-clamp-2">{category.description}</p>
    </div>
  );
}
