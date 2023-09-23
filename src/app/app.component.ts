import { Component } from '@angular/core';
import {FormGroup,FormControl,FormControlName} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'buildreactiveForm';

  loginForm = new FormGroup({
    user : new FormControl('Sumit'),
    password : new FormControl('34567') 
  });

  loginCalled(){
      console.log(this.loginForm.value);
  }

}
