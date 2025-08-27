import { inject, Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { environment } from "../../../environments/environment"
import { firstValueFrom } from "rxjs"
import { RanksResponse } from "../../model/ranks-response.model"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient)

  constructor() {}

  async getRankings(isMens: boolean): Promise<RanksResponse> {
    return firstValueFrom(this.http.get<RanksResponse>(`${environment.apiUrl}/${isMens ? 'mru': 'wru'}?language=en`))
  }

  // Date must be separated with "-" (can be DD-mm-YYY or YYYY-mm-DD)
  async getRankingsByDate(isMens: boolean, date: string): Promise<RanksResponse> {
    return firstValueFrom(this.http.get<RanksResponse>(`${environment.apiUrl}/${isMens ? 'mru': 'wru'}?language=en&date=${date}`))
  }

}
