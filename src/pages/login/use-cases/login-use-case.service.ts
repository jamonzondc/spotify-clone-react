import { BearerTokenType } from "../models/bearer-token.type";
import { LoginUseCase } from "./login-use-case.interface";

export class LoginUseCaseService implements LoginUseCase {
  constructor(private loginApi: any) {}

  public async getToken(): Promise<BearerTokenType | undefined> {
    //Verify if exist token un local storage and if it is valid(use JWT library)
    if (localStorage.getItem("token"))
      return { token: localStorage.getItem("token") as string };

    const data: BearerTokenType = await this.loginApi.getToken();

    if (!data.token) return undefined;

    localStorage.setItem("token", data.token);

    return data;
  }
}
