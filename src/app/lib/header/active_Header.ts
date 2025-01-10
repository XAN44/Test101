"use client";
import { usePathname } from "next/navigation";

export default function Active_Header() {
  const currentPath = usePathname();

  const content = [
    { brand: "CCTV & AC PRO", path: "/" },
    { header: "บริการ", path: "/service" },
    { header: "จุดเด่น", path: "/about" },
    { header: "รีวิว", path: "/company" },
    { contact: "ติดต่อ 09-xxx-xxx" },
  ];

  return content.map((items) => ({
    ...items,
    isActive: items.path === currentPath,
  }));
}
