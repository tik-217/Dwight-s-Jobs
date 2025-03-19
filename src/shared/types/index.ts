export interface ApiError {
  error: string;
  message: string;
  statusCode: number;
}

export interface Token {
  access_token: string;
}
