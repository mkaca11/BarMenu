import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenuComponentsModule} from "./menu-components/menu-components.module";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {businessReducer} from "./reducers/business.reducer";
import * as businessEffects from './effects/business.effects';
import {HttpClientModule} from "@angular/common/http";
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {productsReducer} from "./reducers/products.reducer";
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MenuComponentsModule,
    ProgressSpinnerModule,
    DialogModule,
    StoreModule.forRoot({business: businessReducer, products: productsReducer}),//initializing ngrx root state using the business and products reducers
    EffectsModule.forRoot([businessEffects]) //defining businessEffects (loadBusinessData effect)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
