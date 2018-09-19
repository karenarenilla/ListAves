import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AveDatailComponent } from './ave-datail.component';

describe('AveDatailComponent', () => {
  let component: AveDatailComponent;
  let fixture: ComponentFixture<AveDatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AveDatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AveDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
