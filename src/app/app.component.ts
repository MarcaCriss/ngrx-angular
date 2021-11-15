import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as action from './actions/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ecommerce-ngrx';
  count$!: Observable<number>;

  constructor(private store: Store<{ count: number }>) {}

  ngOnInit(): void {
    this.count$ = this.store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(action.increment());
  }

  decrement() {
    this.store.dispatch(action.decrement());
  }

  random() {
    this.store.dispatch(action.random());
  }

  salt(numero: number) {
    this.store.dispatch(action.salt({ num: numero }));
  }
}
