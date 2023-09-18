import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPComponent } from './default-p.component';

describe('DefaultPComponent', () => {
  let component: DefaultPComponent;
  let fixture: ComponentFixture<DefaultPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
