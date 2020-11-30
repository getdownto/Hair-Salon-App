import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberCartComponent } from './team-member-cart.component';

describe('TeamMemberCartComponent', () => {
  let component: TeamMemberCartComponent;
  let fixture: ComponentFixture<TeamMemberCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamMemberCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
