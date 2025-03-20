import { refreshTokenReq } from "@/feature/LoginForm/api/refreshTokenReq";
import { useMutation } from "@tanstack/react-query";
import { setToken } from "@/shared/utils/tokenTools";
import { DJ_ACCESS_TOKEN } from "@/shared/const/tokenName";

export const useRefreshToken = () => {
  return useMutation({
    mutationKey: ["refreshToken"],
    mutationFn: refreshTokenReq,
    onSuccess: ({ access_token }) => {
      setToken({ accessToken: access_token, lsTokenName: DJ_ACCESS_TOKEN });
    },
  });
};
