import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MatchesComponent} from './pages/matchs/matches.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'matches', component: MatchesComponent}
];
