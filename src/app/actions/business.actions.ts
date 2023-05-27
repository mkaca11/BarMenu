import {createAction, props} from "@ngrx/store";
import {BusinessData} from "../interfaces/business-data";

export const loadBusinessData = createAction('[App Component] LoadBusiness Data');
export const businessDataLoadedSuccess = createAction('[App Component] LoadBusiness Data Success', props<{
  data: BusinessData
}>());
export const businessDataLoadedFailure = createAction('[App Component] LoadBusiness Data Error', props<{
  errorMsg: string
}>());
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
