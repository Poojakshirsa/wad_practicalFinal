import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration Form';

  displayname='';
  displayaddress='';
  displaycontact='';
  displayemail='';
  displaypassword='';

  getValue(name:string,address:string,contact:string,email:string,password:string){
    this.displayname=name;
    this.displayaddress=address;
    this.displaycontact=contact;
    this.displayemail=email;
    this.displaypassword= password;
  }
}
