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
      nome: 'Abdo Elias',
      cargo: 'Fiscal',
      diaAniversario: 28,
      mesAniversario: 'Setembro'
    },
    {
      id: 2,
      nome: 'Alexandre do Carmo',
      cargo: 'Fiscal',
      diaAniversario: 24,
      mesAniversario: 'Dezembro'
    },
    {
      id: 3,
      nome: 'Almir Fabiano',
      cargo: 'Fiscal',
      diaAniversario: 21,
      mesAniversario: 'Setembro'

    },
    {
      id: 4,
      nome: 'Amanda Ferreira',
      cargo: 'Administrativo',
      diaAniversario: 8,
      mesAniversario: 'Maio'
    },
    {
      id: 5,
      nome: 'Amauri Timotheo',
      cargo: 'Fiscal',
      diaAniversario: 14,
      mesAniversario: 'Fevereiro'

    },
    {
      id: 6,
      nome: 'Ana Cristina',
      cargo: 'Fiscal',
      diaAniversario: 2,
      mesAniversario: 'Março'
    },
    {
      id: 7,
      nome: 'Anderson Ribas',
      cargo: 'Fiscal',
      diaAniversario: 23,
      mesAniversario: 'Outubro'
    },
    {
      id: 8,
      nome: 'Antônio Natalino',
      cargo: 'Fiscal',
      diaAniversario: 25,
      mesAniversario: 'Dezembro'
    },
    {
      id: 9,
      nome: 'Antônio Nunes',
      cargo: 'Fiscal',
      diaAniversario: 30,
      mesAniversario: 'Abril'
    },
    {
      id: 10,
      nome: 'Ary Cézar',
      cargo: 'Técnico',
      diaAniversario: 18,
      mesAniversario: 'Fevereiro'
    },
    {
      id: 11,
      nome: 'Cleóbulo Nunes',
      cargo: 'Fiscal',
      diaAniversario: 9,
      mesAniversario: 'Janeiro'
    },
    {
      id: 12,
      nome: 'Cíntia Fleming',
      cargo: 'Fiscal',
      diaAniversario: 8,
      mesAniversario: 'Fevereiro'
    },
    {
      id: 13,
      nome: 'Demétrios Navais',
      cargo: 'Fiscal',
      diaAniversario: 22,
      mesAniversario: 'Maio'
    },
    {
      id: 14,
      nome: 'Eduardo Alves',
      cargo: 'Fiscal',
      diaAniversario: 20,
      mesAniversario: 'Janeiro'
    },
    {
      id: 15,
      nome: 'Elenice Canuto',
      cargo: 'Fiscal',
      diaAniversario: 7,
      mesAniversario: 'Maio'
    },
    {
      id: 16,
      nome: 'Eliane Vanessa',
      cargo: 'Fiscal',
      diaAniversario: 24,
      mesAniversario: 'Outubro'
    },
    {
      id: 17,
      nome: 'Emerson Silva',
      cargo: 'Fiscal',
      diaAniversario: 22,
      mesAniversario: 'Fevereiro'
    },
    {
      id: 18,
      nome: 'Everaldo da Mata',
      cargo: 'Supervisor',
      diaAniversario: 18,
      mesAniversario: 'Julho'
    },
    {
      id: 19,
      nome: 'Fernando Rezende',
      cargo: 'Analista',
      diaAniversario: 3,
      mesAniversario: 'Setembro'
    },
    {
      id: 20,
      nome: 'Flávio André',
      cargo: 'Coordenador',
      diaAniversario: 3,
      mesAniversario: 'Dezembro'
    },
    {
      id: 21,
      nome: 'Florindo Peroni',
      cargo: 'Coordenador',
      diaAniversario: 25,
      mesAniversario: 'Novembro'
    },
    {
      id: 22,
      nome: 'Gilberto Geraldo',
      cargo: 'Técnico',
      diaAniversario: 8,
      mesAniversario: 'Outubro'
    },
    {
      id: 23,
      nome: 'Gilberto Marcos',
      cargo: 'Fiscal',
      diaAniversario: 10,
      mesAniversario: 'Outubro'
    },
    {
      id: 24,
      nome: 'Gilmar Bacelete',
      cargo: 'Fiscal',
      diaAniversario: 3,
      mesAniversario: 'Dezembro'
    },
    {
      id: 25,
      nome: 'Gisele Tolentino',
      cargo: 'Fiscal',
      diaAniversario: 25,
      mesAniversario: 'Fevereiro'
    },
    {
      id: 26,
      nome: 'Helenice Margareth',
      cargo: 'Secretária',
      diaAniversario: 20,
      mesAniversario: 'Fevereiro'
    },
    {
      id: 27,
      nome: 'Heraldo Carneiro',
      cargo: 'Fiscal',
      diaAniversario: 16,
      mesAniversario: 'Outubro'
    },
    {
      id: 28,
      nome: 'Hipólito Garcia',
      cargo: 'Fiscal',
      diaAniversario: 15,
      mesAniversario: 'Janeiro'
    },
    {
      id: 29,
      nome: 'Iêda Milton',
      cargo: 'Fiscal',
      diaAniversario: 31,
      mesAniversario: 'Outubro'
    },
    {
      id: 30,
      nome: 'Igor Gonçalves',
      cargo: 'Fiscal',
      diaAniversario: 23,
      mesAniversario: 'Fevereiro'
    },
    {
      id: 31,
      nome: 'Jaime Calisto',
      cargo: 'Fiscal',
      diaAniversario: 17,
      mesAniversario: 'Abril'
    },
    {
      id: 32,
      nome: 'José Orestes',
      cargo: 'Fiscal',
      diaAniversario: 20,
      mesAniversario: 'Março'
    },
    {
      id: 33,
      nome: 'José Renato',
      cargo: 'Analista',
      diaAniversario: 31,
      mesAniversario: 'Agosto'
    },
    {
      id: 34,
      nome: 'Josué Ferreira',
      cargo: 'Fiscal',
      diaAniversario: 24,
      mesAniversario: 'Outubro'
    },
    {
      id: 35,
      nome: 'Juarez Magalhães',
      cargo: 'Fiscal',
      diaAniversario: 11,
      mesAniversario: 'Abril'
    },
    {
      id: 36,
      nome: 'Júnio Eduardo',
      cargo: 'Fiscal',
      diaAniversario: 27,
      mesAniversario: 'Dezembro'
    },
    {
      id: 37,
      nome: 'Luciano Evaristo',
      cargo: 'Fiscal',
      diaAniversario: 10,
      mesAniversario: 'Agosto'
    },
    {
      id: 38,
      nome: 'Lucinéia Viana',
      cargo: 'Recepcionista',
      diaAniversario: 5,
      mesAniversario: 'Agosto'
    },
    {
      id: 39,
      nome: 'Marcelo Elias',
      cargo: 'Fiscal',
      diaAniversario: 26,
      mesAniversario: 'Outubro'
    },
    {
      id: 40,
      nome: 'Modesto Pereira',
      cargo: 'Fiscal',
      diaAniversario: 21,
      mesAniversario: 'Julho'
    },
    {
      id: 41,
      nome: 'Mônica Aparecida',
      cargo: 'Fiscal',
      diaAniversario: 9,
      mesAniversario: 'Julho'
    },
    {
      id: 42,
      nome: 'Natália Bibiana',
      cargo: 'Técnica',
      diaAniversario: 2,
      mesAniversario: 'Dezembro'
    },
    {
      id: 43,
      nome: 'Pedro Gonçalves',
      cargo: 'Fiscal',
      diaAniversario: 28,
      mesAniversario: 'Junho'
    },
    {
      id: 44,
      nome: 'Péricles Eduardo',
      cargo: 'Fiscal',
      diaAniversario: 24,
      mesAniversario: 'Julho'
    },
    {
      id: 45,
      nome: 'Renato Miranda',
      cargo: 'Coordenador',
      diaAniversario: 15,
      mesAniversario: 'Agosto'
    },
    {
      id: 46,
      nome: 'Richardson da Silva',
      cargo: 'Motorista',
      diaAniversario: 28,
      mesAniversario: 'Março'
    },
    {
      id: 47,
      nome: 'Roberto Coelho',
      cargo: 'Fiscal',
      diaAniversario: 12,
      mesAniversario: 'Setembro'
    },
    {
      id: 48,
      nome: 'Roberto Emiliano',
      cargo: 'Serviços Gerais',
      diaAniversario: 17,
      mesAniversario: 'Março'
    },
    {
      id: 49,
      nome: 'Roberto Junior',
      cargo: 'Fiscal',
      diaAniversario: 26,
      mesAniversario: 'Abril'
    },
    {
      id: 50,
      nome: 'Rosalino José',
      cargo: 'Fiscal',
      diaAniversario: 17,
      mesAniversario: 'Setembro'
    },
    {
      id: 51,
      nome: 'Rubens Fernandes',
      cargo: 'Fiscal',
      diaAniversario: 1,
      mesAniversario: 'Janeiro'
    },
    {
      id: 52,
      nome: 'Simone Christine',
      cargo: 'Administrativo',
      diaAniversario: 30,
      mesAniversario: 'Outubro'
    },
    {
      id: 53,
      nome: 'Valéria Miranda',
      cargo: 'Fiscal',
      diaAniversario: 24,
      mesAniversario: 'Novembro'
    },
    {
      id: 54,
      nome: 'Victor Severino',
      cargo: 'Fiscal',
      diaAniversario: 6,
      mesAniversario: 'Novembro'
    },
    {
      id: 55,
      nome: 'Viviane Ceres',
      cargo: 'Fiscal',
      diaAniversario: 13,
      mesAniversario: 'Setembro'
    },
    {
      id: 56,
      nome: 'William Servino',
      cargo: 'Supervisor',
      diaAniversario: 12,
      mesAniversario: 'Setembro'
    },
  ]
