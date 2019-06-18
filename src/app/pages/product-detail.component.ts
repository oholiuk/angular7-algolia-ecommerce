import { Component, OnInit } from '@angular/core';
import { Album } from '../_core/models';
import { ActivatedRoute } from '@angular/router';
import { AngoliaSearchService } from '../_core/services/algolia-search.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../_core/services';
import { MessageService } from '../_core/services/message.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit  {
    
    album: Album;
    productForm: FormGroup;
    totalAmount: number;
    
    constructor(
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private cartService: CartService,
      private messageService: MessageService,
      private algoliaSearchService: AngoliaSearchService) {
      
    }

    async ngOnInit(): Promise<void> {
      const albumId = this.route.snapshot.params['albumId'];

      this.album = await this.algoliaSearchService.getAlbumById(albumId);
      this.totalAmount = this.album.price;

      this.initializeForm();
    }

    private initializeForm() {
      this.productForm = this.formBuilder.group({
        quantity: [1, Validators.min(0)]
      });

      this.productForm.controls['quantity'].valueChanges.subscribe(val => {
        this.totalAmount = this.album.price * val;
      });
    }

    onSubmit() {
      
      this.cartService.addAlbum(this.album);
      this.messageService.showMessage('Agregado al carrito!');
    }
}
