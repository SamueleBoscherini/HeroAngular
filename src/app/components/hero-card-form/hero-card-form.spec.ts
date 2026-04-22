import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardForm } from './hero-card-form';

describe('HeroCardForm', () => {
  let component: HeroCardForm;
  let fixture: ComponentFixture<HeroCardForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCardForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroCardForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
