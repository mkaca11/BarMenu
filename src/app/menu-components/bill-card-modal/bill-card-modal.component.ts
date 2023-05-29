import {Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {Observable, Subject, takeUntil} from "rxjs";
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
  @Output() onNoItems = new EventEmitter<boolean>();

  constructor(private store: Store<RootStore>) {
  }


  ngOnInit() {

    this.bill$.pipe(takeUntil(this.destroy$)).subscribe(data => {
      this.bill = data.map(it => {
        return {...it}
      })
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

  //updating bill state data to an empty array after the bill is sent
  sendBill() {
    this.onSendBill.next(this.bill)
    this.store.dispatch(updateBill({data: []}))
  }

  onQuantityChange(prod: Bill, quantity: number) {
    if (quantity <= 0) {
      const newBillItems = this.bill.filter(it => it != prod)
      this.store.dispatch(updateBill({data: newBillItems}))
      if (newBillItems.length == 0) {
        this.onNoItems.next(true)
      }
    } else {
      const newBillItems = this.bill.map(it => {
        if (it == prod) {
          return {product: prod.product, quantity: quantity}
        }
        return it
      })
      this.store.dispatch(updateBill({
        data: newBillItems
      }))

    }

  }
}
