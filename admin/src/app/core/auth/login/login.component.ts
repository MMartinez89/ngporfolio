import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import swal from 'sweetalert2'
import { SwalService } from '../../service/swal.service';
import { LocalStorageService } from '../../service/local-storage.service';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private swalService: SwalService,
    private lsService: LocalStorageService
  ) {
    this.createForms();
  }

  ngOnInit(): void {
    /*init_plugins();*/
    this.recoverForm();
  }
  createForms() {
    const email = this.lsService.get('email')
    this.form = new FormGroup({
      email: new FormControl(email ? email: null, Validators.required),
      password: new FormControl('123456', Validators.required),
      remember: new FormControl(email ? true : false)
    });
    // this.form = new FormGroup({
    //   email: new FormControl('nachomonllorc@gmail.com', Validators.required),
    //   password: new FormControl('1\'ahigher', Validators.required),
    // });
  }

 /* harcodearUsuarioValido() {
    this.form = new FormGroup({
      email: new FormControl('octavio@gmail.com', Validators.required),
      password: new FormControl('123456', Validators.required),
    });
  }*/



  recoverForm() {
    // ==============================================================
    // Login and Recover Password
    // ==============================================================
    $('#to-recover').on('click', () => {
      $('#loginform').slideUp();
      $('#recoverform').fadeIn();
    });
    $('#to-login').on('click', () => {
      $('#recoverform').slideUp();
      $('#loginform').fadeIn();
    });
  }

  onSubmit() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    };
    //this.authService.login(user, true).subscribe((user: User) => {
      this.authService.login(user, this.form.get('remember').value).subscribe((user: any) => {
      // this.swalService.success('Atención', 'usuario logueado', false, true, 2000);
      // Swal.fire({
      //   title: 'Atencion',
      //   text: 'usuario logueado',
      //   icon: 'error',
      //   animation: true,
      //   timer: 2000
      // });
      this.router.navigate(['/']);
    }, err => {
      this.swalService.error('Atención', err.statusText, false, true, 2000);
      // Swal.fire({
      //   title: 'Atencion',
      //   text: err.statusText,
      //   icon: 'error',
      //   animation: true,
      //   timer: 2000
      // });
    });
  }

}
