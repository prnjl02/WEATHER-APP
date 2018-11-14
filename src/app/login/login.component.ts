
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  redirect(_user: string, _password: string) {

    if ((_user) === "pranjal" && (_password) === "pranjal") {

      this.router.navigate(['/weather-detail']);

    }
    else if((_user)===""&&(_password)===""){
      alert("please enter username and password");
    }
    else if((_user)==="pranjal"&&(_password)===""){
      alert("Please enter  your password");
    }
    

    else {
      alert('incorrect passsword or username');
    }
  }

  

  ngOnInit() {
  }

}
