import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditehotelComponent } from './editehotel.component';

describe('EditehotelComponent', () => {
  let component: EditehotelComponent;
  let fixture: ComponentFixture<EditehotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditehotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditehotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
