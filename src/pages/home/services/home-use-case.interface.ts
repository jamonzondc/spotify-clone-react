import { Card } from "../../../shared/models/card.type";

export interface HomeUseCase {
  getAlbums(): Promise<Card[]>;
  getPlaylists(): Promise<Card[]>;
}
