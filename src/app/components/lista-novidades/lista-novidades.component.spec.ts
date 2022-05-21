import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNovidadesComponent } from './lista-novidades.component';

describe('ListaNovidadesComponent', () => {
  let component: ListaNovidadesComponent;
  let fixture: ComponentFixture<ListaNovidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaNovidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaNovidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
