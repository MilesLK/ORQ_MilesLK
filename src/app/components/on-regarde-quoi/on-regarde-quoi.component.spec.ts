import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnRegardeQuoiComponent } from './on-regarde-quoi.component';

describe('OnRegardeQuoiComponent', () => {
  let component: OnRegardeQuoiComponent;
  let fixture: ComponentFixture<OnRegardeQuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnRegardeQuoiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnRegardeQuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
