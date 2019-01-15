import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../shared/hero';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  wasSaved: boolean;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
    this.wasSaved = false;
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(
        hero => this.hero = hero,
        error => console.error(error),
        () => console.log(this.hero)
      );
  }

  save(): void {
    this.heroService.saveHero(this.hero).subscribe(
      (response: Response) => this.wasSaved = true,
      (error) => console.error(error)
    );
  }

  goBack(): void {
    this.location.back();
  }
}
