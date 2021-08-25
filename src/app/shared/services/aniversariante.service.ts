import { Injectable } from '@angular/core';
import { Aniversariante } from '../model/aniversariante';

@Injectable({
  providedIn: 'root'
})

export class AniversarianteService {

  retrieveAll(): Aniversariante[]{
    return ANIVERSARIANTES;
  }

  retrieveById(id: number): Aniversariante{
    return ANIVERSARIANTES.find((aniversarianteIterator: Aniversariante) => aniversarianteIterator.id === id);
  }

  salvar(aniversariante: Aniversariante): void{
    if(aniversariante.id){
      const index = ANIVERSARIANTES.findIndex((aniversarianteIterator: Aniversariante) => aniversarianteIterator.id === aniversariante.id);
      ANIVERSARIANTES[index] = aniversariante;
    }
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



