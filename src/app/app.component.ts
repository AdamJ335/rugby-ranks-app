import { Component, inject, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router';
import { ApiService } from "./core/services/api.service"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'rugby-ranks-app'
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
