import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {Product} from "../../interfaces/business-data";
import {Store} from "@ngrx/store";
import {RootStore} from "../../interfaces/root-store";

@Component({
  selector: 'app-bill-card-modal',
  templateUrl: './bill-card-modal.component.html',
  styleUrls: ['./bill-card-modal.component.scss']
})
export class BillCardModalComponent implements OnDestroy, OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  bill$: Observable<{ product: Product, quantity: number }[]> = this.store.select(state => state.products.bill);
  total = 0
  bill: { product: Product, quantity: number }[] = []

  constructor(private store: Store<RootStore>) {
  }

  ngOnInit() {
    this.bill$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.bill = data
      if(data.length==0)
        this.total = 0
      this.total = data.map(it => it.quantity * it.product.unitPrice).reduce((a, b) => a + b)
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

  increaseQuantity(prod: { product: Product; quantity: number }) {


  }
}
