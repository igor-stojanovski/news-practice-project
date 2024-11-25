import Link from "next/link";
import React from "react";

type Props = {
  news: any;
};

export default function NewsList({ news }: Props) {
  return (
    <ul className="news-list">
      {news.map((newsItem: any) => {
        return (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <img
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
              />
              <span>{newsItem.title}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
