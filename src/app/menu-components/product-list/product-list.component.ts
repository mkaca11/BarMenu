import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {BusinessData, Product} from "../../interfaces/business-data";
import {Store} from "@ngrx/store";
import {RootStore} from "../../interfaces/root-store";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnDestroy, OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  productsToShow$: Observable<Product[]> = this.store.select(state => state.products.productsToShow);
  bill$: Observable<{ product: Product, quantity: number }[]> = this.store.select(state => state.products.bill);
  selectedProducts: Product[] = []
  modalPosition: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' ="bottom";
  modalVisible=true;

  constructor(private store: Store<RootStore>) {
  }

  ngOnInit() {
    this.bill$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.selectedProducts = data.map(d => d.product)
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }
}
