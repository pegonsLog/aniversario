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
      diaAniversario: '28/Setembro'
    },
    {
      id: 2,
      nome: 'Alexandre do Carmo',
      cargo: 'Fiscal',
      diaAniversario: '24/Dezembro'
    },
    {
      id: 3,
      nome: 'Almir Fabiano',
      cargo: 'Fiscal',
      diaAniversario: '21/Setembro'
    },
    {
      id: 4,
      nome: 'Amanda Ferreira',
      cargo: 'Administrativo',
      diaAniversario: '08/Maio'
    },
    {
      id: 5,
      nome: 'Amauri Timotheo',
      cargo: 'Fiscal',
      diaAniversario: '14/Fevereiro'
    },
    {
      id: 6,
      nome: 'Ana Cristina',
      cargo: 'Fiscal',
      diaAniversario: '02/Março'
    },
    {
      id: 7,
      nome: 'Anderson Ribas',
      cargo: 'Fiscal',
      diaAniversario: '23/Outubro'
    },
    {
      id: 8,
      nome: 'Antônio Natalino',
      cargo: 'Fiscal',
      diaAniversario: '25/Dezembro'
    },
    {
      id: 9,
      nome: 'Antônio Nunes',
      cargo: 'Fiscal',
      diaAniversario: '30/Abril'
    },
    {
      id: 10,
      nome: 'Ary Cézar',
      cargo: 'Técnico',
      diaAniversario: '18/Fevereiro'
    },
    {
      id: 11,
      nome: 'Cleóbulo Nunes',
      cargo: 'Fiscal',
      diaAniversario: '09/Janeiro'
    },
    {
      id: 12,
      nome: 'Cíntia Fleming',
      cargo: 'Fiscal',
      diaAniversario: '08/Fevereiro'
    },
    {
      id: 13,
      nome: 'Demétrios Navais',
      cargo: 'Fiscal',
      diaAniversario: '22/Maio'
    },
    {
      id: 14,
      nome: 'Eduardo Alves',
      cargo: 'Fiscal',
      diaAniversario: '20/Janeiro'
    },
    {
      id: 15,
      nome: 'Elenice Canuto',
      cargo: 'Fiscal',
      diaAniversario: '07/Maio'
    },
    {
      id: 16,
      nome: 'Eliane Vanessa',
      cargo: 'Fiscal',
      diaAniversario: '24/Outubro'
    },
    {
      id: 17,
      nome: 'Emerson Silva',
      cargo: 'Fiscal',
      diaAniversario: '22/Fevereiro'
    },
    {
      id: 18,
      nome: 'Everaldo da Mata',
      cargo: 'Supervisor',
      diaAniversario: '18/Julho'
    },
    {
      id: 19,
      nome: 'Fernando Rezende',
      cargo: 'Analista',
      diaAniversario: '03/Setembro'
    },
    {
      id: 20,
      nome: 'Flávio André',
      cargo: 'Coordenador',
      diaAniversario: '03/Dezembro'
    },
    {
      id: 21,
      nome: 'Florindo Peroni',
      cargo: 'Coordenador',
      diaAniversario: '25/Novembro'
    },
    {
      id: 22,
      nome: 'Gilberto Geraldo',
      cargo: 'Técnico',
      diaAniversario: '08/Outubro'
    },
    {
      id: 23,
      nome: 'Gilberto Marcos',
      cargo: 'Fiscal',
      diaAniversario: '10/Outubro'
    },
    {
      id: 24,
      nome: 'Gilmar Bacelete',
      cargo: 'Fiscal',
      diaAniversario: '03/Dezembro'
    },
    {
      id: 25,
      nome: 'Gisele Tolentino',
      cargo: 'Fiscal',
      diaAniversario: '08/Fevereiro'
    },
    {
      id: 26,
      nome: 'Helenice Margareth',
      cargo: 'Secretária',
      diaAniversario: '20/Fevereiro'
    },
    {
      id: 27,
      nome: 'Heraldo Carneiro',
      cargo: 'Fiscal',
      diaAniversario: '16/Outubro'
    },
    {
      id: 28,
      nome: 'Hipólito Garcia',
      cargo: 'Fiscal',
      diaAniversario: '15/Janeiro'
    },
    {
      id: 29,
      nome: 'Iêda Milton',
      cargo: 'Fiscal',
      diaAniversario: '31/Outubro'
    },
    {
      id: 30,
      nome: 'Igor Gonçalves',
      cargo: 'Fiscal',
      diaAniversario: '23/Fevereiro'
    },
    {
      id: 31,
      nome: 'Jaime Calisto',
      cargo: 'Fiscal',
      diaAniversario: '17/Abril'
    },
    {
      id: 32,
      nome: 'José Orestes',
      cargo: 'Fiscal',
      diaAniversario: '20/Março'
    },
    {
      id: 33,
      nome: 'José Renato',
      cargo: 'Analista',
      diaAniversario: '31/Agosto'
    },
    {
      id: 34,
      nome: 'Josué Ferreira',
      cargo: 'Fiscal',
      diaAniversario: '24/Outubro'
    },
    {
      id: 35,
      nome: 'Juarez Magalhães',
      cargo: 'Fiscal',
      diaAniversario: '11/Abril'
    },
    {
      id: 36,
      nome: 'Júnio Eduardo',
      cargo: 'Fiscal',
      diaAniversario: '27/Dezembro'
    },
    {
      id: 37,
      nome: 'Luciano Evaristo',
      cargo: 'Fiscal',
      diaAniversario: '10/Agosto'
    },
    {
      id: 38,
      nome: 'Lucinéia Viana',
      cargo: 'Recepcionista',
      diaAniversario: '05/Agosto'
    },
    {
      id: 39,
      nome: 'Marcelo Elias',
      cargo: 'Fiscal',
      diaAniversario: '26/Outubro'
    },
    {
      id: 40,
      nome: 'Modesto Pereira',
      cargo: 'Fiscal',
      diaAniversario: '21/Julho'
    },
    {
      id: 41,
      nome: 'Mônica Aparecida',
      cargo: 'Fiscal',
      diaAniversario: '09/Julho'
    },
    {
      id: 42,
      nome: 'Natália Bibiana',
      cargo: 'Técnica',
      diaAniversario: '02/Dezembro'
    },
    {
      id: 43,
      nome: 'Pedro Gonçalves',
      cargo: 'Fiscal',
      diaAniversario: '28/Junho'
    },
    {
      id: 44,
      nome: 'Péricles Eduardo',
      cargo: 'Fiscal',
      diaAniversario: '24/Julho'
    },
    {
      id: 45,
      nome: 'Renato Miranda',
      cargo: 'Coordenador',
      diaAniversario: '15/Agosto'
    },
    {
      id: 46,
      nome: 'Richardson da Silva',
      cargo: 'Motorista',
      diaAniversario: '28/Março'
    },
    {
      id: 47,
      nome: 'Roberto Coelho',
      cargo: 'Fiscal',
      diaAniversario: '12/Setembro'
    },
    {
      id: 48,
      nome: 'Roberto Emiliano',
      cargo: 'Serviços Gerais',
      diaAniversario: '17/Março'
    },
    {
      id: 49,
      nome: 'Roberto Junior',
      cargo: 'Fiscal',
      diaAniversario: '26/Abril'
    },
    {
      id: 50,
      nome: 'Rosalino José',
      cargo: 'Fiscal',
      diaAniversario: '17/Setembro'
    },
    {
      id: 51,
      nome: 'Rubens Fernandes',
      cargo: 'Fiscal',
      diaAniversario: '01/Janeiro'
    },
    {
      id: 52,
      nome: 'Simone Christine',
      cargo: 'Administrativo',
      diaAniversario: '30/Outubro'
    },
    {
      id: 53,
      nome: 'Valéria Miranda',
      cargo: 'Fiscal',
      diaAniversario: '24/Novembro'
    },
    {
      id: 54,
      nome: 'Victor Severino',
      cargo: 'Fiscal',
      diaAniversario: '06/Novembro'
    },
    {
      id: 55,
      nome: 'Viviane Ceres',
      cargo: 'Fiscal',
      diaAniversario: '13/Setembro'
    },
    {
      id: 56,
      nome: 'William Servino',
      cargo: 'Supervisor',
      diaAniversario: '12/Setembro'
    },
  ]
