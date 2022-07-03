import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogueFormComponent } from './dialogue-form.component';

describe('DialogueFormComponent', () => {
  let component: DialogueFormComponent;
  let fixture: ComponentFixture<DialogueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogueFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
