import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  email = '';
  password = '';
  loginSuccess:any;
  hideLoginStatus = true;

  constructor(private http: HttpClient, private router: Router){}

  login(){
    console.log(this.email, this.password);
    this.http.post("http://localhost:4500/validateuser", { email: this.email, password: this.password} ).subscribe( res => {

    if(res){
      //redirect to admin page
      this.router.navigate(['/admin']);
    }
    else{
      this.hideLoginStatus = false;
      this.loginSuccess = res;
    }



       // if response is false, display message to user that they have provided incorrect credentials
       // if true, redirect to the admin component


    })
  }

  ngOnInit(): void {

  }

}
