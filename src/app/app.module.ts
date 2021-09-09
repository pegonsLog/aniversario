import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AniversarioModule } from './aniversario/aniversario.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { OrderPipe } from './order.pipe';
import { Erro404Component } from './shared/components/erro404/erro404.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { RodapeComponent } from './shared/components/rodape/rodape.component';

@NgModule({

  declarations: [
    AppComponent,
    NavBarComponent,
    Erro404Component,
    RodapeComponent,
    OrderPipe,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AniversarioModule,
    AppRoutingModule
    ],

  providers: [],
  bootstrap: [AppComponent]
  })

export class AppModule { }
