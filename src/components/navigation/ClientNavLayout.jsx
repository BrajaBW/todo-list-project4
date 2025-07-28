"use client";

import NextNav from "@/components/navigation/nextNav";
import { usePathname } from "next/navigation";

export default function ClientNavLayout({ children }) {
  const pathname = usePathname();
  const isGroup1 = pathname.startsWith("/hello") || pathname.startsWith("/bubling");
  return (
    <>
      {!isGroup1 && <NextNav />}
      {children}
    </>
  );
}
