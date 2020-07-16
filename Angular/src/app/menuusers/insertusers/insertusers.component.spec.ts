import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertusersComponent } from './insertusers.component';

describe('InsertusersComponent', () => {
  let component: InsertusersComponent;
  let fixture: ComponentFixture<InsertusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
