import {Component, inject} from "@angular/core";
import {Store} from "@ngrx/store";
import {CounterStateInterface} from "../../store/types/interfaces/counterState.interface";
import * as CounterActions from "../../store/actions/counter.actions";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
})
export class CustomCounterComponent {
  private readonly store: Store<CounterStateInterface> = inject(Store<CounterStateInterface>);
  inputValue: number = 0;
  actionType: string = 'add';

  onIncrement() {
    this.store.dispatch(CounterActions.customIncrementCounter({action: this.actionType, value: this.inputValue}));
  }
}
