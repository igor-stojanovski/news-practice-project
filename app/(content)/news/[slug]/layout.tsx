import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  modal: any;
}

export default function NewsDetailLayout({ children, modal }: Props) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
