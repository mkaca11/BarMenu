import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';



@NgModule({
  declarations: [
    MenuHeaderComponent,
    MenuBarComponent,
    MenuItemComponent,
    ProductCardComponent,
    ProductListComponent
  ],
  exports: [
    MenuHeaderComponent,
    MenuBarComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class MenuComponentsModule { }
