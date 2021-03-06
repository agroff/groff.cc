import {Component, OnInit} from '@angular/core';
import {Project} from '../project';
import {ProjectService} from "../project.service";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projects: Project[];



    constructor(private projectService:ProjectService) {
    }

    getProjects(): void{
        this.projectService.getProjects()
            .subscribe(projects => this.projects = projects);
    }

    ngOnInit() {
        this.getProjects();
    }

}
