import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwHeaderComponent } from './sw-header.component';

describe('SwHeaderComponent', () => {
  let component: SwHeaderComponent;
  let fixture: ComponentFixture<SwHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
