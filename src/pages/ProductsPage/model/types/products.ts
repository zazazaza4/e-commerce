import { Product } from 'entities/Product';

export interface ProductsSchema {
    products?: Product[];
    isLoading: boolean;
    error?: string;
    filteredProducts?: Product[];
}
