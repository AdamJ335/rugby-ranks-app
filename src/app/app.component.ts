import { Component } from '@angular/core'
import { RankTableComponent } from "./core/base-display/rank-table/rank-table.component"

@Component({
    selector: 'app-root',
    imports: [RankTableComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rugby-ranks-app'

}
