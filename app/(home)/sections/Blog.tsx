import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";

const blogPosts = [
  {
    date: "19 Jan 2023",
    title: "Understanding Cellular Vitality & Longevity",
    description: "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device...",
    image: "/team/sample.png",
  },
  {
    date: "19 Jan 2023",
    title: "Understanding Cellular Vitality & Longevity",
    description: "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device...",
    image: "/team/sample.png",
  },
  {
    date: "19 Jan 2023",
    title: "Understanding Cellular Vitality & Longevity",
    description: "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device...",
    image: "/team/sample.png",
  },
  {
    date: "19 Jan 2023",
    title: "Understanding Cellular Vitality & Longevity",
    description: "Discover the ultimate guide to troubleshooting common smart home issues in our latest blog post. From connectivity problems to device...",
    image: "/team/sample.png",
  },
];

const Blog = () => {

  return (
    <div className="py-12 max-w-7xl mx-auto px-2 sm:px-2 lg:px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-center">Explore Insights in Our Blog</h2>
      <p className="text-xl sm:text-2xl md:text-2xl mb-12 font-normal text-center">Explore, learn, and get inspired today.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(0, 3).map((post, index) => (
          <Card key={index} className="overflow-hidden bg-transparent p-0 rounded-lg shadow-none border-none transition-transform transform hover:scale-105">
            <Image src={post.image} alt={post.title} className="w-full h-56 object-cover" width={600} height={224} />
            <CardContent className="p-0">
              <CardHeader>
                <p className="text-sm font-regular sm:text-base text-gray-500 ">{post.date}</p>
                <CardTitle className="text-xl sm:text-2xl lg:text-2xl font-normal mb-2">{post.title}</CardTitle>
                <CardDescription className="text-base sm:text-lg font-light line-clamp-2 text-gray-700">{post.description}</CardDescription>
              </CardHeader>
            </CardContent>
          </Card>
        ))}
      </div>
      {blogPosts.length > 3 && (
        <div className="flex justify-center pt-8">
          <Link href={'/blog'}><Button className="w-full sm:w-auto bg-black text-white hover:bg-black rounded-none px-4 sm:px-6 py-3">Show more</Button></Link>
          </div>
      )}
    </div>
  );
};

export default Blog; 