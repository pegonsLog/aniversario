import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AniversarioModule } from './aniversario/aniversario.module';
import { CadastroComponent } from './aniversario/cadastro/cadastro.component';
import { EditarComponent } from './aniversario/edicao/editar.component';
import { ListaComponent } from './aniversario/lista/lista.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'aniversariantes',
    pathMatch: 'full'
  },
  {
    path: 'aniversariantes',
    children: [
      {
        path: '',
        component: ListaComponent
      },
      {
        path: 'cadastro',
        children: [
          {
            path: '',
            component: CadastroComponent
          },
        ]
      },
      {
        path: 'edicao',
        children: [
          {
            path: ':id',
            component: EditarComponent
          },
        ]
      },
    ]
  },
  { path: '**', redirectTo: 'aniversariantes' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AniversarioModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
