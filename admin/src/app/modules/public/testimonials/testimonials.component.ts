import { Component, OnInit } from '@angular/core';
import { TestimonialsListComponent } from './testimonials-list/testimonials-list.component';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
 // @ViewChild(TestimonialsListComponent, {static:true}) testimonialsList: TestimonialsListComponent
  constructor() { }

  ngOnInit(): void {
  }

  handleSubmited() {
   // this.testimonialsList.onLoadPage();
  }
}
