import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardDetailsDTO, CardRechargeRequestDTO, RechargeResponseDTO} from '../interfaces/recharge.interface';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RechargeService {
    private http = inject(HttpClient);
    
    getAllRecharges(): Observable<RechargeResponseDTO[]> {
        return this.http.get<RechargeResponseDTO[]>(environment.apiUrl+'/recharge/list');
    }
    rechargeCard(cardRechargeRequestDTO: CardRechargeRequestDTO): Observable<RechargeResponseDTO> {
        return this.http.post<RechargeResponseDTO>(environment.apiUrl+'/recharge/card', cardRechargeRequestDTO);
    }


}