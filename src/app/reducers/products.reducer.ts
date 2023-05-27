import {createReducer, on} from '@ngrx/store';
import {businessDataLoadedSuccess} from "../actions/business.actions";
import {BusinessData, Product} from "../interfaces/business-data";
import {changeProductsToShow, deSelectProduct, selectProduct, updateBill} from "../actions/products.actions";
import {Bill} from "../interfaces/bill.interface";

export interface ProductsState {
  productsToShow: Product[]
  bill: Bill[]
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
const onUpdateBill = (state: ProductsState, {data}: { data: Bill[] }): ProductsState => {
  return {...state, bill: [...data]}
};
export const productsReducer = createReducer(
  initialState,
  on(businessDataLoadedSuccess, onBusinessDataLoadedSuccess,
  ),
  on(changeProductsToShow, onChangeProductsToShow,
  ),
  on(selectProduct, onSelectProduct),
  on(deSelectProduct, onDeSelectProduct),
  on(updateBill,onUpdateBill)
);
