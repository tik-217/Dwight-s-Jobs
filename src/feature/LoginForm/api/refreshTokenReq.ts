import { axiosInstance } from "@/shared/api";

export async function refreshTokenReq() {
  return axiosInstance({
    method: "POST",
    url: "/auth-worker/refresh-token",
    headers: {},
    withCredentials: true,
  }).then(({ data }) => data);
}
