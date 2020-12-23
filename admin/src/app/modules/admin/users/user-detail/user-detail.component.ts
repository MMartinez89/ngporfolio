import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SwalService} from '@core/service/swal.service'
import { HttpService } from '@core/service/http.service';
import {environment} from '@env';
import urljoin from 'url-join';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '@shared/models/user.model';
import * as _ from 'lodash';

//import { SwalService } from 'src/app/core/service/swal.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  form: FormGroup
  url: string
  constructor(
    private swalService: SwalService,
    private dialogRef: MatDialogRef<UserDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService: HttpService
  ) {
    this.url = urljoin(environment.apiUrl, 'user');
    this.createForm();
    if (data) {
      this.populateForm(data);
    }
   }

  ngOnInit(): void {

  }

  onClose(refresh?){
    this.dialogRef.close(refresh)
  }

  createForm(){
      this.form =  new FormGroup({
        id: new FormControl(null),
        firstname: new FormControl(null, Validators.required),
        lastname: new FormControl(null),
        email: new FormControl(null),
        img: new FormControl(null),
        password: new FormControl(null),
        is_verified: new FormControl(true),
        active: new FormControl(true),
      })
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.form.valid) {
      if (!this.form.get('id').value) {
        this.httpService.post<User>(this.url, this.form.value).subscribe(user => {
          this.swalService.success('Atención', 'El Usuario ha sido creado');
          this.onClose(true);
        }, err => {
          this.swalService.error('Atemción', err);
        });
      } else {
        this.httpService.put<User>(this.url, this.form.value).subscribe(user => {
          this.swalService.success('Atención', 'El Usuario ha sido actualizado');
          this.onClose(true);
        }, err => {
          this.swalService.error('Atención', `::${err}`);
        });
      }
    }
  }

  populateForm(data){
    this.httpService
      .getSingle<User>(this.url, data.id)
      .subscribe((user)  => {
        this.form.setValue(_.omit(user, ['createdAt', 'updatedAt', 'deletedAt']));
      });

  }

}
