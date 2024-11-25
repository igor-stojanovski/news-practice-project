"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export default function NavLink({ href, children }: Props) {
  const path = usePathname();
  return (
    <Link className={path.startsWith(href) ? "active" : undefined} href={href}>
      {children}
    </Link>
  );
}
