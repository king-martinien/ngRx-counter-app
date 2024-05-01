import {createAction, props} from "@ngrx/store";

export const incrementCounter = createAction('[Counter] increment');

export const customIncrementCounter = createAction(
  '[Counter] custom increment', props<{ action: string, value: number }>());

export const decrementCounter = createAction('[Counter] decrement');

export const resetCounter = createAction('[Counter] reset');

export const renameChannel = createAction(
  '[Counter] change channel name', props<{ channelName: string }>());
