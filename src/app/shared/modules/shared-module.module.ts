import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UniversitiesPostsComponent } from '../components/items-components/universities-posts/universities-posts.component';
import { FacilitiesComponent } from '../components/items-components/facilities/facilities.component';
import { RightSidebarComponent } from 'src/app/pages/dashbord/right-sidebar/right-sidebar.component';
import { LoaderComponent } from '../components/loader/loader.component';
import { LiftSideFilterComponent } from 'src/app/pages/dashbord/lift-side-filter/lift-side-filter.component';
import { ItemsComponentsComponent } from '../components/items-components/items-components.component';
import { VacanciesComponent } from '../components/items-components/vacancies/vacancies.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [
    UniversitiesPostsComponent,
    FacilitiesComponent,
    RightSidebarComponent,
    LoaderComponent,
    VacanciesComponent,
    LiftSideFilterComponent,
    ItemsComponentsComponent
  ],
  exports: [
    FormsModule,
    UniversitiesPostsComponent,
    FacilitiesComponent,
    RightSidebarComponent,
    LoaderComponent,
    VacanciesComponent,
    LiftSideFilterComponent,
    ItemsComponentsComponent
  ],
  entryComponents: [
  ]
})
export class SharedModuleModule { }
