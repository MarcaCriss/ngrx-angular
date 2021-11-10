import { Actions } from '@ngrx/effects';

export class UserEffects {
  /*
  this.actions$.pipe(
   ofType<Login>(UserActionTypes.LOGIN),
   switchMap((action) => {
     return this.api.postUserLogin(action.payload)
       .pipe(
         mergeMap((user: any) => [
          new LoginComplete(user),
          new GetComplete(user.locations),
         ]
        ],
       ),
        catchError(ErrorHandler(LoginError)),
       );
     }),
  );
  */
  constructor(private actions$: Actions) {}
}
