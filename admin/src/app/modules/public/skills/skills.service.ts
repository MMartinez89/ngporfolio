import { Injectable } from '@angular/core';
import { Skill } from '@shared/models/skill.model';
import { Subject } from 'rxjs';
import { HttpService } from '@core/service/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService extends HttpService {
  skill: Skill;
  private sendSkillSubject = new Subject<Skill>(); //permite crear observable
  sendSkillSubjectObservable = this.sendSkillSubject.asObservable();
  constructor(public http: HttpClient) {
    super(http);
  }
  sendSkill(skill: Skill) {
    // similar al emit del EventEmitter
    this.sendSkillSubject.next(skill)
  }
}