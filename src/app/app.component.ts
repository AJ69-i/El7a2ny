import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lat: number = 52.358;
  lng: number = 4.916;
  title = 'El7a2ny-Dashboard';

  loginForm:FormGroup = new FormGroup({
    email    : new FormControl(null, [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password : new FormControl(null , [Validators.required])
  });
}
