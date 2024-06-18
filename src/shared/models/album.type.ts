import { Track } from "../entities";

export type AlbumViewModel = {
  id: string;
  name: string;
  artists: string;
  image: string;
  info: string;
  tracks: Track[];
};
