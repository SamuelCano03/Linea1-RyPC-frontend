import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RechargeService } from '../services/recharge.service';

@Component({
  selector: 'app-via-card',
  templateUrl: './via-card.component.html',
  styles: [``]
})

export class ViaCardComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private RechargeService: RechargeService
  ) {
    this.form = this.fb.group({
      code: ['', [Validators.required, Validators.pattern('^[0-9]{8}$')]],
      paymentMethod: ['', [Validators.required]],
      cardHolder: ['', [Validators.required]],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expirationDate: ['', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])\/[0-9]{2}')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      amount: ['', [Validators.required, Validators.min(0)]]
    });
  }
  ngOnInit(): void {
      
  }
  rechargeCard(): void {
    const requestoDTO = {
      trainCardNumber: this.form.value.code,
      paymentMethod: this.form.value.paymentMethod,
      cardHolder: this.form.value.cardHolder,
      cardNumber: this.form.value.cardNumber,
      expiryDate: this.form.value.expirationDate,
      cvv: this.form.value.cvv,
      rechargedAmount: this.form.value.amount
    }
    this.RechargeService.rechargeCard(requestoDTO).subscribe({
      next: (response) => {
        console.log("hi");
        console.log(response);
        this.router.navigate(['/recharge']);
      },
      error: (err) => {
        console.error(requestoDTO);
        console.error('Error al recargar tarjeta:', err.message);
      },
    });
  }
}
