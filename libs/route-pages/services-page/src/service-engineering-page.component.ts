import { Component } from '@angular/core';
import { ContactModalComponent, ModalService } from "@valor-software/common-docs";

const achievements= [
    {
        title: '100+ accomplished projects',
        img: 'assets/img/bg-img/services_page/engineering-page/achievements-1.svg'
    },
    {
        title: '50+ stellar engineers on board',
        img: 'assets/img/bg-img/services_page/engineering-page/achievements-2.svg',
        link: 'https://www.upwork.com/ag/valorsoftware/'
    },
    {
        title: '100+ accomplished projects',
        img: 'assets/img/bg-img/services_page/engineering-page/achievements-1.svg'
    },
    {
        title: '100+ accomplished projects',
        img: 'assets/img/bg-img/services_page/engineering-page/achievements-1.svg'
    }
]

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'services-engineering-page',
    templateUrl: './service-engineering-page.component.html'
})
export class ServiceEngineeringPageComponent {
    changeBreadCrumbsPath: {path: string, title: string, excludePath?: boolean}[] = [
        {
            path: 'services',
            title: 'Services'
        },
        {
            path: 'software-engineering',
            title: 'Software engineering'
        }
    ];

    constructor(
        private modalService: ModalService<ContactModalComponent>
    ) {}

    openModal() {
        this.modalService.open(ContactModalComponent);
    }
}