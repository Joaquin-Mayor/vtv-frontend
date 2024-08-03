import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChangeOwnerComponent } from './admin-change-owner.component';

describe('AdminChangeOwnerComponent', () => {
  let component: AdminChangeOwnerComponent;
  let fixture: ComponentFixture<AdminChangeOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminChangeOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminChangeOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
