import { Component, OnInit } from '@angular/core';
import { CouponService } from '../services/coupon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  template: `
    <div class="container">
      <h2>Ingresa el código de un cupón para añadirlo a tu lista de cupones</h2>
      <form [formGroup]="form" (ngSubmit)="addCoupon()">
        <label for="code">Código del cupón:</label>
        <input type="text" id="code" formControlName="code">
        <div class="button-container">
          <button type="submit">Aceptar</button>
          <button routerLink="..">Volver</button>
        </div>
      </form>
    </div>
  `,
  styles: ``
})
export class AddComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private couponService: CouponService
  ) {
    this.form = this.fb.group({
      code: ['', [Validators.required]]
    });
  }
  ngOnInit(): void {
      
  }
  addCoupon(): void {
    const formValue = this.form.value;
    this.couponService.addCoupons(formValue.code).subscribe({
      next: (response) => {
        console.log("hi");
        console.log(response);
        this.router.navigate(['/coupon']);
      },
      error: (err) => {
        console.error(formValue.code);
        console.error('Error al añadir cupon:', err.message);
      },
    });
  }
}
