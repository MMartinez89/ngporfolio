import { Injectable } from '@angular/core';
import { Teams } from '@shared/models/teams.model';
import { Subject } from 'rxjs';
import { HttpService } from '@core/service/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamsService extends HttpService {
  teams: Teams;
  private sendTeamsSubject = new Subject<Teams>(); //permite crear observable
  sendTeamsSubjectObservable = this.sendTeamsSubject.asObservable();
  constructor(public http: HttpClient) {
    super(http);
  }
  sendTeams(teams: Teams) {
    // similar al emit del EventEmitter
    this.sendTeamsSubject.next(teams)
  }
}