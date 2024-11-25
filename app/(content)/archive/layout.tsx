import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  archive: ReactNode;
  latest: ReactNode;
};

export default function ArchiveLayout({ children, archive, latest }: Props) {
  return (
    <div>
      <h1>News Archive</h1>
      <section id="archive-filter">{archive}</section>
      <section id="archive-latest">{latest}</section>
    </div>
  );
}
