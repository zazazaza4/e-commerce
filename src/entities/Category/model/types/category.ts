export type Category = string;

export interface CategorySchema {
    isLoading: boolean;
    selectedCategory?: Category;
    categories?: Category[];
    error?: string;
}
