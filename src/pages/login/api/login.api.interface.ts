import { BearerTokenType } from "../models/bearer-token.type";

export interface LoginApi {
  getToken(): Promise<BearerTokenType>;
}
