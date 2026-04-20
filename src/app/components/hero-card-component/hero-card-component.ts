import { Component,signal, EventEmitter, Input, Output } from '@angular/core';
import {Hero} from "../../models/hero.model";

@Component({
  selector: 'app-hero-card-component',
  imports: [],
  templateUrl: './hero-card-component.html',
  styleUrl: './hero-card-component.css',
})
export class HeroCardComponent {
  @Input() hero!: Hero;
  @Output() missionCompleted = new EventEmitter<number>();

  notifyParent(){
    this.missionCompleted.emit(this.hero.id);
  }
}
