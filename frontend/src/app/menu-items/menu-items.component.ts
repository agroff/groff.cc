import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../menu-item";
import {Project} from "../project";
import {MENU_ITEMS} from "../menu-items-data";
import {PROJECTS} from "../projects-data";

@Component({
    selector: 'app-menu-items',
    templateUrl: './menu-items.component.html',
    styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

    menuItems : MenuItem[] = MENU_ITEMS;

    constructor() {
        PROJECTS.forEach(function(project : Project){

            let item : MenuItem = new MenuItem();
            item.title = project.name;
            item.linkTo = 'project/' + project.id;
            item.isExternalLink = false;

            this.menuItems.push(item);
        }, this);
    }

    ngOnInit() {
    }

}
