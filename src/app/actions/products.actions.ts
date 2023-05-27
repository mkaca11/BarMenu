import {createAction, props} from "@ngrx/store";
import {Product} from "../interfaces/business-data";

export const changeProductsToShow = createAction('[Product List Component] Change List', props<{ data: Product[] }>());
export const selectProduct = createAction('[Product List Component] Select Product', props<{ data: Product }>());
export const deSelectProduct = createAction('[Product List Component] DeSelect Product', props<{ data: Product }>());
