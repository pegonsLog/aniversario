import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aniversariante } from '../shared/model/aniversariante';

const url = 'http://localhost:3000/aniversariantes/';

@Injectable({
  providedIn: 'root'
})

export class AniversarianteService {

  constructor(private http: HttpClient) {};

  salvar(aniversariante: Aniversariante): Observable<Aniversariante> {
      return this.http.post<Aniversariante>(url, aniversariante)
  }

  retrieveAll(): Observable<Aniversariante[]> {
    return this.http.get<Aniversariante[]>(url);
  }

    }

