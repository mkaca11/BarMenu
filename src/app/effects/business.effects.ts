import {inject} from '@angular/core';
import {catchError, exhaustMap, map, of, tap} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {BusinessService} from "../services/business.service";
import {businessDataLoadedFailure, businessDataLoadedSuccess, loadBusinessData} from "../actions/business.actions";

//functional ngrx effect for loading data on application startup
export const loadBusinessDataEffect = createEffect(
  (actions$ = inject(Actions), businessService = inject(BusinessService)) => {
    return actions$.pipe(
      ofType(loadBusinessData),//loadBusinessData is the action used for this effect
      exhaustMap(() =>
        businessService.getBusinessData().pipe(
          map((data) => businessDataLoadedSuccess({data})), // if the response is successful dispatch businessDataLoadedSuccess action
          catchError((error: { message: string }) =>
            of(businessDataLoadedFailure({errorMsg: error.message}))
          )
        )
      )
    );
  },
  {functional: true}
);

