
import { PlaylistApi } from "./playlist.api.interface";
import { BasicResponse } from "../../models";
import { Playlist } from "../../entities";
import { getErrorResponseAdapter } from "../../adapters/error-response.adapter";
import {
  getPlaylistResponseAdapter,
  getPlaylistsResponseAdapter,
} from "../../adapters/playlist.adapter";
import axiosInstance from "../../interceptors/axios-instance";

export class PlaylistApiService implements PlaylistApi {
  public async getPlaylists(limit: number): Promise<BasicResponse<Playlist[]>> {
    try {
      const params = { limit: limit.toString() };
      const response: any = await axiosInstance.get(
        "browse/featured-playlists",
        { params }
      );
      return new BasicResponse<Playlist[]>(
        getPlaylistsResponseAdapter(response?.data)
      );
    } catch (error) {
      return new BasicResponse<Playlist[]>(
        undefined,
        getErrorResponseAdapter(error)
      );
    }
  }

  public async getPlaylist(
    playlistId: string
  ): Promise<BasicResponse<Playlist>> {
    try {
      const response: any = await axiosInstance.get(
        `playlists/${playlistId}`
      );

      return new BasicResponse<Playlist>(getPlaylistResponseAdapter(response?.data));
    } catch (error) {
      return new BasicResponse<Playlist>(
        undefined,
        getErrorResponseAdapter(error)
      );
    }
  }
}
