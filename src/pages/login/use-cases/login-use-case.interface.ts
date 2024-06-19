import { BearerTokenType } from "../models/bearer-token.type";

export interface LoginUseCase {
  getToken(): Promise<BearerTokenType | undefined>;
}
