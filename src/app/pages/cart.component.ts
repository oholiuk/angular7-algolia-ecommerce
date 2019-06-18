import { Component, AfterViewChecked, Input, OnInit } from '@angular/core';
import { Album } from '../_core/models';
import { CartService } from '../_core/services';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  albums: Album[];
  finalAmount: number = 0;

  constructor(private cartService: CartService) {   
    
  }

    ngOnInit(): void {
        this.cartService.getAlbums().subscribe(val => {
          this.albums = val;
        });
    }

    onRemoveItem(album: Album): void {
      this.cartService.removeAlbum(album);
    }
}
