import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrasolComponent } from './carrasol.component';

describe('CarrasolComponent', () => {
  let component: CarrasolComponent;
  let fixture: ComponentFixture<CarrasolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrasolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrasolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
