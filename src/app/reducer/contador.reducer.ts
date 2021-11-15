import { Action, createReducer, on } from '@ngrx/store';
import * as states from './../actions/contador.actions';

export const initial = 0;

const _counterReducer = createReducer(
  initial,
  on(states.increment, (state) => state + 1),
  on(states.decrement, (state) => state - 1),
  on(states.random, (state) => Math.floor(Math.random() * 100)),
  on(states.salt, (state, { num }) => num),
);

export function counterReducer(state: number | undefined, action: Action) {
  return _counterReducer(state, action);
}
