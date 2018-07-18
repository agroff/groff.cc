import {Injectable} from '@angular/core';
import {Project} from './project';
import {PROJECTS} from "./projects-data";
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    getProjects(): Observable<Project[]>{
        return of(PROJECTS);
    }
}
