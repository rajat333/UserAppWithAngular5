import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChildComponentComponent } from './product-child-component.component';

describe('ProductChildComponentComponent', () => {
  let component: ProductChildComponentComponent;
  let fixture: ComponentFixture<ProductChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
