import {Component, inject} from "@angular/core";
import {select, Store} from "@ngrx/store";
import {CounterStateInterface} from "../../store/types/interfaces/counterState.interface";
import {selectChannelName, selectCounter} from "../../store/selectors/counter.selectors";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  template:
    `
      <div class="text-center text-2xl font-semibold">Channel name : <span
        class="text-blue-900">{{ channel$ | async }}</span></div>
      <div class="text-center text-2xl font-semibold">Counter is <span>{{ counter$ | async }}</span></div>
    `
})
export class CounterDisplayComponent {
  private readonly store: Store<CounterStateInterface> = inject(Store<CounterStateInterface>);
  counter$: Observable<number> = this.store.pipe(select(selectCounter));
  channel$: Observable<string> = this.store.pipe(select(selectChannelName));
}
