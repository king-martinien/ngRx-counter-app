import {createFeature, createReducer, on} from "@ngrx/store";
import {counterInitialState} from "../state/counter.state";
import * as CounterActions from "../actions/counter.actions";
import {CounterStateInterface} from "../types/interfaces/counterState.interface";

const counterFeature = createFeature({
  name: 'Counter',
  reducer: createReducer(
    counterInitialState,
    on(CounterActions.incrementCounter, (state: CounterStateInterface) => ({...state, counter: state.counter + 1})),
    on(CounterActions.customIncrementCounter, (state: CounterStateInterface, {action, value}) => ({
      ...state,
      counter: action === 'add' ? state.counter + value : state.counter - value
    })),
    on(CounterActions.decrementCounter, (state: CounterStateInterface) => ({...state, counter: state.counter - 1})),
    on(CounterActions.resetCounter, (state: CounterStateInterface) => ({
      ...state,
      counter: counterInitialState.counter
    })),
    on(CounterActions.renameChannel, (state: CounterStateInterface, {channelName}) => ({
      ...state,
      channelName
    })),
  )
});

export const {name: counterFeatureKey, reducer: counterReducer} = counterFeature;
