import { ServicesPageComponent } from "./services-page.component";
import { ServiceEngineeringPageComponent } from "./service-engineering-page.component";

export const routes = [
    {
        path: '',
        component: ServicesPageComponent
    },
    {
        path: 'software-engineering',
        component: ServiceEngineeringPageComponent
    }
];

