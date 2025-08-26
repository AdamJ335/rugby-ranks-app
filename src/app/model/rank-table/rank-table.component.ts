import { Component, inject, OnInit } from '@angular/core'
import { ApiService } from "../../core/services/api.service"

@Component({
  selector: 'rank-table',
  standalone: true,
    imports: [],
  templateUrl: './rank-table.component.html',
  styleUrl: './rank-table.component.scss'
})
export class RankTableComponent implements OnInit {

  protected ranks: any
  private isMens: boolean = true

  apiService = inject(ApiService)

  async ngOnInit() {
    this.ranks = await this.apiService.getRankings(this.isMens)
  }

  async switchRankings() {
    this.isMens = !this.isMens
    this.ranks = await this.apiService.getRankings(this.isMens)
  }
}
