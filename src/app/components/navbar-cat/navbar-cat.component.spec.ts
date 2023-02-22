import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarCatComponent } from './navbar-cat.component';

describe('NavbarCatComponent', () => {
  let component: NavbarCatComponent;
  let fixture: ComponentFixture<NavbarCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarCatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
