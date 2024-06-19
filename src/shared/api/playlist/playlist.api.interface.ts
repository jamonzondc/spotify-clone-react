import { Playlist } from "../../entities";
import { BasicResponse } from "../../models";

export interface PlaylistApi {
  getPlaylist(playlistId: string): Promise<BasicResponse<Playlist>>;
  getPlaylists(limit: number): Promise<BasicResponse<Playlist[]>>;
}
