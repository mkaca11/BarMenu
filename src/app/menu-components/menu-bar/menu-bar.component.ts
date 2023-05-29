import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Category} from "../../interfaces/business-data";
import {Store} from "@ngrx/store";
import {changeProductsToShow} from "../../actions/products.actions";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import {of} from "rxjs";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  @Input()
  menuList: Category[] = []
  selectedMenu = -1


  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.selectedMenu = this.menuList.length > 0 ? this.menuList[0].id : -1
  }

  changeMenuSelection(menuId: number) {
    this.selectedMenu = menuId;
    const el = document.getElementById('menu-'+menuId)
    el?.scrollIntoView({
      behavior: 'smooth', block: 'nearest', inline: 'start'
    });
    const selectedMenuItem = this.menuList.find(it => it.id == menuId)
    if (selectedMenuItem) {
      //update menu list to put the selected menuitem at the beginning

      //update the productsToShow state property showing only the products of the selected menu
      this.store.dispatch(changeProductsToShow({data: selectedMenuItem.products ?? []}))

    }
  }

}
