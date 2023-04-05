import {Component} from '@angular/core';

@Component({
  selector: 'app-exit-button',
  template: `<a appBackButton class="exit-button bigger-on-hover">
    <img src="assets/exit.png" alt="exit"/>
  </a>`,
  styles: [`.exit-button {
    position: fixed;
    right: 20px;
  }`]
})
export class ExitButtonComponent {
}
