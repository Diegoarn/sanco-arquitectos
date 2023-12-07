import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicoProyectoComponent } from './publico-proyecto.component';

describe('PublicoProyectoComponent', () => {
  let component: PublicoProyectoComponent;
  let fixture: ComponentFixture<PublicoProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicoProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicoProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
