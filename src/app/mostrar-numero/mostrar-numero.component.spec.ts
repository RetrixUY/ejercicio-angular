import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarNumeroComponent } from './mostrar-numero.component';

describe('MostrarNumeroComponent', () => {
  let component: MostrarNumeroComponent;
  let fixture: ComponentFixture<MostrarNumeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarNumeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarNumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
