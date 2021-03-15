import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackVotingComponent } from './snack-voting.component';

describe('SnackVotingComponent', () => {
  let component: SnackVotingComponent;
  let fixture: ComponentFixture<SnackVotingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackVotingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
