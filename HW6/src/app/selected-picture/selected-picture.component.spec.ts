import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedPictureComponent } from './selected-picture.component';

describe('SelectedPictureComponent', () => {
  let component: SelectedPictureComponent;
  let fixture: ComponentFixture<SelectedPictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
