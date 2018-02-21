import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from './../../_services/index.service';

@Component({
  selector: 'app-registrasi',
  templateUrl: './registrasi.component.html',
  styleUrls: ['./registrasi.component.css']
})
export class RegistrasiComponent{
  model: any ={};
  loading = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  registrasi() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          //set success and pass true parameter to persist the message after redirect 
          this.alertService.success('Registration successfull', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading=false;
        }
      );
  }

}
