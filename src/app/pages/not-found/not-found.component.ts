import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: '<div class="container">\n' +
    '    <div class="d-flex flex-column justify-content-center align-items-center mt-5">\n' +
    '      <h3 class="text-secondary">No such page</h3>\n' +
    '      <a routerLink="/" class="text-decoration-none text-secondary-red-on-hover">Go to home page</a>\n' +
    '    </div>\n' +
    '</div>\n'
})
export class NotFoundComponent {

}
