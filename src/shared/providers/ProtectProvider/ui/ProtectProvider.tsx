"use client";

import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LOGIN_TOKEN } from "@/shared/const/tokenName";

export const ProtectProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem(LOGIN_TOKEN);

    if (!token) {
      if (pathname && pathname !== "/login") router.replace("/login");
    }
  }, []);

  return children;
};
