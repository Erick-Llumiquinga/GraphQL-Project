import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateestudiantesComponent } from './updateestudiantes.component';

describe('UpdateestudiantesComponent', () => {
  let component: UpdateestudiantesComponent;
  let fixture: ComponentFixture<UpdateestudiantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateestudiantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateestudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
