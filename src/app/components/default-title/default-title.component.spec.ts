import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTitleComponent } from './default-title.component';

describe('DefaultTitleComponent', () => {
  let component: DefaultTitleComponent;
  let fixture: ComponentFixture<DefaultTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
