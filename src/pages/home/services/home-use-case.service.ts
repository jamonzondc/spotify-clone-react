import { Album, Playlist } from "../../../shared/entities";
import { BasicResponse } from "../../../shared/models";
import { Card } from "../../../shared/models/card.type";
import { albumHomeDataAdapter, playlistsHomeDataAdapter } from "../adapters";
import { AlbumApi } from "../../../shared/api";
import { HomeUseCase } from "./home-use-case.interface";
import { PlaylistApi } from "../../../shared/api/playlist";

export class HomeUseCaseService implements HomeUseCase {
  private readonly cardsToShow: number = 6;

  constructor(private albumApi: AlbumApi, private playlistApi: PlaylistApi) {}

  public async getAlbums(): Promise<Card[]> {
    const response: BasicResponse<Album[]> = await this.albumApi.getAlbums(
      this.cardsToShow
    );
    if (response.hasError()) return []; //TODO: show error notification

    return albumHomeDataAdapter(response.getData());
  }

  public async getPlaylists(): Promise<Card[]> {
    const response: BasicResponse<Playlist[]> =
      await this.playlistApi.getPlaylists(this.cardsToShow);

    if (response.hasError()) return []; //TODO: show error notification

    return playlistsHomeDataAdapter(response.getData());
  }
}
