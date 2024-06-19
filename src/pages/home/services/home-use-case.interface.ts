import { SpotifyCard } from "../../../shared/models/card.type";

export interface HomeUseCase {
  getAlbums(): Promise<SpotifyCard[]>;
  getPlaylists(): Promise<SpotifyCard[]>;
}
