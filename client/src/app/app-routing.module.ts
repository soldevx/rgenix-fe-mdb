import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubcribeComponent } from './subcribe/subcribe.component';


const routes: Routes = [
  { path: 'subscribe', component: SubcribeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
