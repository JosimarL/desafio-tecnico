import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private apiUrl = 'http://localhost:8080/transferencias';

  constructor(private http: HttpClient) {}

  listar(): Observable<Transferencia[]> {
    return this.http.get<Transferencia[]>(this.apiUrl);
  }

  agendar(t: Transferencia): Observable<Transferencia> {
    return this.http.post<Transferencia>(this.apiUrl, t);
  }

}
