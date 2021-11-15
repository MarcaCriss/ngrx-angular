import { createAction, props } from '@ngrx/store';

export const increment = createAction('Incremento');
export const decrement = createAction('Decremento');
export const random = createAction('Random');
export const salt = createAction('Saltar', props<{num: number}>());
