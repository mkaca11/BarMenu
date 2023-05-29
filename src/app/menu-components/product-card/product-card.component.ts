import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/business-data";
import {Store} from "@ngrx/store";
import {deSelectProduct, selectProduct} from "../../actions/products.actions";
import {Observable} from "rxjs";
import {ThemeService} from "../../services/theme.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product: Product | null = null
  @Input()
  index = 0
  @Input()
  selected: boolean = false
  isDarkTheme?: Observable<boolean> = this.themeService.isDarkTheme;

  firstChar = ''
  hue: number= 0;
  saturation: number= 0;
  lightness: number= 0;
  darkness: number= 0;

  constructor(private store: Store,private themeService:ThemeService) {
    this.randomColor()
  }

  rand(min: number, max: number) {
    return min + Math.random() * (max - min);
  }

  randomColor() {
    this.hue = this.rand(1, 360);
    this.saturation = this.rand(20, 100);
    this.lightness = this.rand(40, 80);
    this.darkness = this.rand(10, 40);
  }

  ngOnInit() {
    this.firstChar = this.product?.name.match(/[a-zA-Z]/)?.pop() ?? ''
  }

  toggleSelected() {
    this.selected = !this.selected
    if (this.product) {
      if (this.selected) {
        this.store.dispatch(selectProduct({data: this.product}))
      } else {
        this.store.dispatch(deSelectProduct({data: this.product}))
      }
    }
  }


}
