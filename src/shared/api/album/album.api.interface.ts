import { Album } from "../../entities";
import { BasicResponse } from "../../models";

export interface AlbumApi {
  getAlbums(limit: number): Promise<BasicResponse<Album[]>>;
  getAlbum(albumId: string): Promise<BasicResponse<Album>>;
}
