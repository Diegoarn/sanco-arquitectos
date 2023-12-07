import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivadaProyectoComponent } from './privada-proyecto.component';

describe('PrivadaProyectoComponent', () => {
  let component: PrivadaProyectoComponent;
  let fixture: ComponentFixture<PrivadaProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivadaProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivadaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
