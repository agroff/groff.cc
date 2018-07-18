import {MenuItem} from "./menu-item";


export const MENU_ITEMS: MenuItem[] = [
    {
        title:"Resume",
        linkTo : "",
        isHeader:true,
        isExternalLink:false,
    },
    {
        title:"View as PDF",
        linkTo:"assets/files/resume.pdf",
        isHeader:false,
        isExternalLink:true,
    },
    {
        title:"Projects",
        linkTo:"",
        isHeader:true,
        isExternalLink:false
    }
];
