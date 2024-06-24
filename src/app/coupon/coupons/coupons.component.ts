import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-coupons',
  template: `
    <div class="container">
      <h2>Código de cupón: {{ coupon.code }}</h2>
      <h3>
        Valor de descuento: 
        {{ coupon.discountValue }}
        {{ coupon.type === 'FIXED_DISCOUNT' ? 'soles menos' : '% menos en tu próxima recarga' }}
      </h3>
      <p>Fecha de inicio: {{ coupon.startDate}}</p>
      <p>Fecha de expiración: {{ coupon.expirationDate}}</p>
      <p>Usos restantes: {{ coupon.maxUsageCount}}</p>
      <p> Activado: {{ coupon.active}}</p>
    </div>
  `,
  styles: [``]
})
export class CouponsComponent {
  @Input() coupon: any;
}
