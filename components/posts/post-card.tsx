import type { Post } from "@/lib/wordpress.d";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getAuthorById, getFeaturedMediaById, getTagById } from "@/lib/wordpress";

export async function PostCard({ post }: { post: Post }) {
  const media = post.featured_media ? await getFeaturedMediaById(post.featured_media) : null;
  const author = post.author ? await getAuthorById(post.author) : null;
  const date = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  // Fetch tags associated with the post
  const tags = post.tags?.length
    ? await Promise.all(post.tags.map((tagId) => getTagById(tagId)))
    : [];
  const tagNames = tags.length ? tags.map((tag) => tag.name).join(", ") : "Untagged";

  return (
    <Link
      href={`/publications/${post.slug}`}
      className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow h-full group"
    >
      {/* Image Section with hover effects */}
      <div className="relative h-40 w-full overflow-hidden">
        {media?.source_url ? (
          <>
            <Image
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:brightness-110"
              src={media.source_url || "/placeholder.svg"}
              alt={post.title?.rendered || "Post thumbnail"}
              width={600}
              height={400}
            />
            {/* Overlay gradient that appears on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            {/* Read more indicator */}
            <div className="absolute bottom-0 right-0 bg-white/90 text-gray-900 text-xs font-medium py-1 px-3 m-2 rounded-full translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              Read More
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-100 text-gray-500">
            No image available
          </div>
        )}
      </div>

      {/* Content Section - Using flex-col and justify-between to push author info to bottom */}
      <div className="p-4 flex flex-col h-full">
        {/* Upper content area */}
        <div className="flex-grow flex flex-col gap-2">
          {/* Tags */}
          <div className="text-xs font-light text-gray-500 tracking-wide">
            {tagNames}
          </div>

          {/* Title with Arrow */}
          <div className="flex items-start justify-between gap-2">
            <div
              dangerouslySetInnerHTML={{
                __html: post.title?.rendered || "Untitled Post",
              }}
              className="text-2xl font-normal text-gray-900 leading-tight"
            />
            <ArrowUpRight className="h-5 w-5 text-gray-500 flex-shrink-0" />
          </div>

          {/* Excerpt */}
          <div
            className="text-sm text-gray-600 mt-1 line-clamp-2"
            dangerouslySetInnerHTML={{
              __html: post.excerpt?.rendered
                ? post.excerpt.rendered
                : "No excerpt available",
            }}
          />
        </div>

        {/* Author and Date - Always at bottom */}
        <div className="flex items-center gap-2 mt-4">
          {author?.avatar_urls?.["24"] && (
            <div className="h-6 w-6 rounded-full overflow-hidden">
              <Image
                src={author.avatar_urls["24"] || "/placeholder.svg"}
                alt={author?.name || "Author"}
                width={24}
                height={24}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <span className="text-sm text-gray-500 flex flex-col">
            <p>{author?.name || "Unknown"}</p>
            <p>{date}</p>
          </span>
        </div>
      </div>
    </Link>
  );
}