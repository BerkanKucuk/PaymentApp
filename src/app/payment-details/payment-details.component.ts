import { Component,OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDetailService } from '../shared/payment-detail.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-payment-details',
  imports: [CommonModule, PaymentDetailFormComponent],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent implements OnInit{

    constructor(public service : PaymentDetailService){
    }
  ngOnInit(): void {
    this.service.refreshList();
  }
}
