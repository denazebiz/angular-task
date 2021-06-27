import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsListComponent } from './componenets/jobs-list/jobs-list.component';
import { JobCreateComponent } from './componenets/job-create/job-create.component';
import {JobsRoutingModule} from "./jobs-routing.module";



@NgModule({
  declarations: [
    JobsListComponent,
    JobCreateComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ]
})
export class JobsModule { }
