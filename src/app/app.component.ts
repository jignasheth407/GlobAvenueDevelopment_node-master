import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from './model/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GLOBAVENUE';
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) 
  {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
     
}

}
