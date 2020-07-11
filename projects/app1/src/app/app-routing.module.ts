// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import {View1Component} from "./view1/view1.component";
// import {View2Component} from "./view2/view2.component";

// const routes: Routes = [
//   { path: 'app1/one', component: View1Component },
//   { path: 'app1/two', component: View2Component },
//   { path: 'app1', redirectTo: 'app1/one' }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NestedAppFirstPageComponent } from './first-page.component';
import { NestedAppSecondPageComponent } from './second-page.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'page-with-nested-app', component: AppComponent, children: [
    { path: 'first-page-from-nested-app', component: NestedAppFirstPageComponent  },
    { path: 'second-page-from-nested-app', component: NestedAppSecondPageComponent },
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
