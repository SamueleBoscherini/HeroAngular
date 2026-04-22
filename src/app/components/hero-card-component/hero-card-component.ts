import { Component,signal, EventEmitter, Input, Output } from '@angular/core';
import {Hero} from "../../models/hero.model";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-card-component',
  imports: [CommonModule],
  templateUrl: './hero-card-component.html',
  styleUrl: './hero-card-component.css',
})
export class HeroCardComponent {
  @Input() hero!: Hero;
  @Output() missionCompleted = new EventEmitter<number>();

  notifyParent(){
    this.missionCompleted.emit(this.hero.id);
  }
  selectHero(){
    alert(`Eroe selezionato: ${this.hero.nome}`);
  }
}
