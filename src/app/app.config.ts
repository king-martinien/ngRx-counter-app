import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideState, provideStore} from '@ngrx/store';
import {counterFeatureKey, counterReducer} from "./counter/store/reducers/counter.reducers";
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore(),
    provideState(counterFeatureKey, counterReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
