import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ProjectsComponent} from './projects/projects.component';
import {MenuItemsComponent} from './menu-items/menu-items.component';
import {AppRoutingModule} from './app-routing.module';
import {ProjectComponent} from './project/project.component';

@NgModule({
    declarations: [
        AppComponent,
        ProjectsComponent,
        MenuItemsComponent,
        ProjectComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
