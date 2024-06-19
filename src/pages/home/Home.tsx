import React, { useEffect, useState } from "react";
import { LoginApi } from "../login/api/login.api.interface";
import { LoginApiService } from "../login/api/login.api.service";
import { LoginUseCase } from "../login/use-cases/login-use-case.interface";
import { LoginUseCaseService } from "../login/use-cases/login-use-case.service";
import { HomeSectionViewModel } from "./models/home-section-view-model.type";
import { BearerTokenType } from "../login/models/bearer-token.type";
import { AlbumApi, AlbumApiService } from "../../shared/api/album";
import { PlaylistApi, PlaylistApiService } from "../../shared/api/playlist";
import { HomeUseCase, HomeUseCaseService } from "./services";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { SpotifyCardInfo } from "../../shared/components/SpotifyCardInfo/SpotifyCardInfo";
import { SpotifyCard } from "../../shared/models/card.type";

const loginApi: LoginApi = new LoginApiService();
const albumApi: AlbumApi = new AlbumApiService();
const playlistApi: PlaylistApi = new PlaylistApiService();
const loginUseCase: LoginUseCase = new LoginUseCaseService(loginApi);
const homeUseCase: HomeUseCase = new HomeUseCaseService(albumApi, playlistApi);

export const Home = () => {
  const [homeSection, setHomeSection] = useState<HomeSectionViewModel[]>([]);

  const initHomeSection = async (): Promise<void> => {
    const [albums, playlists] = await Promise.all([
      homeUseCase.getAlbums(),
      homeUseCase.getPlaylists(),
    ]);

    setHomeSection([
      { id: 1, title: "Albums", items: albums },
      { id: 2, title: "Playlists", items: playlists },
    ]);
  };

  const getToken = async () => {
    const token: BearerTokenType | undefined = await loginUseCase.getToken();
    if (token?.token) initHomeSection();
  };

  useEffect(() => {
    getToken();
  }, []);

  const sportifyCardInfo = (items: SpotifyCard[]) =>
    items.map((item: SpotifyCard) => (
      <Grid xs={2} key={item.id}>
        <SpotifyCardInfo data={item} />
      </Grid>
    ));

  return (
    <>
      {homeSection.map((section) => (
        <React.Fragment key={section.id}>
          <Grid container spacing={2}>
            <Grid>
              <h1>{section?.title}</h1>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {sportifyCardInfo(section.items)}
          </Grid>
        </React.Fragment>
      ))}
    </>
  );
};
