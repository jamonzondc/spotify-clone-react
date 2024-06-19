import { environment } from "../../../utils/enviroment";
import axios from "axios";
import { LoginApi } from "./login.api.interface";
import { BearerTokenType } from "../models/bearer-token.type";

export class LoginApiService implements LoginApi {
  public async getToken(): Promise<BearerTokenType> {
    try {
      const headers: any = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(environment.client_id + ":" + environment.client_secret),
      };

      const body = new URLSearchParams();
      body.append("grant_type", "client_credentials");

      const response: any = await axios.post(environment.AUTH, body, {
        headers,
      });

      return { token: response.data.access_token }; //Addapter pattern
    } catch (error) {
      return { token: "" };
    }
  }
}
