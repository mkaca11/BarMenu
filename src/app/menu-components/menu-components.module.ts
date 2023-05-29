import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BillCardModalComponent } from './bill-card-modal/bill-card-modal.component';
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from "primeng/inputnumber";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import { BillConfirmationCardModalComponent } from './bill-confirmation-card-modal/bill-confirmation-card-modal.component';
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";



@NgModule({
  declarations: [
    MenuHeaderComponent,
    MenuBarComponent,
    MenuItemComponent,
    ProductCardComponent,
    ProductListComponent,
    BillCardModalComponent,
    BillConfirmationCardModalComponent
  ],
  exports: [
    MenuHeaderComponent,
    MenuBarComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    DialogModule,
    InputNumberModule,
    ButtonModule,
    FormsModule,
    CdkVirtualScrollViewport,
  ]
})
export class MenuComponentsModule { }
