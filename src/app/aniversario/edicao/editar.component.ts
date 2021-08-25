import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aniversariante } from 'src/app/shared/model/aniversariante';
import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';

@Component({

  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {


  aniversariante: Aniversariante;


  constructor(private activatedRoute: ActivatedRoute, private aniversarianteService: AniversarianteService) {
   }

  ngOnInit(): void {
    this.aniversariante = this.aniversarianteService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id'));
  }

  salvar(): void {
    this.aniversarianteService.salvar(this.aniversariante);
  }

}
