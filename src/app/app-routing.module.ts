import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {PlanningComponent} from "./components/planning/planning.component";


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'planning/:groupType/:type/:id',
    component: PlanningComponent,
  },
  {
    path: 'planning/:groupType/:type',
    component: PlanningComponent,
  },
  {
    path: '**',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
