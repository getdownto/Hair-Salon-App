import { Component, OnInit } from '@angular/core';
import { ITeam } from '../interfaces';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-meet-the-team-component',
  templateUrl: './meet-the-team-component.component.html',
  styleUrls: ['./meet-the-team-component.component.css']
})
export class MeetTheTeamComponentComponent implements OnInit {

  teamList: ITeam[]

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.loadTeamList().subscribe(teamList => {
      this.teamList = teamList
    })
  }

}
