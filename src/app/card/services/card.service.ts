import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardAddRequestDTO, CardDetailsDTO, CardStateChangeDTO } from '../interfaces/card.interface';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CardService {
    private http = inject(HttpClient);
    
    getAllCards(): Observable<CardDetailsDTO[]> {
        return this.http.get<CardDetailsDTO[]>(environment.apiUrl+'/card/details');
    }
    addCard(cardAddRequestDTO: CardAddRequestDTO): Observable<CardDetailsDTO> {
        return this.http.put<CardDetailsDTO>(environment.apiUrl+'/card/add', cardAddRequestDTO);
    }
    blockCard(cardStateChangeDTO: CardStateChangeDTO): Observable<CardDetailsDTO> {
        return this.http.put<CardDetailsDTO>(environment.apiUrl+'/card/block', cardStateChangeDTO);
    }
    unlinkCard(cardStateChangeDTO: CardStateChangeDTO): Observable<CardDetailsDTO> {
        return this.http.put<CardDetailsDTO>(environment.apiUrl+'/card/unlink', cardStateChangeDTO);
    }


}