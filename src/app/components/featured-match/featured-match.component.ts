import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {Match} from '../../models/match';
import {MatchApiService} from '../../api/match-api.service';
import {BetButtonComponent} from '../bet-button/bet-button.component';

@Component({
  selector: 'app-featured-match',
  imports: [
    NgForOf,
    BetButtonComponent
  ],
  templateUrl: './featured-match.component.html',
  styleUrl: './featured-match.component.scss'
})
export class FeaturedMatchComponent {
  featuredMatches: Match[] = [];

  constructor(private matchService: MatchApiService) {}

  ngOnInit(): void {
    this.matchService.getFeaturedMatches(3).subscribe((matches) => {
      this.featuredMatches = matches;
    });
  }
}
