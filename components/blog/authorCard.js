import Image from "next/image";
import { PortableText } from "@/lib/sanity/plugins/portabletext";
import { urlForImage } from "@/lib/sanity/image";
import Link from "next/link";

export default function AuthorCard({ author }) {
  const imageProps = author?.image ? urlForImage(author.image) : null;
  return (
    <div className="mt-3 rounded-2xl bg-gray-50  py-4 text-gray-500 dark:bg-gray-900 dark:text-gray-400 xl:p-8">
      <div className="flex flex-wrap items-start gap-4 sm:flex-nowrap sm:space-x-6 xl:gap-0">
        <div className="relative mt-1 h-16 w-16 flex-shrink-0 xl:h-24 xl:w-24 ">
          {imageProps && (
            <Link href={`/about`}>
              <Image
                src={imageProps.src}
                alt={author.name}
                className="rounded-full object-cover"
                fill
              />
            </Link>
          )}
        </div>
        <div>
          <div>
            <h3 className="text-base font-medium text-gray-800 dark:text-gray-300 xl:text-lg">
              About {author.name}
            </h3>
          </div>
          <div className="text-sm xl:text-base">
            {author.bio && <PortableText value={author.bio} />}
          </div>
          <div className="mt-3">
            <Link
              href={`/about`}
              className="bg-brand-secondary/20 rounded-full py-2 text-xs text-blue-600 dark:text-blue-500 xl:text-sm ">
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
