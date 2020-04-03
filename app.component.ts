import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" routerLink="">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" routerLink="GitHub">GitHub</a>
          </li>           
        </ul>    
      </div>
    </nav>
    <router-outlet></router-outlet>                                                                      
  `,
  providers: []
})
export class AppComponent {   

  constructor(){
  }
}  
