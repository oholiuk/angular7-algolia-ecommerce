import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Album } from '../models';

@Injectable({ providedIn: 'root' })
export class CartService {
    private albums: Album[] = [];
    itemsInCart: Subject<number> = new Subject();

    constructor() {
        this.saveAlbumsState();
    }
    

    getAlbums(): Observable<any> {
        this.albums = this.getAlbumState();
        const studentsObservable = new Observable(observer => {
            observer.next(this.albums);
        });

        return studentsObservable;
    }

    getItemsInCart(): Observable<any> {
        this.albums = this.getAlbumState();
        const studentsObservable = new Observable(observer => {
            observer.next(this.albums.length);
        });

        return studentsObservable;
    }

    addAlbum(album: Album): void {
        this.albums.push(album);
        this.saveAlbumsState();
    }

    removeAlbum(deletedAlbum: Album): void {
        this.albums.splice(this.albums.indexOf(deletedAlbum), 1);
        this.saveAlbumsState();
    }

    private saveAlbumsState() {
        this.itemsInCart.next(this.albums.length);
        sessionStorage.setItem('albums', JSON.stringify(this.albums));
    }

    private getAlbumState(): Album[] {
        const albums = sessionStorage.getItem('albums');

        return JSON.parse(albums);
    }
}
