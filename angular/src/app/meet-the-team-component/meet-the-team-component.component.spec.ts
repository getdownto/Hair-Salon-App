import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheTeamComponentComponent } from './meet-the-team-component.component';

describe('MeetTheTeamComponentComponent', () => {
  let component: MeetTheTeamComponentComponent;
  let fixture: ComponentFixture<MeetTheTeamComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetTheTeamComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetTheTeamComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
