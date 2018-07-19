import {Component, OnInit} from '@angular/core';
import {ProjectService} from "../project.service";
import {Project} from "../project";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

    project: Project;

    constructor(private projectService: ProjectService,
                private route: ActivatedRoute) {
    }

    getProjects(): void {
        const that = this;
        const id = parseInt(this.route.snapshot.paramMap.get("id"));

        // this.projectService.getProjects()
        //     .subscribe(function (projects) {
        //         projects.forEach(function (project) {
        //             if (project.id === id) {
        //                 that.project = project;
        //             }
        //         });
        //     });

        this.projectService.getProject(id, (project) => {
            console.log(project);
            this.project = project
        });
    }

    ngOnInit() {
        this.getProjects();
    }


}
