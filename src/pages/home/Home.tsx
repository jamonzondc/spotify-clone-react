import { useEffect } from "react";
import { LoginApi } from "../login/api/login.api.interface";
import { LoginApiService } from "../login/api/login.api.service";
import { LoginUseCase } from "../login/use-cases/login-use-case.interface";
import { LoginUseCaseService } from "../login/use-cases/login-use-case.service";
import { HomeSectionViewModel } from "./models/home-section-view-model.type";
import { BearerTokenType } from "../login/models/bearer-token.type";
import { AlbumApi, AlbumApiService } from "../../shared/api/album";
import { PlaylistApi, PlaylistApiService } from "../../shared/api/playlist";
import { HomeUseCase, HomeUseCaseService } from "./services";

const loginApi: LoginApi = new LoginApiService();
const albumApi: AlbumApi = new AlbumApiService();
const playlistApi: PlaylistApi = new PlaylistApiService();
const loginUseCase: LoginUseCase = new LoginUseCaseService(loginApi);
const homeUseCase: HomeUseCase = new HomeUseCaseService(albumApi, playlistApi);
let homeSection: HomeSectionViewModel[] = [];

export const Home = () => {
  const initHomeSection = async (): Promise<void> => {
    const [albums, playlists] = await Promise.all([
      homeUseCase.getAlbums(),
      homeUseCase.getPlaylists(),
    ]);

    homeSection = [
      { title: "Albums", items: albums },
      { title: "Playlists", items: playlists },
    ];
    console.log("------------>", homeSection);
  };

  const getToken = async () => {
    const token: BearerTokenType | undefined = await loginUseCase.getToken();
    if (token?.token) initHomeSection();
  };

  useEffect(() => {
    getToken();
  }, []);

  return <>Esto es el Home</>;
};
