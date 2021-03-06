import { Component } from '@angular/core';

@Component({
  selector: 'nested-app-first-page',
  template: `
  <div class="pure-g">
    <h1 class="pure-u-1 center">It is a nested app of the first page.</h1>
  </div>
  `,
  styles: [`
    .center{
      text-align: center;
    }

    .nested-app-space {
      background: green;
      height: 400px;
    }
  `]
})
export class NestedAppFirstPageComponent {}
