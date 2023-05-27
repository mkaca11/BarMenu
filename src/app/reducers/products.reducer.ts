import {createReducer, on} from '@ngrx/store';
import {businessDataLoadedSuccess} from "../actions/business.actions";
import {BusinessData, Product} from "../interfaces/business-data";
import {changeProductsToShow, deSelectProduct, selectProduct} from "../actions/products.actions";

export interface ProductsState {
  productsToShow: Product[]
  bill: { product: Product, quantity: number }[]
}

export const initialState = {
  productsToShow: [],
  bill: []
} as ProductsState
const onBusinessDataLoadedSuccess = (state: ProductsState, {data}: { data: BusinessData }): ProductsState => {
  return {...state, productsToShow: data?.categories[0]?.products ?? []}
};
const onChangeProductsToShow = (state: ProductsState, {data}: { data: Product[] }): ProductsState => {
  return {...state, productsToShow: data}
};
const onSelectProduct = (state: ProductsState, {data}: { data: Product }): ProductsState => {
  return {...state, bill: [...state.bill, {product: data, quantity: 1}]}
};

const onDeSelectProduct = (state: ProductsState, {data}: { data: Product }): ProductsState => {
  return {...state, bill: [...state.bill.filter(it => it.product != data)]}
};
export const productsReducer = createReducer(
  initialState,
  on(businessDataLoadedSuccess, onBusinessDataLoadedSuccess,
  ),
  on(changeProductsToShow, onChangeProductsToShow,
  ),
  on(selectProduct, onSelectProduct),
  on(deSelectProduct, onDeSelectProduct)
);
