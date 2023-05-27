import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
import {Product} from "../../interfaces/business-data";
import {Store} from "@ngrx/store";
import {RootStore} from "../../interfaces/root-store";
import {Bill} from "../../interfaces/bill.interface";
import {updateBill} from "../../actions/products.actions";

@Component({
  selector: 'app-bill-card-modal',
  templateUrl: './bill-card-modal.component.html',
  styleUrls: ['./bill-card-modal.component.scss']
})
export class BillCardModalComponent implements OnDestroy, OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  bill$: Observable<Bill[]> = this.store.select(state => state.products.bill);
  total = 0
  bill: Bill[] = []
  @Output() onSendBill = new EventEmitter<Bill[]>();

  constructor(private store: Store<RootStore>) {
  }

  ngOnInit() {
    this.bill$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.bill = data
      if (data.length == 0) {
        this.total = 0
      } else {
        //reducing array and finding the total of the bill
        this.total = data.map(it => it.quantity * it.product.unitPrice).reduce((a, b) => a + b)
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe()
  }

  //on quantity click increase quantity that is stored in state for that product
  //and updating the bill state data
  increaseQuantity(prod: { product: Product; quantity: number }) {
    this.store.dispatch(updateBill({
      data: this.bill.map(it => {
        if (it == prod) {
          return {product: prod.product, quantity: prod.quantity + 1}
        }
        return it
      })
    }))

  }
  //updating bill state data to an empty array after the bill is sent
  sendBill() {
    this.onSendBill.next(this.bill)
    this.store.dispatch(updateBill({data: []}))
  }
}
