import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSubcategoryComponent } from './post-subcategory.component';

describe('PostSubcategoryComponent', () => {
  let component: PostSubcategoryComponent;
  let fixture: ComponentFixture<PostSubcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostSubcategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostSubcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
