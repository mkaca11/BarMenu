import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ThemeService} from "../../services/theme.service";
import {Category} from "../../interfaces/business-data";
import {Store} from "@ngrx/store";
import {changeProductsToShow} from "../../actions/products.actions";

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
    this.store.dispatch(changeProductsToShow({data: this.menuList.find(it => it.id == menuId)?.products ?? []}))
  }

}
