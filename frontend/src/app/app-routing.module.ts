import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from "./projects/projects.component";
import {ProjectComponent} from "./project/project.component";

const routes : Routes = [
    { path : '', component: ProjectsComponent},
    //{path: 'projects', component: ProjectsComponent},
    {path: 'project/:id', component: ProjectComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
