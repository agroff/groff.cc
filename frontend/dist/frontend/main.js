(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsComponent"] },
    //{path: 'projects', component: ProjectsComponent},
    { path: 'project/:id', component: _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n    <div class=\"navigation\">\n        <h1><a href=\"/\" class=\"inherit\">Andrew Groff</a></h1>\n        <h4>Sr. Full Stack Developer</h4>\n\n        <app-menu-items></app-menu-items>\n\n    </div>\n\n    <div class=\"content\">\n        <router-outlet></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-items/menu-items.component */ "./src/app/menu-items/menu-items.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"],
                _menu_items_menu_items_component__WEBPACK_IMPORTED_MODULE_5__["MenuItemsComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/menu-item.ts":
/*!******************************!*\
  !*** ./src/app/menu-item.ts ***!
  \******************************/
/*! exports provided: MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
var MenuItem = /** @class */ (function () {
    function MenuItem() {
        this.linkTo = "";
        this.isHeader = false;
        this.isExternalLink = false;
    }
    return MenuItem;
}());



/***/ }),

/***/ "./src/app/menu-items-data.ts":
/*!************************************!*\
  !*** ./src/app/menu-items-data.ts ***!
  \************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: "Resume",
        linkTo: "",
        isHeader: true,
        isExternalLink: false,
    },
    {
        title: "View as PDF",
        linkTo: "assets/files/resume.pdf",
        isHeader: false,
        isExternalLink: true,
    },
    {
        title: "Projects",
        linkTo: "",
        isHeader: true,
        isExternalLink: false
    }
];


/***/ }),

/***/ "./src/app/menu-items/menu-items.component.html":
/*!******************************************************!*\
  !*** ./src/app/menu-items/menu-items.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav\">\n    <li *ngFor=\"let item of menuItems\" [ngClass]=\"{'nav-header' : item.isHeader}\">\n        <h3 *ngIf=\"item.isHeader\">\n            {{item.title}}\n        </h3>\n        <a *ngIf=\"!item.isHeader\"\n           href=\"{{item.linkTo}}\"\n           [attr.target]=\"item.isExternalLink ? '_blank' : ''\">\n            {{item.title}}\n        </a>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/menu-items/menu-items.component.scss":
/*!******************************************************!*\
  !*** ./src/app/menu-items/menu-items.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu-items/menu-items.component.ts":
/*!****************************************************!*\
  !*** ./src/app/menu-items/menu-items.component.ts ***!
  \****************************************************/
/*! exports provided: MenuItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItemsComponent", function() { return MenuItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu-item */ "./src/app/menu-item.ts");
/* harmony import */ var _menu_items_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu-items-data */ "./src/app/menu-items-data.ts");
/* harmony import */ var _projects_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects-data */ "./src/app/projects-data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuItemsComponent = /** @class */ (function () {
    function MenuItemsComponent() {
        this.menuItems = _menu_items_data__WEBPACK_IMPORTED_MODULE_2__["MENU_ITEMS"];
        _projects_data__WEBPACK_IMPORTED_MODULE_3__["PROJECTS"].forEach(function (project) {
            var item = new _menu_item__WEBPACK_IMPORTED_MODULE_1__["MenuItem"]();
            item.title = project.name;
            item.linkTo = 'project/' + project.id;
            item.isExternalLink = false;
            this.menuItems.push(item);
        }, this);
    }
    MenuItemsComponent.prototype.ngOnInit = function () {
    };
    MenuItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-items',
            template: __webpack_require__(/*! ./menu-items.component.html */ "./src/app/menu-items/menu-items.component.html"),
            styles: [__webpack_require__(/*! ./menu-items.component.scss */ "./src/app/menu-items/menu-items.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuItemsComponent);
    return MenuItemsComponent;
}());



/***/ }),

/***/ "./src/app/project.service.ts":
/*!************************************!*\
  !*** ./src/app/project.service.ts ***!
  \************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _projects_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-data */ "./src/app/projects-data.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getProjects = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_projects_data__WEBPACK_IMPORTED_MODULE_1__["PROJECTS"]);
    };
    ProjectService.prototype.getProject = function (id, callback) {
        this.getProjects().subscribe(function (projects) {
            projects.forEach(function (project) {
                if (project.id === id) {
                    callback(project);
                }
            });
        });
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"button mdi mdi-chevron-double-left\" routerLink=\"/\">Back to Projects</a>\n\n<div class=\"flex-grid\">\n    <div class=\"grow\">\n\n        <div [ngClass]=\"['main-image', 'project-'+project.id]\"\n             [style.backgroundImage]=\"'url('+project.background+')'\">\n\n        </div>\n\n        <h1 class=\"\">\n            {{project.name}}\n        </h1>\n        <p>\n            {{project.description}}\n        </p>\n\n        <div class=\"project-body\" [innerHtml]=\"project.template\">\n\n        </div>\n    </div>\n    <div class=\"info-pane\">\n        <label class=\"mdi mdi-code-tags mdi-18px\" title=\"Code\"></label>\n        <a href=\"{{project.code}}\" *ngIf=\"project.code.indexOf('http') === 0; else codeExplanation\">\n            See the code\n        </a>\n        <ng-template #codeExplanation>\n            <span>{{project.code}}</span>\n        </ng-template>\n\n\n        <label class=\"mdi mdi-link mdi-18px\" title=\"Link\"></label>\n        <a href=\"{{project.link}}\" *ngIf=\"project.link.indexOf('http') === 0; else linkExplanation\">\n            View Project\n        </a>\n        <ng-template #linkExplanation>\n            <span>{{project.link}}</span>\n        </ng-template>\n\n        <label class=\"mdi mdi-check-circle mdi-18px\" title=\"Status\"></label>\n        <span>{{project.status}}</span>\n\n\n        <label class=\"mdi mdi-tag mdi-18px\" title=\"Tags\"></label>\n        <div class=\"tags\">\n            <span class=\"tag\" *ngFor=\"let tag of project.tags\">{{tag}}</span>\n        </div>\n    </div>\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-image {\n  width: 300px;\n  height: 200px;\n  border: 1px solid #eee;\n  background-color: #ededed;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  float: left;\n  margin-right: 20px; }\n  .main-image.project-1 {\n    background-color: white; }\n  .info-pane {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto auto;\n      grid-template-columns: auto auto;\n  grid-column-gap: 10px;\n  grid-row-gap: 10px;\n  font-size: 0.9em;\n  flex: 0 0 250px;\n  margin-left: 20px;\n  height: 200px; }\n  .info-pane label {\n    color: #1AB0B4;\n    font-weight: bold;\n    text-align: right;\n    flex-grow: 0; }\n  .info-pane span, .info-pane a {\n    flex-grow: 1; }\n  .info-pane .tag {\n    border: 1px solid #1AB0B4;\n    color: #1AB0B4;\n    border-radius: 3px;\n    margin: 0px 4px 4px 4px;\n    padding: 4px;\n    white-space: nowrap;\n    float: left;\n    font-size: 0.8em; }\n"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(projectService, route) {
        this.projectService = projectService;
        this.route = route;
    }
    ProjectComponent.prototype.getProjects = function () {
        var _this = this;
        var that = this;
        var id = parseInt(this.route.snapshot.paramMap.get("id"));
        // this.projectService.getProjects()
        //     .subscribe(function (projects) {
        //         projects.forEach(function (project) {
        //             if (project.id === id) {
        //                 that.project = project;
        //             }
        //         });
        //     });
        this.projectService.getProject(id, function (project) {
            console.log(project);
            _this.project = project;
        });
    };
    ProjectComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/project/project.component.scss")]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/projects-data.ts":
/*!**********************************!*\
  !*** ./src/app/projects-data.ts ***!
  \**********************************/
/*! exports provided: PROJECTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS", function() { return PROJECTS; });
var PROJECTS = [
    {
        id: 2,
        name: "Reddcoin Browser Wallet",
        template: __webpack_require__(/*! ../assets/templates/reddcoin.html */ "./src/assets/templates/reddcoin.html"),
        description: "My most technically challenging project to date was building a Crypto-Currency wallet " +
            "with Node and Browserify.",
        background: "/assets/images/reddcoin.jpg",
        code: "https://github.com/reddcoin-project/reddcoin-electrum-js",
        link: "Link Unavailable",
        status: "Deprecated",
        tags: ["Javascript", "Node", "Blockchain", "Browser Extension"],
    },
    {
        id: 1,
        name: "Writing Samples",
        template: __webpack_require__(/*! ../assets/templates/writing.html */ "./src/assets/templates/writing.html"),
        description: "When deciding to bring someone onto your team, it's important that they're " +
            "technically competent, but it's also important that they can communicate effectively.",
        background: '/assets/images/writing.svg',
        code: "https://github.com/agroff/agroff.github.io/tree/master/posv",
        link: "http://agroff.github.io/posv/",
        status: "Not Applicable",
        tags: ["Writing", "Communication"],
    },
    {
        id: 3,
        name: "BitSurv",
        template: __webpack_require__(/*! ../assets/templates/coming-soon.html */ "./src/assets/templates/coming-soon.html"),
        description: "BitSurv is a side project I started in an effort to replace a tool we used at work to build surveys.",
        background: "/assets/images/bitsurv.png",
        code: "https://github.com/agroff/bitsurv",
        link: "Link Unavailable",
        status: "Production",
        tags: ["PHP"],
    },
    {
        id: 4,
        name: "Kitty Helper",
        template: __webpack_require__(/*! ../assets/templates/coming-soon.html */ "./src/assets/templates/coming-soon.html"),
        description: "Shortly after the launch of CryptoKitties (short-lived block-chain beanie babies), I made this extension to upgrade the site's interface.",
        background: "/assets/images/kitty-helper.png",
        code: "https://github.com/agroff/kitty-helper",
        link: "https://chrome.google.com/webstore/detail/kitty-helper/dceabgpbnaimhibdgjdhgbabiocgimhb?hl=en-US",
        status: "Deprecated",
        tags: ["Javascript", "Browser Extension", "Blockchain"],
    },
    {
        id: 10,
        name: "Portfolio",
        template: __webpack_require__(/*! ../assets/templates/coming-soon.html */ "./src/assets/templates/coming-soon.html"),
        description: "You're looking at this project right now. This portfolio was my first foray into typescript and Angular 6",
        background: "/assets/images/portfolio.png",
        code: "https://github.com/agroff/groff.cc",
        link: "https://groff.cc/",
        status: "Production",
        tags: ["Angular", "Typescript"],
    },
    {
        id: 13,
        name: "Cash Out on Dip",
        template: __webpack_require__(/*! ../assets/templates/coming-soon.html */ "./src/assets/templates/coming-soon.html"),
        description: "Cash out on dip is a model project at Rescue. It was built inexpensively and managed to get more engagement per dollar than any other project.",
        background: "/assets/images/cashoutondip.jpg",
        code: "http://downanddirtylife.com/cashoutondip/js/game.js",
        link: "http://downanddirtylife.com/cashoutondip/",
        status: "Production",
        tags: ["Javascript", "Phaser"],
    },
    {
        id: 6,
        name: ".rescue",
        template: __webpack_require__(/*! ../assets/templates/coming-soon.html */ "./src/assets/templates/coming-soon.html"),
        description: ".rescue is a CLI tool powered by Vagrant that sets up, configures, and updates local environments with a single command.",
        background: "/assets/images/rescue.png",
        code: "Proprietary",
        link: "Unavailable",
        status: "Production",
        tags: ["PHP", "Vagrant", "CLI", "Linux"],
    },
    {
        id: 5,
        name: "This Free Life",
        template: __webpack_require__(/*! ../assets/templates/coming-soon.html */ "./src/assets/templates/coming-soon.html"),
        description: "This Free Life is an LGBT focused public health campaign written in AngularJs and powered by a Drupal 8 API.",
        background: "/assets/images/this-free-life.jpg",
        code: "Proprietary",
        link: "https://thisfreelife.betobaccofree.hhs.gov/",
        status: "Production",
        tags: ["Angular", "Javascript", "Drupal"],
    },
    {
        id: 7,
        name: "Rescue.FYI",
        template: __webpack_require__(/*! ../assets/templates/coming-soon.html */ "./src/assets/templates/coming-soon.html"),
        description: "Rescue.FYI is an internal tool I'm building in Laravel to serve as a knowledge base and reference for the company's brands and clients.",
        background: "/assets/images/rescue-fyi.png",
        code: "Proprietary",
        link: "Password Protected",
        status: "Development",
        tags: ["Laravel", "PHP"],
    },
    {
        id: 8,
        name: "TeamView",
        template: __webpack_require__(/*! ../assets/templates/coming-soon.html */ "./src/assets/templates/coming-soon.html"),
        description: "",
        background: "",
        code: "",
        link: "",
        status: "",
        tags: [],
    },
    {
        id: 9,
        name: "Groff/Command",
        template: __webpack_require__(/*! ../assets/templates/coming-soon.html */ "./src/assets/templates/coming-soon.html"),
        description: "",
        background: "",
        code: "",
        link: "",
        status: "",
        tags: [],
    },
    {
        id: 11,
        name: "Pokemon Quest Guide",
        template: __webpack_require__(/*! ../assets/templates/coming-soon.html */ "./src/assets/templates/coming-soon.html"),
        description: "",
        background: "",
        code: "",
        link: "",
        status: "",
        tags: [],
    },
    {
        id: 12,
        name: "Flewent",
        template: __webpack_require__(/*! ../assets/templates/coming-soon.html */ "./src/assets/templates/coming-soon.html"),
        description: "",
        background: "",
        code: "",
        link: "",
        status: "",
        tags: [],
    }
];


/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Projects\n</h1>\n\n<p>\n    Check out some of my work below. Many projects are missing narratives right now, but I've usually tried to include\n    at least a relevant link. Contact me any time at <a href=\"mailto:andy@groff.cc\">andy@groff.cc</a> and I'll be glad\n    provide additional information.\n</p>\n\n<div class=\"project-grid\">\n    <div *ngFor=\"let project of projects\"\n         [ngClass]=\"['project-preview', 'project-'+project.id]\"\n         [style.backgroundImage]=\"'url('+project.background+')'\"\n         routerLink=\"project/{{project.id}}\">\n        <h3>\n            {{project.name}}\n        </h3>\n        <p *ngIf=\"project.description\">\n            {{project.description}}\n        </p>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[3];\n      grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: minmax(200px, auto);\n  grid-gap: 10px; }\n  @media (max-width: 1200px) {\n    .project-grid {\n      -ms-grid-columns: (1fr)[2];\n          grid-template-columns: repeat(2, 1fr); } }\n  @media (max-width: 640px) {\n    .project-grid {\n      -ms-grid-columns: (1fr)[1];\n          grid-template-columns: repeat(1, 1fr); } }\n  .project-grid .project-preview {\n    background-color: #ededed;\n    border: 1px solid #ededed;\n    position: relative;\n    cursor: pointer;\n    overflow: hidden;\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat; }\n  .project-grid .project-preview.project-1 {\n      background-position: center 40px;\n      background-color: #FFF; }\n  .project-grid .project-preview.project-2 {\n      background-color: #FFF;\n      background-position: center 20px; }\n  .project-grid .project-preview.project-5 {\n      background-color: #fd1c9e;\n      background-position: center 20px; }\n  .project-grid .project-preview.project-5 h3 {\n        color: #FFF; }\n  .project-grid .project-preview.project-13 {\n      background-position: center 40px;\n      background-color: #ff9536; }\n  .project-grid .project-preview.project-13:hover h3 {\n        color: #6f470b; }\n  .project-grid .project-preview.project-13 h3 {\n        color: #FFF; }\n  .project-grid .project-preview h3 {\n      padding: 10px;\n      transition: 0.2s all;\n      border: none; }\n  .project-grid .project-preview p {\n      box-sizing: border-box;\n      position: absolute;\n      bottom: -20px;\n      height: 0;\n      padding: 10px;\n      overflow: hidden;\n      transition: 0.6s all;\n      margin: 0;\n      color: #ddd; }\n  .project-grid .project-preview:hover h3 {\n      color: #444; }\n  .project-grid .project-preview:hover p {\n      transition: 0.4s all;\n      height: 120px;\n      background-color: #FFFFFFEE;\n      color: #666; }\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project.service */ "./src/app/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(projectService) {
        this.projectService = projectService;
    }
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (projects) { return _this.projects = projects; });
    };
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/assets/templates/coming-soon.html":
/*!***********************************************!*\
  !*** ./src/assets/templates/coming-soon.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Info Coming Soon.\n</h1>\n\n<p>\n    This site is currently under development and I haven't been able to write descriptions for\n    everything yet. Check back shortly or <a href=\"mailto:andy@groff.cc\">email me</a> to request\n    additional information.\n</p>\n"

/***/ }),

/***/ "./src/assets/templates/reddcoin.html":
/*!********************************************!*\
  !*** ./src/assets/templates/reddcoin.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n    Todo: Fill out this template\n</h1>\n\n<p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna\n    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n    consequat.\n</p>\n"

/***/ }),

/***/ "./src/assets/templates/writing.html":
/*!*******************************************!*\
  !*** ./src/assets/templates/writing.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n    In an effort to provide as much transparency as possible into what it would be like to work with me,\n    I've collected three writing samples that cover fairly common cases where a developer's written communication\n    skills are put to use.\n</p>\n\n<h3>\n    Discussing Software Intricacies\n</h3>\n\n<p>\n    The following is an excerpt from a conversation I had in 2014 about how Reddcoin's software decides who solves\n    a block:\n</p>\n\n<div class=\"callout\">\n    <p>\n        Thanks for getting back to me! According to my understanding, you are completely correct about the \"block\" (I\n        call them coin groups, so as not to confuse with an actual block) being the deciding factor. I do however\n        believe that the process is not deterministic in the sense that the group with the highest weighted coin age\n        always wins. That group is simply the most likely to win, but discovering a block is still dependent on finding\n        an input that creates a hash that meets the difficulty requirement.\n    </p>\n\n    <p>\n        My source for this is the original PoS whitepaper. My current understanding is that PoSV is essentially\n        identical to PoS, except that it introduces a concept of \"weighted coin age\" with diminishing returns for older\n        coins. If PoSV also changed the block discovery logic, then your understanding may very well be the truth.\n    </p>\n\n    <p>\n        Here is the relevant section from the <a href=\"https://peercoin.net/assets/paper/peercoin-paper.pdf\">PoS\n        Whitepaper</a>:\n    </p>\n\n    <blockquote>\n        However an important difference is that the hashing operation is done over a limited search space (more\n        specifically one hash per unspent wallet-output per second) instead of an unlimited search space as in\n        proof-of-work,\n        thus no significant consumption of energy is involved.\n    </blockquote>\n    <blockquote>\n        The hash target that stake kernel must meet is a target per unit coin age (coin-day) consumed in the kernel (in\n        contrast to Bitcoin’s proof-of-work target which is a fixed target value applying to every node). Thus the more\n        coin age consumed in the kernel, the easier meeting the hash target protocol. For example, if Bob has a\n        wallet-output\n        which accumulated 100 coin-years and expects it to generate a kernel in 2 days, then Alice can roughly expect\n        her 200 coin-year wallet-output to generate a kernel in 1 day.\n    </blockquote>\n\n\n    <p>\n        Basically what that tells me is that PoS operates by adjusting the difficulty on a per coin group basis, but\n        there\n        is still probability involved as the core of block generation is still determined by the client creating a hash\n        that\n        meets the hash target criteria.\n    </p>\n</div>\n\n<h3>\n    E-Mail Communication &amp; Infeasible Requirements\n</h3>\n\n<p>\n    The following is a response I sent to the research department after being asked to implement a near impossible security\n    feature:\n</p>\n\n<div class=\"callout\">\n    Hey Team,\n    <br>\n    I am not sure who in research needs this information so feel free to CC/FWD to whoever else needs it.\n    <br><br>\n    In an effort to ensure we're doing the best we can to fulfill the requirement where we \"encrypt the data in such a way that a hacker who accesses the system cannot read the data,\" I reached out to a network of professional developers to get their opinions.\n    <br><br>\n    Most said it was impossible and voted to close down the question, but one well published encryption/security researcher replied saying that in the last year, leading MIT computer scientists have published a paper which, aside from some minor flaws, explains how it might be possible to satisfy this requirement.\n    <br><br>\n    Unfortunately trying to implement a system like that one would be cost and time prohibitive as well as preclude other requirements (such as sending emails automatically), so my recommendation is to not consider it as an option.\n    <br><br>\n    If we want to encrypt the database and store the key on the server it is possible and would enable us to say the database is encrypted, but I would recommend against that too. It would be analogous to locking your front door but leaving the key in the handle - it's technically locked, but if someone gets access to the door unlocking it is trivial. The only attack vector this would actually protect us against is one called SQL injection. Essentially it means the hacker doesn't get access to the server but is able to see our data due to a coding flaw. We already have tools in place to prevent this so I don't see the encryption being very useful in this case either.\n    <br><br>\n    If we do want to go that route, I am guessing its about 10 hours to get the initial encryption set up and then about 15% development overhead on all other tasks - since every step requires us to encrypt or decrypt the data in addition to the task itself. Some tasks - like fraud check - would incur significant additional overhead since encryption handicaps our ability to do queries efficiently.\n    <br><br>\n    I'll leave it up to the research team to determine if these drawbacks are worth the negligible security increase.\n    <br><br>\n    If security is a priority, here are the steps I'd recommend:\n    (database encryption is notably not one of them)\n    <br><br>\n    1. Host the application on its own server - This reduces the surface area significantly and ensures that a security vulnerability outside this system cannot affect this system.\n    <br>\n    2. Lock down the server with industry standard best practices - We do this by default, mostly involves keeping software up to date and disabling password login to the server\n    <br>\n    3. Implement rate limiting - This means preventing multiple failed log in attempts from trying again for 5 minutes or so. Even with an encrypted database, letting them brute force a login would give a determined hacker all our data within a matter of hours.\n    <br>\n    4. Encrypt data in transit - Encrypting the data in transit ensures that no one listening to network traffic is able to scrape passwords or respondent data.\n    <br><br>\n    With these measures I'd be pretty confident that the system is more secure than most, and since there's no incentive for anyone to want this data I'd say that makes us very safe.\n    <br><br>\n    Thanks,\n    <br>\n    Andy\n</div>\n\n<h3>\n    Research &amp; Interactive Article\n</h3>\n\n<p>\n    Finally I am including an interactive article I wrote for the Reddcoin community explaining in simple terms how\n    the software works. It includes some small widgets written in Javascript to help make concepts understandable.\n</p>\n\n<p>\n    This sort of writing is not a common task for most developers, but I wanted to include it because I think it does\n    a great job at showing my ability to do research, figure out how things work, combine multiple sources into a\n    cohesive explanation, and utilize development skills to assist in explanation. The article and the code that\n    drives it are linked above and I am including the links again for convenience:\n</p>\n\n<p>\n    <a href=\"http://agroff.github.io/posv/\">Reddcoin Proof of Stake Velocity Article</a>\n</p>\n\n<p>\n    <a href=\"https://github.com/agroff/agroff.github.io/tree/master/posv\">Source Code of Article</a>\n</p>\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andy/Programming/Personal/groff.cc/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map