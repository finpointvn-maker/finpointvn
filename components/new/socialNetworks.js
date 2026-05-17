/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";

import {
  GlobeAltIcon,
  UserIcon,
  LinkIcon,
  CodeBracketIcon
} from "@heroicons/react/24/outline";

export default function SocialNetworks() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const socials = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: <img src={"/icons/facebook.svg"} className="h-5 w-5" />
    },
    {
      name: "Tiktok",
      href: "https://instagram.com",
      icon: <img src={"/icons/tiktok.svg"} className="h-5 w-5" />
    }
  ];

  return (
    <div className="fixed bottom-9 left-2 z-50" ref={popupRef}>
      {open && (
        <div className="mb-3 w-36 rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl">
          <div className="flex flex-col gap-1">
            {socials.map(social => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100">
                {social.icon}
                {social.name}
              </a>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(prev => !prev)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition hover:scale-105 hover:bg-blue-700">
        <ChatBubbleLeftRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
