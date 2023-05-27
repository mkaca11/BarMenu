import {createReducer, on} from '@ngrx/store';
import {businessDataLoadedFailure, businessDataLoadedSuccess, loadBusinessData} from "../actions/business.actions";
import {BusinessData} from "../interfaces/business-data";

export interface BusinessState {
  loading: boolean
  data: BusinessData | null
  errorMsg: string
}

export const initialState = {
  loading: false,
  data: null,
  errorMsg: '',
} as BusinessState;

const onBusinessDataLoadedSuccess = (state: BusinessState, {data}: { data: BusinessData }): BusinessState => {
  return {...state, loading: false, data: data}
};
const onBusinessDataLoadedError = (state: BusinessState, {errorMsg}: { errorMsg: string }): BusinessState => {
  return {...state, loading: false, data: null, errorMsg: errorMsg}
};
export const businessReducer = createReducer(
  initialState,
  on(loadBusinessData, (state) => {
    return {...state, loading: true}
  }),
  on(businessDataLoadedSuccess, onBusinessDataLoadedSuccess),
  on(businessDataLoadedFailure, onBusinessDataLoadedError),
);
