import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/service/http.service';
import urljoin from 'url-join';
import { environment } from '@env';
import convertNestedChildren from '@shared/utils/convertNestedChildren'
@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  url: string = urljoin(environment.apiUrl, 'skill')
  skills: any[] = [];
  constructor(private httpService: HttpService) {
    httpService.get(this.url).subscribe(data => {
      // let arr = data.rows.map(item => {
      //   if (!item.ParentId) {
      //     item.ParentId = 0
      //   }
      //   return item;
      // })
      console.log(data)
      this.skills = convertNestedChildren(data.rows, 0);
    })
  }
  ngOnInit(): void {
  }
}

// function getNestedChildren(arr, parent) {
//   let nested = []
//   for (let i in arr) {
//     if (arr[i].ParentId == parent) {
//       let children = getNestedChildren(arr, arr[i].id)
//       if (children.length) {
//         arr[i].children = children
//       }
//       nested.push(arr[i])
//     }
//   }
//   return nested
// }