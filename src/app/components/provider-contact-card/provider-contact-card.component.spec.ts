import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderContactCardComponent } from './provider-contact-card.component';

describe('ProviderContactCardComponent', () => {
  let component: ProviderContactCardComponent;
  let fixture: ComponentFixture<ProviderContactCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderContactCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderContactCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
