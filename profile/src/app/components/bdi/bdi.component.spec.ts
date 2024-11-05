import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BDIComponent } from './bdi.component';

describe('BDIComponent', () => {
  let component: BDIComponent;
  let fixture: ComponentFixture<BDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BDIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
