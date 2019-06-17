import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Album } from '../models';
import { environment } from 'src/environments/environment.prod';
import * as algoliasearch from 'algoliasearch'; 

@Injectable({ providedIn: 'root' })
export class AngoliaSearchService {
index: any;
album: Album;

    constructor() {
        const options = environment.algoliaConfig;
        const client = algoliasearch(options.appId, options.apiKey);
        this.index = client.initIndex(options.indexName);        
    }
    
    async getAlbumById(albumId: string): Promise<Album> {
      
        const content = await this.index.search({query: albumId});
        this.album = content.hits[0];

        return this.album;
    }
}
