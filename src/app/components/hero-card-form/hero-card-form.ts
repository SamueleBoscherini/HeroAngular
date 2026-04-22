import { Component, Input } from '@angular/core';
import { Hero } from '../../models/hero.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero-card-form',
  imports: [FormsModule],
  templateUrl: './hero-card-form.html',
  styleUrl: './hero-card-form.css',
})
export class HeroCardForm {

  @Input() hero!: Hero;
}
