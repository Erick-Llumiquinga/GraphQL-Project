import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuusersComponent } from './menuusers.component';

describe('MenuusersComponent', () => {
  let component: MenuusersComponent;
  let fixture: ComponentFixture<MenuusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
