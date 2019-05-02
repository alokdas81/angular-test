import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service'
import { NavController } from '@ionic/angular';
import { Toast } from '@ionic-native/toast/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user : any={email :"", password : ""};
  emailValid : boolean=true;
  constructor(
    public loginService : LoginService,
    public nav : NavController,
    public toast : Toast
  ) { }

  ngOnInit() {
  }
  login(){
    console.log("login>>>");
    // this.nav.navigateForward('/home');
    let _self = this;
    this.loginService.login(this.user).subscribe((data:any)=>{
      console.log(data);
      if(data.success){
        _self.nav.navigateForward('/home');
      }else{
        // alert("Username/password incorrect");
        _self.toast.show('Username/password incorrect', '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        );
      }
    },(err)=>{
      _self.toast.show('Username/password incorrect', '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
      console.log(err);
    });

  }
  emailCheck(){
    console.log(this.user.email);
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    //var address = document.getElementById[email].value;
    if (reg.test(this.user.email) == false) 
    { this.emailValid = false;
      console.log("false");
        // alert('Invalid Email Address');
        
    }
    else{
      this.emailValid = true;
      console.log("true");
    }
  }

}
