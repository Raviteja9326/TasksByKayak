import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Task2Component } from './task2/task2.component';
import { Task1Component } from './task1/task1.component';

const routes: Routes = [
  { path: "", redirectTo: "task2", pathMatch: "full" },
  { path: "task2", component: Task2Component },
  { path: "task1", component: Task1Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
