import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EditarComponent } from './edicao/editar.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [CadastroComponent, EditarComponent, ListaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ]

})
export class AniversarioModule { }
