import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsnoteComponent } from './iconsnote.component';

describe('IconsnoteComponent', () => {
  let component: IconsnoteComponent;
  let fixture: ComponentFixture<IconsnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsnoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
