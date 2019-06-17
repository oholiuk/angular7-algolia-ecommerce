import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../_core/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() album: Album;
  @Input() hit: any;

  constructor(private router: Router) {
    
    
  }

  ngOnInit(): void {
    
  }

  onClickAlbum() {
    this.router.navigate(['/product-detail/', this.album.id]);
  }
}
