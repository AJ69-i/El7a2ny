import { Component  } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import * as iziToast from "iziToast";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  public qrCodeDownloadLink: SafeUrl = "";
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
    },
  ];
  value:any = "";
  onInputEvent(event:any) {
    if(event.value.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") || event.value.match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/")) {
      let index = this.auth.findIndex((obj)=> {
        return obj.email == event.value
      });
      if(index != -1) {
        this.value = this.auth[index].password;
        iziToast.default.success({
          title: "successfully done !!",
          message: 'This Email Exists',
          timeout: 5000,
          position: 'topLeft',
          transitionIn: 'fadeInDown',
          transitionOut: 'fadeOutLeft',
          drag: true,
          transitionInMobile: 'fadeInDown',
          transitionOutMobile: 'fadeOutDown',
        });
      }
      else if(index == -1) {
        this.value = "";
        iziToast.default.error({
          title: 'Not found!!',
          message: 'This Email not found',
          timeout: 5000,
          position: 'topLeft',
          transitionIn: 'fadeInDown',
          transitionOut: 'fadeOutLeft',
          drag: true,
          transitionInMobile: 'fadeInDown',
          transitionOutMobile: 'fadeOutDown',
        });
      }
    }
  }
  onChangeURL(url: SafeUrl) {
    this.qrCodeDownloadLink = url;
  }
}
