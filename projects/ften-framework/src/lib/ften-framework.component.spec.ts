import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FtenFrameworkComponent } from './ften-framework.component';

describe('FtenFrameworkComponent', () => {
  let component: FtenFrameworkComponent;
  let fixture: ComponentFixture<FtenFrameworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FtenFrameworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FtenFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
