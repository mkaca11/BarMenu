import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
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
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuComponentsModule,
    ProgressSpinnerModule,
    DialogModule,
    StoreModule.forRoot({business: businessReducer, products: productsReducer}),
    EffectsModule.forRoot([businessEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
