import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

type Props = {};

export default async function LatestPage({}: Props) {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
