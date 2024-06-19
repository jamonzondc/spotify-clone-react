import {Image} from "../entities";

export enum CardType {
  PLAYLIST = 'playlist',
  ALBUM = 'album'
}

export type SpotifyCard = {
  id: string;
  title: string;
  subtitle: string;
  images: Image[];
  type: CardType;
};
