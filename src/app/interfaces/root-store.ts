import {BusinessState} from "../reducers/business.reducer";
import {ProductsState} from "../reducers/products.reducer";

export interface RootStore {
  business: BusinessState
  products: ProductsState
}
