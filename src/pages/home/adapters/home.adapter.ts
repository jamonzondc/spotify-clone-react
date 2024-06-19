import { getArtistViewModelAdapter } from "../../../shared/adapters/artist.adapter";
import { Album, Playlist } from "../../../shared/entities";
import { SpotifyCard, CardType } from "../../../shared/models/card.type";

export const albumHomeDataAdapter = (albums: Album[] | undefined): SpotifyCard[] => {
  if (!albums) return [];

  return albums.map((album: Album): SpotifyCard => {
    return {
      ...album,
      title: album.name,
      type: CardType.ALBUM,
      subtitle: `${formatDate(
        album.releaseDate,
        "yyyy",
        "en-US"
      )} • ${getArtistViewModelAdapter(album.artists)}`,
    };
  });
};
export const playlistsHomeDataAdapter = (
  playlists: Playlist[] | undefined
): SpotifyCard[] => {
  if (!playlists) return [];

  return playlists.map((playlist: Playlist): SpotifyCard => {
    return {
      ...playlist,
      title: playlist.name,
      type: CardType.PLAYLIST,
      subtitle: playlist.description,
    };
  });
};

function formatDate(param1: string, param2: string, param3: string) {
  //import {formatDate} from '@angular/common';
  //TODO maybe with date-fns
  return param1;
}
