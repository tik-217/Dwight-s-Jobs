import { jwtDecode } from "jwt-decode";
import { Token, TokenFncArg, TokenNameArg, TokenResponse } from "./types";

export function setToken({ accessToken, lsTokenName }: TokenFncArg) {
  try {
    window.localStorage.setItem(lsTokenName, accessToken);
  } catch (e) {
    console.log(e);
  }
}

export function getToken({ lsTokenName }: TokenNameArg): TokenResponse {
  try {
    const token = window.localStorage.getItem(lsTokenName);

    if (!token) {
      return { status: "error", token: null, errorMessage: "Token not found." };
    }

    return { status: "success", token };
  } catch (e) {
    console.log(e);
    return { status: "error", token: null, errorMessage: "Token not found." };
  }
}

export function checkTokenExpiresIn({ accessToken }: Token) {
  const tokenExpiresIn = jwtDecode(accessToken);

  const now = Math.floor(Date.now() / 1000);
  return Boolean(tokenExpiresIn?.exp && now >= tokenExpiresIn.exp);
}
