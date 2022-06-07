import { Component, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from "@angular/router";
import { GetArticlesService, IArticle } from "@valor-software/common-docs";
import { filter, switchMap, catchError } from 'rxjs/operators';
import { Subscription, of } from "rxjs";

import Processor from 'asciidoctor';
const processor = Processor();

// small enum for incorrect links from old site, but it should be available
const linksFromOldSite = {
    'career-path-for-a-flat-structured-sompany': 'career-path-for-a-flat-structured-company',
    'testing-with-protractor-how-to-fix-synchroniza': 'testing-with-protractor-how-to-fix-synchronization-issues',
    'the-partnership-press-release-zack-jackson-and-valor-software.html': 'announcing-strategic-partnership-with-zack-jackson-the-module-federation-inventor'
};

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'article',
    templateUrl: './article.component.html'
})
export class ArticleComponent implements OnDestroy{
    changeBreadCrumbTitle?: {path: string, title: string}[];
    article?: IArticle;
    $routEvents?: Subscription;
    constructor(
        private router: Router,
        private getArticleServ: GetArticlesService,
        private sanitizer: DomSanitizer
    ) {
        this.$routEvents = router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            this.checkRoutePath();
        });

        if (!this.article) {
            this.checkRoutePath();
        }
    }

    checkRoutePath() {
        let artTitle = this.router.parseUrl(this.router.url).root.children.primary.segments[1].path;
        if (!artTitle) {
            this.router.navigate(['/articles']);
        }

        if (artTitle) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            artTitle = linksFromOldSite[artTitle] ? linksFromOldSite[artTitle] : artTitle;
            const index = this.getArticleServ.getTitleArticleIndex(artTitle);
            if (!index) {
                this.router.navigate(['/articles']);
                return;
            }

            this.getArticleServ.getArticleRequest(index?.toString()).pipe(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                switchMap((art) => {
                    this.article = art;
                    this.changeBreadCrumbTitle = [{
                        path: artTitle,
                        title: art.title
                    }];
                    return this.getArticleServ.getHTMLSource(index?.toString());
                }),
                catchError(error => {
                    if (!this.article) {
                        this.router.navigate(['/blog']);
                    }
                    return of();
                })
            ).subscribe(res => {
                if (this.article) {
                    const html = processor.convert(res);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this.article.content = html;
                }
            }, error => {
                this.router.navigate(['/blog']);
            });
        }
    }

    checkHTML(html: string) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    routLink(event: any) {
        const element = event.target;

        if (element.nodeName === 'A' && element.getAttribute('routerLink')) {
            event.preventDefault();
            const link = element.getAttribute('routerLink');
            this.router.navigate([link]);
        }
    }

    ngOnDestroy() {
        this.$routEvents?.unsubscribe();
    }
}