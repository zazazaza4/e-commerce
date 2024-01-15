import { Product } from 'entities/Product/model/types/product';

export interface CartProduct extends Product {
    quantity: number;
  }

export interface CartSchema {
    cartProducts: CartProduct[];
    isOpen: boolean;
}
