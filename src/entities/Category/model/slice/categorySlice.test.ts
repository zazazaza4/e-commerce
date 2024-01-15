import { fetchCategories } from '../services/fetchCategories/fetchCategories';
import { CategorySchema } from '../types/category';
import { categoryActions, categoryReducer } from './categorySlice';

describe('categorySlice.test', () => {
  test('set category action', () => {
    const category = 'Electronics';
    const state: DeepPartial<CategorySchema> = {
      isLoading: false, categories: [], error: '',
    };

    expect(categoryReducer(state as CategorySchema, categoryActions.setCategory(category))).toEqual({
      isLoading: false,
      categories: [],
      error: '',
      selectedCategory: category,
    });
  });

  test('fetchCategories.pending action', () => {
    const state: DeepPartial<CategorySchema> = {
      isLoading: false, categories: [], error: '',
    };
    expect(categoryReducer(state as CategorySchema, fetchCategories.pending)).toEqual({
      isLoading: true,
      categories: [],
      error: '',
    });
  });

  test('fetchCategories.fulfilled action', () => {
    const categories = ['Electronics', 'Clothing'];
    const state: DeepPartial<CategorySchema> = {
      isLoading: true, categories: [], error: '',
    };

    expect(categoryReducer(state as CategorySchema, fetchCategories.fulfilled(categories, ''))).toEqual({
      isLoading: false,
      categories,
      error: '',
    });
  });

  test('fetchCategories.rejected action', () => {
    const error = 'Error fetching categories';
    const state: DeepPartial<CategorySchema> = {
      isLoading: true, categories: [], error: '',
    };

    expect(categoryReducer(state as CategorySchema, fetchCategories.rejected(Error(error), ''))).toEqual({
      isLoading: false,
      categories: [],
      error,
    });
  });
});
