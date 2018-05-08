import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { MainComponent } from './features/main/containers/main.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: 'app/features/auth/auth.module#AuthModule'
  },
  {
    path: 'main',
    loadChildren: 'app/features/main/main.module#MainModule'
  },
  { path: '**', redirectTo: 'auth' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes/*, {preloadingStrategy: PreloadAllModules}*/)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
