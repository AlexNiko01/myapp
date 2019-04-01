import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MynewconponentComponent } from './mynewconponent.component';

describe('MynewconponentComponent', () => {
  let component: MynewconponentComponent;
  let fixture: ComponentFixture<MynewconponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MynewconponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MynewconponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
