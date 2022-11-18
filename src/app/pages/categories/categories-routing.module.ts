import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { listenerCount } from 'stream';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
