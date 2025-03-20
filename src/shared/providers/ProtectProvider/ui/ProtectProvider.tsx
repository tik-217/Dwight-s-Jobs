"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { DJ_ACCESS_TOKEN } from "@/shared/const/tokenName";
import { checkTokenExpiresIn, getToken } from "@/shared/utils/tokenTools";
import { useRefreshToken } from "@/feature/LoginForm/api/hooks/useRefreshToken";

export const ProtectProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const { mutate: refreshToken } = useRefreshToken();

  useEffect(() => {
    const { status, token } = getToken({ lsTokenName: DJ_ACCESS_TOKEN });

    if (status === "error" || !token) {
      router.push("/login");
    }

    if (token && checkTokenExpiresIn({ accessToken: token })) {
      refreshToken();
    }

    // eslint-disable-next-line
  }, []);

  return children;
};
