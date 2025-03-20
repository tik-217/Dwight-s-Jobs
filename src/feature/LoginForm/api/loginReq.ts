import { axiosInstance } from "@/shared/api";
import { LoginFormData } from "../model/types";

export async function loginReq<T>(loginData: LoginFormData) {
  return axiosInstance<T>({
    method: "post",
    url: "/auth-worker/login",
    data: loginData,
    withCredentials: true,
  }).then(({ data }) => data);
}
