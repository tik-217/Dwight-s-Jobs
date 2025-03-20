export interface TokenResponse {
  status: "error" | "success";
  token: string | null;
  errorMessage?: string;
}

export interface Token {
  accessToken: string;
}

export interface TokenNameArg {
  lsTokenName: string;
}

export interface TokenFncArg extends Token, TokenNameArg {}
