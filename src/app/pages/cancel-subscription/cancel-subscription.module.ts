import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CancelSubscriptionComponent } from './cancel-subscription.component';

import { CancelSubscriptionEffects } from './store/cancel-subscription.effects';
import { cancelSubscriptionReducer } from './store/cancel-subscription.reducer';
import { cancelSubscriptionFeatureKey } from './store/cancel-subscription.selector';

const routes: Route[] = [
  {
    path: '',
    component: CancelSubscriptionComponent,
  },
];

@NgModule({
  declarations: [
    CancelSubscriptionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(cancelSubscriptionFeatureKey, cancelSubscriptionReducer),
    EffectsModule.forFeature([
      CancelSubscriptionEffects,
    ]),
  ],
  exports: [
    CancelSubscriptionComponent,
  ],
})
export class CancelSubscriptionModule { }
