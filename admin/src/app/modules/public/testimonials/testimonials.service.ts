import { Injectable } from '@angular/core';
import { Testimonials } from '@shared/models/testimonials.model';
import { Subject } from 'rxjs';
import { HttpService } from '@core/service/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestimonialsService extends HttpService {
  testimonials: Testimonials;
  private sendTestimonialsSubject = new Subject<Testimonials>(); //permite crear observable
  sendTestimonialsSubjectObservable = this.sendTestimonialsSubject.asObservable();
  constructor(public http: HttpClient) {
    super(http);
  }
  sendTestimonials(testimonials: Testimonials) {
    // similar al emit del EventEmitter
    this.sendTestimonialsSubject.next(testimonials)
  }
}