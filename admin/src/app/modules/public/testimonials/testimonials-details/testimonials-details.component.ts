import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Testimonials } from '@shared/models/testimonials.model';
import {SwalService} from '@core/service/swal.service';
import {TestimonialsService} from '../testimonials.service'
import { environment } from '@env';
import urljoin from 'url-join';
import * as _ from 'lodash';

@Component({
  selector: 'app-testimonials-details',
  templateUrl: './testimonials-details.component.html',
  styleUrls: ['./testimonials-details.component.scss']
})
export class TestimonialsDetailsComponent implements OnInit {
  form: FormGroup;
  url: string;
  @Input() testimonials: Testimonials;
  @Output() submited = new EventEmitter();
  validationType = {
    name: [Validators.required],
  }
  constructor( 
    private swalService: SwalService,
    private testimonialsService: TestimonialsService,
  ) {
    this.url = urljoin(environment.apiUrl, 'testimonials');
    this.createForm();
    testimonialsService.sendTestimonialsSubjectObservable.subscribe(testimonials => {
      this.populateForm(testimonials);
    })
   }

  ngOnInit(): void {
  }

  onClear(): void {
    this.form.reset();
  }

  createForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstname: new FormControl(null),
      lastname: new FormControl(null, Validators.required),
      testimonials: new FormControl(null),
      sr: new FormControl(null)
    });
  }
  getErrorMessageForName() {
    return this.form.get('firstname').hasError('required') ? 'requerido' : '';
  }
  onSubmit() {
    debugger;
    if (this.form.valid) {
      if (!this.form.get('id').value) {
        this.testimonialsService.post<TestimonialsService>(this.url, this.form.value).subscribe(testimonials => {
          this.swalService.success('Atención', 'El testimonios ha sido creado');
          this.submited.emit();
          this.resetForm();
        }, err => {
          this.swalService.error('Atención', `:: ${err}`);
        });
      } else {
        this.testimonialsService.put<TestimonialsService>(this.url, this.form.value).subscribe(testimonials => {
          this.swalService.success('Atención', 'El testimonios ha sido actualizado');
          this.submited.emit();
      }, err => {
          this.swalService.error('Atención', `:: ${err}`);
        });
      }
    }
  }

  resetForm() {
    this.form.reset(
      { active: true },
      { emitEvent: false }
      );
    this.clearErrors();
  }

  clearErrors() {

    // const properties = Object.keys(this.form.controls);
    // for (let i = 0; i < properties.length; i++) {
    //   this.form.get(properties[i]).markAsUntouched();
    //   this.form.get(properties[i]).markAsPristine();
    //   this.form.get(properties[i]).updateValueAndValidity();
    // }
    // this.form.get('name').markAsUntouched();
    this.form.get('name').markAsPristine();
    this.form.setErrors(null);
    this.setValidators();
    this.form.get('name').updateValueAndValidity();
  }

  setValidators() {
    this.form.get('name').setValidators(this.validationType.name);
  }


  populateForm(testimonials) {
    // this.form.get('id').setValue(data.id);
    // this.form.get('rolename').setValue(data.rolename);
    // this.form.get('description').setValue(data.description);
    // Mejor manera de setear valores
    // this.form.setValue(_.omit(data, ['createdAt', 'updatedAt', 'deletedAt']));
    this.testimonialsService
      .getSingle<Testimonials>(this.url, testimonials.id)
      .subscribe((testimonials: Testimonials) => {
        // const { skill } = data;
        this.form.setValue(_.omit(testimonials, ['createdAt', 'updatedAt']));
      });

  }

}
