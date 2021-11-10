import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Login, UserActionTypes } from '../../../actions/user/user.action';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  complete$: Observable<any>;
  isLoading$: Observable<any>;
  errorMessage$: Observable<any>;
  hasError$: Observable<any>;
  private unsubscribe: Subject<void> = new Subject();
  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
  ) {
    this.complete$ = this.actions$.ofType(UserActionTypes.LOGIN_COMPLETE);
    this.isLoading$ = this.store.select(fromRoot.userIsLoading);
    this.errorMessage$ = this.store.select(fromRoot.userErrorMessage);
    this.hasError$ = this.store.select(fromRoot.userHasError);
  }
  ngOnInit() {
    this.complete$.pipe(takeUntil(this.unsubscribe)).subscribe(() => {
      this.router.navigate(['../../../dashboard/home']);
    });
  }
  onLogin(form: any) {
    this.store.dispatch(new Login(form));
  }
  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
