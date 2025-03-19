import { DJ_ACCESS_TOKEN } from "@/shared/const/tokenName";

export function setToken({ accessToken }: { accessToken: string }) {
  try {
    window.localStorage.setItem(DJ_ACCESS_TOKEN, accessToken);
  } catch (e) {
    console.log(e);
  }
}
