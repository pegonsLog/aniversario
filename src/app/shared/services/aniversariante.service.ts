import { Injectable } from '@angular/core';
import { Aniversariante } from '../model/aniversariante';

@Injectable({
  providedIn: 'root'
})

export class AniversarianteService {

  aniversariante: Aniversariante = new Aniversariante;

  retrieveAll(): Aniversariante[]{
    return ANIVERSARIANTES;
  }

  }

var ANIVERSARIANTES: Aniversariante[] =
  [
    {
      id: 1,
      nome: 'Pedro',
      cargo: 'Fiscal',
      diaAniversario: '28/Junho'
    },
    {
      id: 2,
      nome: 'Paulo',
      cargo: 'Fiscal',
      diaAniversario: '28/Dezembro'
    },
    {
      id: 3,
      nome: 'Maria',
      cargo: 'Administrativo',
      diaAniversario: '04/Março'
    }
  ]



