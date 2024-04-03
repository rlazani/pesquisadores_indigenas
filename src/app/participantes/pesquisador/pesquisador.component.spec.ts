import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisadorComponent } from './pesquisador.component';

describe('PesquisadorComponent', () => {
  let component: PesquisadorComponent;
  let fixture: ComponentFixture<PesquisadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PesquisadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PesquisadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
