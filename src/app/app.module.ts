import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {MainGroupComponent} from './components/main-page/main-group/main-group.component';
import {MainIndividualComponent} from './components/main-page/main-individual/main-individual.component';
import {SearchAndFiltersComponent} from './components/main-page/search-and-filters/search-and-filters.component';
import {TableComponent} from './components/main-page/table/table.component';
import {PlanningComponent} from './components/planning/planning.component';
import {PlanningMainComponent} from './components/planning/planning-main/planning-main.component';
import {PlanningParticipantsComponent} from './components/planning/planning-participants/planning-participants.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {TableIndividualComponent} from './components/main-page/table-individual/table-individual.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainGroupComponent,
    MainIndividualComponent,
    SearchAndFiltersComponent,
    TableComponent,
    PlanningComponent,
    PlanningMainComponent,
    PlanningParticipantsComponent,
    TableIndividualComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatNativeDateModule,
    DragDropModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
