import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CancelSubscriptionComponent } from './cancel-subscription.component';

import { cancelSubscriptionFeatureKey } from './store/cancel-subscription.selector';
import { cancelSubscriptionReducer } from './store/cancel-subscription.reducer';
import { CancelSubscriptionEffects } from './store/cancel-subscription.effects';

describe('CancelSubscriptionComponent', () => {
  let component: CancelSubscriptionComponent;
  let fixture: ComponentFixture<CancelSubscriptionComponent>;

  beforeEach(async(() => {
    const routes: Route[] = [
      {
        path: '',
        component: CancelSubscriptionComponent,
      },
    ];

    TestBed.configureTestingModule({
      declarations: [
        CancelSubscriptionComponent,
      ],
      imports: [
        CommonModule,
        RouterModule.forChild(routes),
        StoreModule.forRoot({}),
        StoreModule.forFeature(cancelSubscriptionFeatureKey, cancelSubscriptionReducer),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([
          CancelSubscriptionEffects,
        ]),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
