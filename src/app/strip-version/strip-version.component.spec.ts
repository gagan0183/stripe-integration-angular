import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripVersionComponent } from './strip-version.component';

describe('StripVersionComponent', () => {
  let component: StripVersionComponent;
  let fixture: ComponentFixture<StripVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
