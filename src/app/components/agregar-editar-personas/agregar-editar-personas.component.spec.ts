import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarPersonasComponent } from './agregar-editar-personas.component';

describe('AgregarEditarPersonasComponent', () => {
  let component: AgregarEditarPersonasComponent;
  let fixture: ComponentFixture<AgregarEditarPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarEditarPersonasComponent]
    });
    fixture = TestBed.createComponent(AgregarEditarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
