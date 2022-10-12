import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SwiperOptions } from 'swiper';
import { getCoreTeamServices } from '../../services/getCoreTeam.service';

export interface ICoreTeam {
  name: string;
  position: string;
  img: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'core-team',
  templateUrl: './core-team.component.html'
})
export class CoreTeamsComponent implements OnDestroy {
  coreTeams?: ICoreTeam[];
  coreTeams$: Subscription;

  constructor(
   private getCoreTeamService: getCoreTeamServices
  ){
  this.coreTeams$ = this.getCoreTeamService.getCoreTeamServices().subscribe((services)=>{
      this.coreTeams = services;
    });
  }

  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 40,
    loop: false,
    mousewheel: {
      releaseOnEdges: true
    },

    autoHeight: false,
    pagination: {
      clickable: true
    }
  };

  ngOnDestroy(): void {
      this.coreTeams$.unsubscribe();
  }

}