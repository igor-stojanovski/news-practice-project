import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

type Props = {
  params: any;
};

export default async function NewsDetailPage({ params }: Props) {
  const newsId = params.slug;

  const newsItem = (await getNewsItem(newsId)) as any;

  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.slug}/image`}>
          <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        </Link>
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}>{newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
}
