import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureitemComponent } from './featureitem.component';

describe('FeatureitemComponent', () => {
  let component: FeatureitemComponent;
  let fixture: ComponentFixture<FeatureitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureitemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
