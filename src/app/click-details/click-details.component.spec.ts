import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickDetailsComponent } from './click-details.component';

describe('ClickDetailsComponent', () => {
  let component: ClickDetailsComponent;
  let fixture: ComponentFixture<ClickDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
