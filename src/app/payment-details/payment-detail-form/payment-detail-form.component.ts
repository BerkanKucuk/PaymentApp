import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule } from '@angular/forms'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail-form',
  imports: [FormsModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {

  constructor(public service : PaymentDetailService){
  
      }

    restrictNumeric(event: KeyboardEvent) {
        if (!/[0-9]/.test(event.key)) {
          event.preventDefault();
        }
      }
    
  onSubmit(form : NgForm){
    if (form.valid){
      this.service.postPaymentDetail()
    .subscribe({
      next:res=>{
        console.log(res);
        this.service.resetForm(form);
      },
      error: err => { console.log(err)}
    })
    alert("Bilgileriniz başarıyla kaydedildi!.")
    }

  }    
}
