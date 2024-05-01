import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CounterComponent} from "./counter/counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'learn-ngrx';
}
