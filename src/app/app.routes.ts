import { Routes } from '@angular/router';
import { HeroList } from './components/hero-list/hero-list';
import { HeroCardForm } from './components/hero-card-form/hero-card-form';
import { App } from './app';

export const routes: Routes = [
    { path: 'list', component: HeroList },
    { path: 'form', component: HeroCardForm }
];
