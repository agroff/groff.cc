//import {MenuItem} from "./menu-item"

export class Project{
    id: number;
    name:string;
    templateUrl:string = '';
    description:string;
    background:string = '';
    code:string = '';
    link:string = '';
    status:string = '';
    tags:string[] = [

    ];


    // toMenuItem() : MenuItem{
    //     let item : MenuItem = new MenuItem();
    //     item.title = this.name;
    //     return item;
    // }
}
