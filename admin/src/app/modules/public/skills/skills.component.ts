import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillListComponent } from './skill-list/skill-list.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @ViewChild(SkillListComponent, {static:true}) skillList: SkillListComponent
  constructor() { }

  ngOnInit(): void {
  }
  handleSubmited() {
    this.skillList.onLoadPage();
  }
}