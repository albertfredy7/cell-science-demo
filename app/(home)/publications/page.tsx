import {
  getAllAuthors,
  getAllCategories,
  getAllPosts,
  getAllTags,
  searchAuthors,
  searchCategories,
  searchTags,
} from "@/lib/wordpress";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { Container, Section } from "@/components/craft";
import { PostCard } from "@/components/posts/post-card";
import { SearchInput } from "@/components/posts/search-input";

import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description: "Browse all our blog posts",
};

export const dynamic = "auto";
export const revalidate = 0;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{
    author?: string;
    tag?: string;
    page?: string;
    search?: string;
  }>;
}) {
  const params = await searchParams;
  const { author, tag, page: pageParam, search } = params;

  // Fetch the "blogs" category ID dynamically
  const categories = await getAllCategories();
  const blogsCategory = categories.find((cat) => cat.slug === "blog")?.id;

  if (!blogsCategory) {
    throw new Error('Category "blogs" not found');
  }

  // Fetch posts only from the "blogs" category
  const [posts] = await Promise.all([
    getAllPosts({ author, tag, category: blogsCategory.toString(), search }),
    search ? searchAuthors(search) : getAllAuthors(),
    search ? searchTags(search) : getAllTags(),
    search ? searchCategories(search) : getAllCategories(),
  ]);

  // Handle pagination
  const page = pageParam ? parseInt(pageParam, 10) : 1; // Changed radix to 10 for clarity
  const postsPerPage = 6;
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const paginatedPosts = posts.slice(
    (page - 1) * postsPerPage,
    page * postsPerPage
  );

  // Create pagination URL helper
  const createPaginationUrl = (newPage: number) => {
    const params = new URLSearchParams();
    if (newPage > 1) params.set("page", newPage.toString());
    if (author) params.set("author", author);
    if (tag) params.set("tag", tag);
    if (search) params.set("search", search);
    // No need to include category in URL since it's fixed to "blogs"
    return `/publications${params.toString() ? `?${params.toString()}` : ""}`;
  };

  return (
    <Section>
      <Container>
        <div className="space-y-8">
          <div className="space-y-4 max-w-4xl mx-auto py-8 sm:py-16">
            <div className="text-center">
              <Badge className="bg-black text-white text-xs hover:bg-black font-normal">
                Blog
              </Badge>
              <h1 className="text-2xl sm:text-3xl font-normal mt-2">
                Publications
              </h1>
              <p className="text-gray-600 mt-1 text-sm sm:text-base">
                The latest healthy tips
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <SearchInput defaultValue={search} />
            </div>
          </div>

          {paginatedPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {paginatedPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="h-24 w-full border rounded-lg bg-accent/25 flex items-center justify-center">
              <p className="text-sm sm:text-base">No publications found</p>
            </div>
          )}

          {totalPages > 1 && (
            <Pagination>
              <PaginationContent className="flex flex-wrap justify-center gap-2">
                <PaginationItem>
                  <PaginationPrevious
                    className={
                      page <= 1 ? "pointer-events-none opacity-50" : ""
                    }
                    href={createPaginationUrl(page - 1)}
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href={createPaginationUrl(page)}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className={
                      page >= totalPages ? "pointer-events-none opacity-50" : ""
                    }
                    href={createPaginationUrl(page + 1)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </Container>
    </Section>
  );
}