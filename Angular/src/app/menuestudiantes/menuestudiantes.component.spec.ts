import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuestudiantesComponent } from './menuestudiantes.component';

describe('MenuestudiantesComponent', () => {
  let component: MenuestudiantesComponent;
  let fixture: ComponentFixture<MenuestudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuestudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
