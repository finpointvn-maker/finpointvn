import Banner from "@/components/new/banner";
import HomePage from "./home";
import { getAllPosts, getAllCategories } from "@/lib/sanity/client";

export default async function IndexPage() {
  const posts = await getAllPosts();
  return <>
    <Banner />
    <HomePage posts={posts} />;
  </>
}

export const revalidate = 0;
export const dynamic = "force-dynamic";