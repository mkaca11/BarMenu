import {Component, Input} from '@angular/core';
import {Observable} from "rxjs";
import {ThemeService} from "../../services/theme.service";
import {Product} from "../../interfaces/business-data";
import {Store} from "@ngrx/store";
import {deSelectProduct, selectProduct} from "../../actions/products.actions";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input()
  product: Product | null = null
  @Input()
  index = 0
  @Input()
  selected: boolean = false

  constructor(private store: Store) {
  }

  toggleSelected() {
    this.selected = !this.selected
    if (this.product) {
      if(this.selected){
        this.store.dispatch(selectProduct({data: this.product}))
      }else{
        this.store.dispatch(deSelectProduct({data: this.product}))
      }
    }
  }


}
