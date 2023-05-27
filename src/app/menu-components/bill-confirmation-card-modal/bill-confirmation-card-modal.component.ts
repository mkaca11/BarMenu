import {Component, EventEmitter, Output} from '@angular/core';
import {Bill} from "../../interfaces/bill.interface";

@Component({
  selector: 'app-bill-confirmation-card-modal',
  templateUrl: './bill-confirmation-card-modal.component.html',
  styleUrls: ['./bill-confirmation-card-modal.component.scss']
})
export class BillConfirmationCardModalComponent {

  @Output()
  onClose = new EventEmitter<boolean>();

  onClosePressed() {
    this.onClose.next(true)
  }
}
