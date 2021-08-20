import { RodapeComponent } from './shared/components/rodape/rodape.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './aniversario/cadastro/cadastro.component';
import { ListaComponent } from './aniversario/lista/lista.component';
import { ListaModule } from './aniversario/lista/lista.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { Erro404Component } from './shared/components/erro404/erro404.component';
import { EditarComponent } from './aniversario/edicao/editar.component';
import { InfoComponent } from './aniversario/info/info.component';



@NgModule({

  declarations: [
    AppComponent,
    CadastroComponent,
    NavBarComponent,
    Erro404Component,
    EditarComponent,
    ListaComponent,
    InfoComponent,
    RodapeComponent

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ListaModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'lista', pathMatch: 'full'
      },
      {
        path: 'info/:id', component: InfoComponent
      },
      {
        path: 'editar/:id', component: EditarComponent
      },
      {
        path: 'cadastro/:id', component: CadastroComponent
      },
      {
        path: 'lista', component: ListaComponent
      },
      {
        path: '**', component: Erro404Component
      }
    ]),
    ],

  providers: [],
  bootstrap: [AppComponent]
  })

export class AppModule { }
