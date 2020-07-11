import { Component } from '@angular/core';

@Component({
  selector: 'app-host-app-page',
  template: `
  <div class="pure-u-1">
    <h1>About</h1>
    <p>This is a page that is a part of the host application. It is using just a regular hash routing mechanism.</p>
    <p>There isn't anything special in it.</p>
  </div>
  `,
})
export class HostAppPageComponent {}
