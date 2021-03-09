import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastracionesComponent } from './castraciones.component';

describe('CastracionesComponent', () => {
  let component: CastracionesComponent;
  let fixture: ComponentFixture<CastracionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
