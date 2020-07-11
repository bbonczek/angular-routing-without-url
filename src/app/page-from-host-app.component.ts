import { Component } from '@angular/core';

@Component({
  selector: 'app-host-app-page',
  template: `
  <div class="pure-u-1">
    <h1>About</h1>
    <p class="pure-u-1 center">This is a page that is a part of the host application. It is using just a regular hash routing mechanism.</p>
    <p class="pure-u-1 center">There isn't anything special in it.</p>
  </div>
  `,
  styles: [`
    .center {
      text-align: center;
    }
  `]
})
export class HostAppPageComponent {}
