import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<content>
     <router-outlet></router-outlet>
  </content>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
}


