import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ITeam } from './interfaces'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

const apiUrl = environment.apiUrl

@Injectable()

export class TeamService {

  constructor(private http: HttpClient) {}

  loadTeamList(): Observable<ITeam[]> {
    return this.http.get<ITeam[]>(`${apiUrl}/team`)
  }
}
