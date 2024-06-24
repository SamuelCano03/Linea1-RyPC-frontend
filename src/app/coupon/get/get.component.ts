import { Component, Input } from '@angular/core';
import { CouponService } from '../services/coupon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CouponResponseDTO } from '../interfaces/coupon.interface';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styles: [``]
})
export class GetComponent {
  // @Input() cards: any;
  coupons: CouponResponseDTO[] = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private couponService: CouponService
  ){}
  ngOnInit(): void {
    this.couponService.getAllCoupons().subscribe((data: CouponResponseDTO[]) => {
      this.coupons = data;
    });
  }
}
