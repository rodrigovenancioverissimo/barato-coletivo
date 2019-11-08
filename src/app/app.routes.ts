import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component'
import {OfertaComponent} from './ofertas/oferta/oferta.component'
import { PagamentoComponent } from './pagamento/pagamento.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'oferta/:id', component: OfertaComponent},
  {path: 'pagamento/:id', component: PagamentoComponent}
]
