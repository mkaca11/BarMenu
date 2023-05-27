import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { MenuHeaderComponent } from './menu-header/menu-header.component';



@NgModule({
  declarations: [
    MenuHeaderComponent
  ],
  exports: [
    MenuHeaderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class MenuComponentsModule { }
