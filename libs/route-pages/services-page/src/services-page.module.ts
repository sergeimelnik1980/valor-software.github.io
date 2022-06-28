import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesPageComponent } from "./services-page.component";
import { routes } from "./routes";
import { RouterModule, Routes } from "@angular/router";
import { CommonDocsModule } from '@valor-software/common-docs';
import { SwiperModule } from "swiper/angular";
import { ServiceEngineeringPageComponent } from "./service-engineering-page.component";

export { ServicesPageComponent } from "./services-page.component";

@NgModule({
    declarations: [
        ServicesPageComponent,
        ServiceEngineeringPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        CommonDocsModule,
        SwiperModule
    ]
})
export class ServicesPageModule {
    static routes: Routes = routes;
}
        