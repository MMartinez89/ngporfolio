import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '@core/service/http.service';
import urljoin from 'url-join';
import { environment } from '@env';
import { SwalService } from '@core/service/swal.service';
import { Role } from '@shared/models/role.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-role-detail',
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.scss']
})
export class RoleDetailComponent implements OnInit {
  form: FormGroup;
  url: string;
  constructor(
    private swalService: SwalService,
    private dialogRef: MatDialogRef<RoleDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private httpService: HttpService,
  ) {
    this.url = urljoin(environment.apiUrl, 'role');
    this.createForm();
    if (data) {
      this.populateForm(data);
    }
  }

  ngOnInit(): void {

  }
  onClose(refresh?) {
    this.dialogRef.close(refresh);
  }
  createForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      rolename: new FormControl(null, Validators.required),
      description: new FormControl(null),
      active: new FormControl(true),
    });
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.form.valid) {
      if (!this.form.get('id').value) {
        this.httpService.post<Role>(this.url, this.form.value).subscribe(role => {
          this.swalService.success('Atención', 'El rol ha sido creado');
          this.onClose(true);
        }, err => {
          this.swalService.error('Atemción', err);
        });
      } else {
        this.httpService.put<Role>(this.url, this.form.value).subscribe(role => {
          this.swalService.success('Atención', 'El rol ha sido actualizado');
          this.onClose(true);
        }, err => {
          this.swalService.error('Atención', `::${err}`);
        });
      }
    }
  }
  populateForm(data) {
     //this.form.get('id').setValue(data.id);
     //this.form.get('rolename').setValue(data.rolename);
     //this.form.get('description').setValue(data.description);
    // Mejor manera de setear valores
     //this.form.setValue(_.omit(data, ['createdAt', 'updatedAt', 'deletedAt']));
   
    this.httpService
      .getSingle<Role>(this.url, data.id)
      .subscribe((role: Role) => {
        // no const { role } = data;
        this.form.setValue(_.omit(role, ['createdAt', 'updatedAt', 'deletedAt']));
      });


  }
}