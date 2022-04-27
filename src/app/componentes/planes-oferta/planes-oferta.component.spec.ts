import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesOfertaComponent } from './planes-oferta.component';

describe('PlanesOfertaComponent', () => {
  let component: PlanesOfertaComponent;
  let fixture: ComponentFixture<PlanesOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanesOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
