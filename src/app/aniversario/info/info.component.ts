import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({

  templateUrl: './info.component.html',

})

export class InfoComponent implements OnInit {

  aniversarianteId: number = 0;

  constructor(private activatedRoute: ActivatedRoute) {
   }

  ngOnInit(): void {

  }

}
