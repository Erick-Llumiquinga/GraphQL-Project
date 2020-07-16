import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertestudiantesComponent } from './insertestudiantes.component';

describe('InsertestudiantesComponent', () => {
  let component: InsertestudiantesComponent;
  let fixture: ComponentFixture<InsertestudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertestudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
