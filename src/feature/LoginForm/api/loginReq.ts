import { axiosInstance } from "@/shared/api";
import { AxiosError } from "axios";
import { ApiError } from "@/shared/types";
import { LoginFormData } from "../model/types";

export async function loginReq<T>(loginData: LoginFormData) {
  return axiosInstance<T>({
    method: "post",
    url: "/auth-worker/login",
    data: loginData,
  })
    .then(({ data }) => data)
    .catch((err: AxiosError<ApiError>) => {
      const error = `Login error: ${err.response?.data.message}`;

      console.log(error);
      throw new Error(error);
    });
}
