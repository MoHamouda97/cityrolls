import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import * as $ from 'jquery';
import { AuthService } from 'src/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loader = false;
  data;

  constructor(private fb: FormBuilder, private service: AuthService, private notification: NzNotificationService, private router: Router) { }

  ngOnInit(): void {
    $('#nav_bar, #main_footer').hide();
    
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });     
  }

  ngOnDestroy(): void {
    $('#nav_bar, #main_footer').show();
  }

  login(){
    this.loader = true;

    let obj = {
      "username":this.loginForm.get('username').value,
      "password":this.loginForm.get('password').value
    }

    this.service.login(obj).subscribe(res => {
      if (res) {
        this.data = res;
        localStorage.setItem('token', this.data.data.token);
        
        this.notification.info(
          'تسجيل الدخول',
          'تمت عملية تسجيل الدخول بنجاح'
        );        
        
        let returnUrl = localStorage.getItem('returnUrl') || '/';
        this.router.navigate([returnUrl]);
        localStorage.removeItem('returnUrl');
      } else {
        this.notification.error(
          'خطأ في عملية تسجيل الدخول',
          'اسم المستخدم او كلمة المرور خاطئة'
        );
      }      
    });  
     
  }  

}
