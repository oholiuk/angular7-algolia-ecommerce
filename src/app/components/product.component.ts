import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../_core/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  @Input() album: Album;
  @Input() hit: any;

  ngOnInit(): void {
    console.log(this.album);
  }

  onClickAlbum() {
    console.log('album send: ' + this.album.name);
  }
}
