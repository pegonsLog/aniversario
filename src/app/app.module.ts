import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CadastroComponent } from './aniversario/cadastro/cadastro.component';
import { ListaComponent } from './aniversario/lista/lista.component';
import { ListaModule } from './aniversario/lista/lista.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavBarComponent } from './aniversario/nav-bar/nav-bar.component';
import { Erro404Component } from './aniversario/erro404/erro404.component';
import { EditarComponent } from './aniversario/editar/editar.component';
import { VisualizarComponent } from './aniversario/visualizar/visualizar.component';


@NgModule({

  declarations: [
    AppComponent,
    CadastroComponent,
    NavBarComponent,
    Erro404Component,
    EditarComponent,
    ListaComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ListaModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'lista', pathMatch: 'full'
      },
      {
        path: 'editar/:id', component: EditarComponent
      },
      {
        path: 'visualizar/:id', component: VisualizarComponent
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
