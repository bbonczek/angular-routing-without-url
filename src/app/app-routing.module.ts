import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostAppPageComponent } from './page-from-host-app.component';
import { App1SharedModule } from '../../projects/app1/src/app/app.module';

const routes: Routes = [
  { path: 'page-from-host', component: HostAppPageComponent },
  {path: 'page-with-nested-app', loadChildren: '../../projects/app1/src/app/app.module#App1SharedModule'},
  { path: '**', redirectTo: '/page-with-nested-app'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    App1SharedModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
