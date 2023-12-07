import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnifamiliarProyectoComponent } from './unifamiliar-proyecto.component';

describe('UnifamiliarProyectoComponent', () => {
  let component: UnifamiliarProyectoComponent;
  let fixture: ComponentFixture<UnifamiliarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnifamiliarProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnifamiliarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
