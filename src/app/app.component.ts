import { Component } from '@angular/core'
import { RankTableComponent } from "./model/rank-table/rank-table.component"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RankTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rugby-ranks-app'

}
