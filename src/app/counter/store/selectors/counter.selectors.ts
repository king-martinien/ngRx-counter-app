import {createFeatureSelector, createSelector} from "@ngrx/store";
import {counterFeatureKey} from "../reducers/counter.reducers";
import {CounterStateInterface} from "../types/interfaces/counterState.interface";

const selectCounterFeature = createFeatureSelector<CounterStateInterface>(counterFeatureKey);

export const selectCounter = createSelector(
  selectCounterFeature, (state: CounterStateInterface) => state.counter);

export const selectChannelName = createSelector(
  selectCounterFeature, (state: CounterStateInterface) => state.channelName);
