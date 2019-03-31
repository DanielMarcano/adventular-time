import { Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "../hero.service";

import { Hero } from "../hero";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"],
  animations: [
    trigger("fade", [
      transition(":enter", [
        style({ opacity: 0, transform: "translateX(10000px)" }),
        animate(".5s linear", style({ opacity: 1, transform: "translateX(0)" }))
      ]),
      transition(":leave", [
        animate(
          "5s ease-in-out",
          style({ opacity: 0, transform: "translateX(10000px)" })
        )
      ])
    ])
  ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    //  if (!this.hero) window.location.hash = '#';
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  @Output() deselect = new EventEmitter<undefined>();

  // deselectHero(): void {
    // this.deselect.emit(undefined);
    // window.location.hash = "#";
  // }

  goBack(): void {
    this.location.back();
  }
}
