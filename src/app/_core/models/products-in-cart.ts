import { Album } from './album';

export interface ProductsInCart {
    albums: Album[];
    quantity: number;
  }