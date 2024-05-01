import {Component, inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {CounterStateInterface} from "../../store/types/interfaces/counterState.interface";
import * as CounterActions from "../../store/actions/counter.actions";

@Component({
  selector: "app-counter-buttons",
  templateUrl: "./counter-buttons.component.html",
  standalone: true
})
export class CounterButtonsComponent {
  private readonly store: Store<CounterStateInterface> = inject(Store<CounterStateInterface>);

  onIncrement() {
    this.store.dispatch(CounterActions.incrementCounter());
  }

  onDecrement() {
    this.store.dispatch(CounterActions.decrementCounter())
  }

  onReset() {
    this.store.dispatch(CounterActions.resetCounter());
  }

  onRename() {
    this.store.dispatch(CounterActions.renameChannel({channelName: "King Martinien Channel"}));
  }
}
