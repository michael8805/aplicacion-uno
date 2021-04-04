import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'cliente',
        data: { pageTitle: 'aplicacionUnoApp.cliente.home.title' },
        loadChildren: () => import('./cliente/cliente.module').then(m => m.ClienteModule),
      },
      {
        path: 'producto',
        data: { pageTitle: 'aplicacionUnoApp.producto.home.title' },
        loadChildren: () => import('./producto/producto.module').then(m => m.ProductoModule),
      },
      {
        path: 'venta',
        data: { pageTitle: 'aplicacionUnoApp.venta.home.title' },
        loadChildren: () => import('./venta/venta.module').then(m => m.VentaModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
