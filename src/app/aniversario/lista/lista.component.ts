import { Component, OnInit } from '@angular/core';
import { AniversarianteService } from '../../core/aniversariante.service';
import { Aniversariante } from '../../shared/model/aniversariante';

@Component({
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  aniversariantesFiltrados: Aniversariante[] = [];

  _aniversariantes: Aniversariante[] = [];

  _filtrarNome: string = '';
  _filtrarData: string = '';

  constructor(private aniversarianteService: AniversarianteService) { }

  ngOnInit(): void {

    this.aniversarianteService.retrieveAll().subscribe((aniversariantes: Aniversariante[]) => this._aniversariantes = aniversariantes);
    this.aniversariantesFiltrados = this._aniversariantes;

  }

  set filtrarNome(value: string) {
    this._filtrarNome = value;
    this.aniversariantesFiltrados = this._aniversariantes
      .filter((aniversariante: Aniversariante) => aniversariante.nome.toLocaleLowerCase()
        .indexOf(this._filtrarNome.toLocaleLowerCase()) > -1);
  }
  set filtrarData(value: string) {
    this._filtrarData = value;
    this.aniversariantesFiltrados = this._aniversariantes
      .filter((aniversariante: Aniversariante) => aniversariante.mesAniversario.toLocaleLowerCase()
        .indexOf(this._filtrarData.toLocaleLowerCase()) > -1);
  }

  get filtrarNome() {
    return this._filtrarNome;
  }
  get filtrarData() {
    return this._filtrarData;
  }
}
