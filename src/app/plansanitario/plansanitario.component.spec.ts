import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansanitarioComponent } from './plansanitario.component';

describe('PlansanitarioComponent', () => {
  let component: PlansanitarioComponent;
  let fixture: ComponentFixture<PlansanitarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlansanitarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlansanitarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
