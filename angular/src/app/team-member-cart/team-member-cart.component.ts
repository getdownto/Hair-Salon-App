import { Component, Input, OnInit } from '@angular/core';
import { ITeam } from '../interfaces';

@Component({
  selector: 'app-team-member-cart',
  templateUrl: './team-member-cart.component.html',
  styleUrls: ['./team-member-cart.component.css']
})
export class TeamMemberCartComponent implements OnInit {

  @Input() teamMember: ITeam

  constructor() { }

  ngOnInit(): void {
  }

}
