import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import _ from 'lodash';
import { ComboSearchComponent } from '@core/abstracts/combo-search.component';
import urlJoin from 'url-join';
import { environment } from '@env';
import { Skill } from '@shared/models/skill.model';
import { HttpService } from '@core/service/http.service';
@Component({
  selector: 'app-skill-search',
  templateUrl: './skill-search.component.html',
  styleUrls: ['./skill-search.component.scss']
})
export class SkillSearchComponent extends ComboSearchComponent<Skill> {
  selected: string;
  constructor(public httpService: HttpService ) {
    super(httpService, urlJoin(environment.apiUrl, 'skill'), true);
  }

  onSelectionChange(evt) {
    const selected = _.filter(this.payload, (el) => {
      return el.id === evt.value[0];
    });
    this.selected = selected;
  }
}