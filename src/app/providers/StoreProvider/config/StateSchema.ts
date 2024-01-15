import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import {
  AnyAction, CombinedState, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

import { ProductsSchema } from 'pages/ProductsPage';

import { EmailSchema } from 'features/SendEmail';

import { CartSchema } from 'entities/Cart';
import { CategorySchema } from 'entities/Category';
import { ProductSchema } from 'entities/Product';

export interface StateSchema {
    // sync reducers
    cart: CartSchema;
    category: CategorySchema;
    products: ProductsSchema;
    // async reducers
    product?: ProductSchema;
    email?: EmailSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends ToolkitStore {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: NavigateFunction;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
