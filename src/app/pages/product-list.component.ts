import { Component } from '@angular/core';
import { Album } from '../_core/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {

  algoliaConfig = environment.algoliaConfig;

  translate(items) {
    return items.map(item => ({
      ...item,
      highlighted:item.highlighted
    }));
  }

  onClickAlbum(album: Album) {
    console.log('album send: ' + album.name);
  }
}
