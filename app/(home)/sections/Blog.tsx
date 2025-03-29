import { PostCard } from "@/components/posts/post-card";
import { Button } from "@/components/ui/button";
import { getAllCategories, getAllPosts, getFeaturedMediaById } from "@/lib/wordpress";
import Link from "next/link";

const Blog = async () => {
  // Fetch the "blogs" category ID dynamically
  const categories = await getAllCategories();
  const blogsCategory = categories.find((cat) => cat.slug === "blog")?.id;

  if (!blogsCategory) {
    throw new Error('Category "blogs" not found');
  }

  // Fetch posts from the "blogs" category
  const posts = await getAllPosts({ category: blogsCategory.toString() });

  // Map the posts to the required structure, including fetching the featured image
  const blogPosts = await Promise.all(
    posts.map(async (post) => {
      const media = post.featured_media ? await getFeaturedMediaById(post.featured_media) : null;
      const date = new Date(post.date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

      return {
        ...post,
        date,
        image: media?.source_url || "/placeholder.svg",
      };
    })
  );

  return (
    <div className="py-12 max-w-6xl mx-auto px-6 sm:px-6 lg:px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-center">
        Explore Insights in Our Blog
      </h2>
      <p className="text-xl sm:text-2xl md:text-2xl mb-12 font-normal text-gray-800 text-center">
        Explore, learn, and get inspired today.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      {blogPosts.length > 3 && (
        <div className="flex justify-center pt-8">
          <Link href={"/publications"}>
            <Button className="w-full sm:w-auto bg-black text-white hover:bg-black rounded-none px-4 sm:px-6 py-3">
              Show more
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Blog;
