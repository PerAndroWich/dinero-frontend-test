import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cancel-subscription',
    loadChildren: () => import('./pages/cancel-subscription/cancel-subscription.module').then(m => m.CancelSubscriptionModule),
  },
  {
    path: '**',
    redirectTo: 'cancel-subscription',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
