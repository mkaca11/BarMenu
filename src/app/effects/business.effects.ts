import {inject} from '@angular/core';
import {catchError, exhaustMap, map, of, tap} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {BusinessService} from "../services/business.service";
import {businessDataLoadedFailure, businessDataLoadedSuccess, loadBusinessData} from "../actions/business.actions";


export const loadBusinessDataEffect = createEffect(
  (actions$ = inject(Actions), businessService = inject(BusinessService)) => {
    return actions$.pipe(
      ofType(loadBusinessData),
      exhaustMap(() =>
        businessService.getBusinessData().pipe(
          map((data) => businessDataLoadedSuccess({data})),
          catchError((error: { message: string }) =>
            of(businessDataLoadedFailure({errorMsg: error.message}))
          )
        )
      )
    );
  },
  {functional: true}
);

