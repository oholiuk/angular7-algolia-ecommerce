import { Artist } from './artist';
import { TrackImage } from './track-image';

export interface Album {
    id: string;
    album_type: string;
    artists: Artist[];
    images: TrackImage[];
    name: string;
    release_date: Date;
    total_tracks: number;
    price: number;
}