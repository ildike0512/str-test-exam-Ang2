import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorCustomersComponent } from './editor-customers.component';

describe('EditorCustomersComponent', () => {
  let component: EditorCustomersComponent;
  let fixture: ComponentFixture<EditorCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
