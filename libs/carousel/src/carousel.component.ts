import { Component, ElementRef, ChangeDetectorRef, AfterViewChecked,
    AfterViewInit, OnDestroy } from '@angular/core';
import SwiperCore, { Pagination, Mousewheel, SwiperOptions  } from "swiper";
import Swiper  from "swiper";
SwiperCore.use([Mousewheel, Pagination]);

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'carousel',
    template: `
<!--        <swiper-->
<!--                [config]="swiperConfig"-->
<!--                class="pink_swiper"-->
<!--        >-->
<!--            <ng-content></ng-content>-->
<!--        </swiper>-->

        <swiper class="swiper pink_swiper" [config]="swiperConfig">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <ng-content></ng-content>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
        </swiper>

    `
})
export class CarouselComponent implements AfterViewChecked, AfterViewInit, OnDestroy {
    swiper?: Swiper;
    private swiperWrapper: any;
    private slideCount = 0;
    private shouldInitialize = true;
    swiperConfig: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        mousewheel: {
            releaseOnEdges: true
        },
        initialSlide: 1,
        slideToClickedSlide: true,
        pagination: {
            clickable: true
        },
        breakpoints: {
            768: {
                slidesPerView: 1
            },
            1024: {
                slidesPerView: 1.4
            },
            1280: {
                slidesPerView: 1.8
            },
        }
    };

    constructor(
        private elementRef: ElementRef,
        private changeDetectorRef: ChangeDetectorRef
    ) {
    }

    setup() {
        if (!this.swiper) {
            // if rendered on server querySelector is undefined
            if (this.elementRef.nativeElement.querySelector) {
                console.log('there');
                this.swiperWrapper = this.elementRef.nativeElement.querySelector(
                    '.swiper-wrapper'
                );
                console.log('there swiperWrapper', this.swiperWrapper);

                this.slideCount = this.swiperWrapper.childElementCount;
                this.swiper = new Swiper(
                    this.elementRef.nativeElement.querySelector('swiper > div'),
                    this.swiperConfig
                );
                console.log(this.swiper)
                this.changeDetectorRef.detectChanges();
            }
        }
    }

    ngAfterViewInit() {
        setTimeout(() => {
            if (this.shouldInitialize) {
                this.setup();
            }
        },300)
    }

    ngAfterViewChecked() {
        setTimeout(() => {
            if (this.shouldInitialize) {
                this.setup();
            }

            if (
                this.swiperWrapper &&
                this.slideCount !== this.swiperWrapper.childElementCount
            ) {
                this.slideCount = this.swiperWrapper.childElementCount;
                this.swiper?.update();
            }
        }, 300)
    }

    ngOnDestroy() {
        this.swiper?.destroy(true, true);
    }
}