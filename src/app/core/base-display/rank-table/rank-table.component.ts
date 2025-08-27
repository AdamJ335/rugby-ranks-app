import { Component, inject, OnInit } from '@angular/core'
import { ApiService } from "../../services/api.service"
import { DatePickerModule } from 'primeng/datepicker';
import { RanksResponse } from "../../../model/ranks-response.model"
import { TableModule } from "primeng/table"
import { FormsModule } from "@angular/forms"
import { Button } from "primeng/button"

@Component({
  selector: 'rank-table',
  imports: [
    TableModule,
    DatePickerModule,
    FormsModule,
    Button
  ],
  templateUrl: './rank-table.component.html',
  styleUrl: './rank-table.component.scss',
  standalone: true
})
export class RankTableComponent implements OnInit {
  protected ranks: RanksResponse | undefined
  private isMens: boolean = true
  date: Date | undefined

  private apiService = inject(ApiService)

  async ngOnInit() {
    this.ranks = await this.apiService.getRankings(this.isMens)
  }

  onDateSelect(event: any) {
    if (this.date) {
      console.log("Searching Ranks by date: ", this.date)
      this.getRankingsByDate(this.date)
    }
  }

  async switchRankings() {
    this.isMens = !this.isMens
    if (this.date) {
      await this.getRankingsByDate(this.date)
    } else {
      this.ranks = await this.apiService.getRankings(this.isMens)
    }
  }

  async getRankingsByDate(date: Date) {
    const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    this.ranks = await this.apiService.getRankingsByDate(this.isMens, dateString)
  }

  async clearDate() {
    this.date = undefined
    this.ranks = await this.apiService.getRankings(this.isMens)
  }
}
