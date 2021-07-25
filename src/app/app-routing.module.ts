import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {PlanningComponent} from "./planning/planning.component";


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'planning', ///:id/:type
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
