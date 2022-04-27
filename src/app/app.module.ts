import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { PlanesComponent } from './componentes/planes/planes.component';
import { PlanesOfertaComponent } from './componentes/planes-oferta/planes-oferta.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DetallePlanComponent } from './componentes/detalle-plan/detalle-plan.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PlanesComponent,
    PlanesOfertaComponent,
    CarritoComponent,
    DetallePlanComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
