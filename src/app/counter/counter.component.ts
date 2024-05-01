import {Component} from "@angular/core";
import {CounterButtonsComponent} from "./components/counter-buttons/counter-buttons.component";
import {CounterDisplayComponent} from "./components/counter-display/counter-display.component";
import {CustomCounterComponent} from "./components/custom-counter/custom-counter.component";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  imports: [
    CounterButtonsComponent,
    CounterDisplayComponent,
    CustomCounterComponent
  ],
  standalone: true
})
export class CounterComponent {

}


