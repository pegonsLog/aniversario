import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aniversariante } from 'src/app/shared/model/aniversariante';
import { AniversarianteService } from 'src/app/shared/services/aniversariante.service';

@Component({
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  aniversariante: Aniversariante = new Aniversariante();


  constructor(private activatedRoute: ActivatedRoute, private aniversarianteService: AniversarianteService) {
   }

  ngOnInit(): void {

  }

}
