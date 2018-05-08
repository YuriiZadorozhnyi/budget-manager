import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConfigurationComponent } from './containers/confuguration.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent,
  },
  { path: '**', redirectTo: 'configuration', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ConfigurationRoutingModule { }
