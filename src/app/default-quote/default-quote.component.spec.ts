import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultQuoteComponent } from './default-quote.component';

describe('DefaultQuoteComponent', () => {
  let component: DefaultQuoteComponent;
  let fixture: ComponentFixture<DefaultQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
