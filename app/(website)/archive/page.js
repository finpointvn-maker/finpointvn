import { Suspense } from "react";
import Container from "@/components/container";
import Archive from "./archive";
import Loading from "@/components/loading";
import { getAllCategoriesV2 } from "@/lib/sanity/client";
import CategoryIcon from "@/components/new/categoryIcon";

export const dynamic = "force-dynamic";

export const runtime = "edge";

export default async function ArchivePage({ searchParams }) {
  const categories = await getAllCategoriesV2();
  return (
    <>
      <Container className="relative">
        <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <div className="flex justify-between gap-5">
            {categories.map(cat => (
              <CategoryIcon
                isActive={searchParams.category === cat.slug.current}
                category={cat}
                key={cat._id}
              />
            ))}
          </div>
          <Archive searchParams={searchParams} />
        </Suspense>
      </Container>
    </>
  );
}

// export const revalidate = 60;
