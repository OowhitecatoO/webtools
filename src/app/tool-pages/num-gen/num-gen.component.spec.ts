import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumGenComponent } from './num-gen.component';

describe('NumGenComponent', () => {
  let component: NumGenComponent;
  let fixture: ComponentFixture<NumGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
