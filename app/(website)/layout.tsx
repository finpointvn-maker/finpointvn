import { getSettings } from "@/lib/sanity/client";
import Footer from "@/components/footer";
import { urlForImage } from "@/lib/sanity/image";
import Navbar from "@/components/navbar";
const DOMAIN = process.env.SITE_URL || "https://www.finpoint.info.vn";

async function sharedMetaData(params) {
  const settings = await getSettings();
  return {
    metadataBase: new URL(DOMAIN),
    title: {
      default: settings?.title || "FinPoint - Finance for Freedom",
      template: "FinPoint - Finance for Freedom"
    },
    description:
      settings?.description || "FinPoint - Finance for Freedom",
    keywords: ["FinPoint", "Finance", "Finance for Freedom"],
    authors: [{ name: "Nguyen Thi Hoa" }],
    canonical: settings?.url,
    openGraph: {
      url: DOMAIN,
      images: [
        {
          url:
            urlForImage(settings?.openGraphImage)?.src ||
            `${DOMAIN}/img/preview.png`,
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "FinPoint - Finance for Freedom",
      card: "summary_large_image",
      description: settings?.description,
      images: [
        urlForImage(settings?.openGraphImage)?.src ||
          `${DOMAIN}/img/preview.png`
      ]
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

export default async function Layout({ children, params }) {
  const settings = await getSettings();
  return (
    <>
      <Navbar {...settings} />

      <div className="flex-1">{children}</div>
      {/* <SocialNetworks /> */}
      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
