import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

type Props = {};

export default function LatestPage({}: Props) {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
