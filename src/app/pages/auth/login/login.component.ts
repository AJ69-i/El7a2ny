import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as iziToast from "iziToast";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide:boolean = true;
  auth:any[] = [
    {
      email    : "ahmedasemelfert@gmail.com",
      password : "vSY88s0fPe8UngU5"
    },
    {
      email    : "ahmed@el7a2ny.com",
      password : "Kyv467VYxfQ5mwJ8"
    },
    {
      email    : "manager@el7a2ny.com",
      password : "SX2GXscW949eG6Fu"
    },
    {
      email    : "ismail@el7a2ny.com",
      password : "Hq91azZSk7TBLmzv"
    }
  ];
  constructor(private router:Router) {
  }

  ngOnInit(): void {
    if(JSON.parse(localStorage.getItem("Auth")!) === "Authenticated") {
      this.router.navigateByUrl("/emergency", { replaceUrl: true });
    } else {
      this.router.navigateByUrl("/", { replaceUrl: true });
    }
  }

  loginForm:FormGroup = new FormGroup({
    email : new FormControl(null, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password : new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
  });
  login(loginForm:FormGroup) {
    console.log(loginForm.get('password')?.hasError('password'));
    if(loginForm.valid) {
      let objectIndex = this.auth.findIndex((obj)=> {
        return obj.email == loginForm.value.email && obj.password == this.loginForm.value.password
      });
      if(objectIndex > -1) {
        iziToast.default.success({
          title: "successfully done !!",
          message: "You have logged in successfully",
          timeout: 5000,
          position: 'topLeft',
          transitionIn: 'fadeInDown',
          transitionOut: 'fadeOutLeft',
          drag: true,
          transitionInMobile: 'fadeInDown',
          transitionOutMobile: 'fadeOutDown',
        });
        localStorage.setItem("Auth" , JSON.stringify("Authenticated"));
        this.router.navigateByUrl("/emergency", { replaceUrl: true });
      }
      else {
        iziToast.default.error({
          title: "Failure login !!",
          message: "Not logged yet",
          timeout: 5000,
          position: 'topLeft',
          transitionIn: 'fadeIn',
          transitionOut: 'fadeOutLeft',
          drag: true,
          transitionInMobile: 'fadeInDown',
          transitionOutMobile: 'fadeOutDown',
        });
      }
    }
  }
  GoToForgetPassword() {
    this.router.navigate(["/forget-password"]);
  }
}

