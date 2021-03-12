import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakerylistComponent } from './bakerylist.component';

describe('BakerylistComponent', () => {
  let component: BakerylistComponent;
  let fixture: ComponentFixture<BakerylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BakerylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BakerylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
