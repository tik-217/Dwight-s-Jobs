import { useMutation } from "@tanstack/react-query";
import { loginReq } from "../loginReq";
import { Token } from "@/shared/types";
import { setToken } from "@/shared/utils/tokenTools";
import { DJ_ACCESS_TOKEN } from "@/shared/const/tokenName";

export function useLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: loginReq<Token>,
    onSuccess: ({ access_token }) => {
      setToken({ accessToken: access_token, lsTokenName: DJ_ACCESS_TOKEN });
    },
  });
}
