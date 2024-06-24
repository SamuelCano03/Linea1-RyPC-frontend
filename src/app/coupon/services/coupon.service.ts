import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CouponResponseDTO } from '../interfaces/coupon.interface';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CouponService {
    private http = inject(HttpClient);
    
    getAllCoupons(): Observable<CouponResponseDTO[]> {
        return this.http.get<CouponResponseDTO[]>(environment.apiUrl+'/coupon/list');
    }
    addCoupons(code: string): Observable<CouponResponseDTO> {
        let params = new HttpParams().set('code', code);
        return this.http.put<CouponResponseDTO>(environment.apiUrl+'/coupon/add', null, { params });
    }
    activateCoupons(code: string): Observable<CouponResponseDTO> {
        let params = new HttpParams().set('code', code);
        return this.http.put<CouponResponseDTO>(environment.apiUrl+'/coupon/activate', null, { params });
    }

}