import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {FeaturedMatchComponent} from '../../components/featured-match/featured-match.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    FeaturedMatchComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
