import { Component, inject, OnInit } from '@angular/core'
import { ApiService } from "../../services/api.service"
import { RanksResponse } from "../../../model/ranks-response.model"

@Component({
    selector: 'rank-table',
    imports: [],
    templateUrl: './rank-table.component.html',
    styleUrl: './rank-table.component.scss'
})
export class RankTableComponent implements OnInit {
  protected ranks: RanksResponse | undefined;
  private isMens: boolean = true;

  private apiService = inject(ApiService);

  async ngOnInit() {
    this.ranks = await this.apiService.getRankings(this.isMens);
  }

  async switchRankings() {
    this.isMens = !this.isMens;
    this.ranks = await this.apiService.getRankings(this.isMens);
  }
}
