import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";

import { notFound } from "next/navigation";

import React from "react";

type Props = {
  params: any;
};

export default async function InterceptedImagePage({ params }: Props) {
  const newsItemSlug = params.slug;
  const newsItem = (await getNewsItem(newsItemSlug)) as any;

  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={`${newsItem.title}`}
          />
        </div>
      </dialog>
    </>
  );
}
