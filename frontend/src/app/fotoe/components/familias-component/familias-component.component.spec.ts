import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliasComponentComponent } from './familias-component.component';

describe('FamiliasComponentComponent', () => {
  let component: FamiliasComponentComponent;
  let fixture: ComponentFixture<FamiliasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FamiliasComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FamiliasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
