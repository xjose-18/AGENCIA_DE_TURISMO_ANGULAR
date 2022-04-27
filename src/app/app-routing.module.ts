import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DetallePlanComponent } from './componentes/detalle-plan/detalle-plan.component';
import { HomeComponent } from './componentes/home/home.component';
import { PlanesOfertaComponent } from './componentes/planes-oferta/planes-oferta.component';
import { PlanesComponent } from './componentes/planes/planes.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'planes',
    component: PlanesComponent
  },
  {
    path: 'planes/detalle-plan',
    component:DetallePlanComponent
  },
  {
    path: 'planes_en_oferta',
    component: PlanesOfertaComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
