import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorzeComponent } from './morze.component';

describe('MorzeComponent', () => {
  let component: MorzeComponent;
  let fixture: ComponentFixture<MorzeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorzeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorzeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
