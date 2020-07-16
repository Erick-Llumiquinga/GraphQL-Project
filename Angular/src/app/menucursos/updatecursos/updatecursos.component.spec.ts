import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecursosComponent } from './updatecursos.component';

describe('UpdatecursosComponent', () => {
  let component: UpdatecursosComponent;
  let fixture: ComponentFixture<UpdatecursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
