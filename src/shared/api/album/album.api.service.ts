
import {
  getAlbumResponseAdapter,
  getAlbumsResponseAdapter,
} from "../../adapters/album-response.adapter";
import { getErrorResponseAdapter } from "../../adapters/error-response.adapter";
import { Album } from "../../entities";
import axiosInstance from "../../interceptors/axios-instance";
import { BasicResponse } from "../../models";
import { AlbumApi } from "./album.api.interface";

export class AlbumApiService implements AlbumApi {
  public async getAlbums(limit: number = 10): Promise<BasicResponse<Album[]>> {
    try {
      const params = { limit: limit.toString() };
      const response: any = await axiosInstance.get(
        "browse/new-releases",
        { params }
      );
      return new BasicResponse<Album[]>(
        getAlbumsResponseAdapter(response?.data?.albums?.items)
      );
    } catch (error) {
      return new BasicResponse<Album[]>(
        undefined,
        getErrorResponseAdapter(error)
      );
    }
  }

  public async getAlbum(albumId: string): Promise<BasicResponse<Album>> {
    try {
      const response: any = await axiosInstance.get(
        `albums/${albumId}`
      );
      return new BasicResponse<Album>(getAlbumResponseAdapter(response?.data));
    } catch (error) {
      return new BasicResponse<Album>(
        undefined,
        getErrorResponseAdapter(error)
      );
    }
  }
}
