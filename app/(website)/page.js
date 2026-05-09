import Banner from "@/components/new/banner";
import HomePage from "./home";
import { getAllPostsHomePage } from "@/lib/sanity/client";

export default async function IndexPage() {
  const posts = await getAllPostsHomePage();
  return <>
    <Banner />
    <HomePage posts={posts} />
  </>
}

export const revalidate = 0;
export const dynamic = "force-dynamic";