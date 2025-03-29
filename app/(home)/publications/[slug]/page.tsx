import {
  getAllPosts,
  getAuthorById,
  getFeaturedMediaById,
  getPostBySlug,
  getTagById,
} from "@/lib/wordpress";

import { Article, Container, Section } from "@/components/craft";
import { siteConfig } from '@/lib/siteConfig';
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const ogUrl = new URL(`${siteConfig.url}/api/og`);
  ogUrl.searchParams.append("title", post.title.rendered);
  const description = post.excerpt.rendered.replace(/<[^>]*>/g, "").trim();
  ogUrl.searchParams.append("description", description);

  return {
    title: post.title.rendered,
    description: description,
    openGraph: {
      title: post.title.rendered,
      description: description,
      type: "article",
      url: `${siteConfig.url}/publications/${post.slug}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title.rendered,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const featuredMedia = post.featured_media
    ? await getFeaturedMediaById(post.featured_media)
    : null;
  const author = await getAuthorById(post.author);

  const date = new Date(post.date).toLocaleDateString("en-GB", {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  // Fetch tags associated with the post
  const tags = post.tags?.length
    ? await Promise.all(post.tags.map((tagId) => getTagById(tagId)))
    : [];
  const tagNames = tags.map((tag) => tag.name).join(", ") || "Untagged";

  return (
    <Section className="pt-16">
      {/* Hero Section */}
      {featuredMedia?.source_url && (
        <div className="relative h-[400px] md:h-[500px] w-full mb-8">
          <Image
            src={featuredMedia.source_url}
            alt={post.title.rendered || 'Background'}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent"></div>

          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 lg:p-12">
            <Container>
              {/* Tags */}
              <span className="text-sm font-normal tracking-wide text-white mb-2 inline-block">
                {tagNames}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight mb-0">
                <Balancer>
                  <span dangerouslySetInnerHTML={{ __html: post.title.rendered }}></span>
                </Balancer>
              </h1>
            </Container>
          </div>
        </div>
      )}

      {/* Author & Date Section */}
      <Container>
        <div className="flex items-center gap-4 mb-8 mt-4">
          {author.avatar_urls && (
            <Image
              src={author.avatar_urls['48']}
              alt={author.name || 'Author Avatar'}
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
          <div>
            {author.name && (
              <Link href={`/publications/?author=${author.id}`} className="text-base font-medium text-primary !no-underline hover:underline">
                {author.name}
              </Link>
            )}
            <p className="text-sm text-muted-foreground mt-0">{date}</p>
          </div>
        </div>
        <Article dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </Container>
    </Section>
  );
}
