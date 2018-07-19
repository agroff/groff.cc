import {Injectable} from '@angular/core';
import {Project} from './project';
import {PROJECTS} from "./projects-data";
import { HttpClient } from '@angular/common/http';
import {Observable, of} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    constructor(
        private http: HttpClient
        ){}

    getProjects(): Observable<Project[]>{
        return of(PROJECTS);
    }

    getProject(id, callback){
        this.getProjects().subscribe((projects) => {
            projects.forEach((project) => {
                if (project.id === id) {
                    callback(project);
                }
            })
        });
    }

}
