import { inject, Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { environment } from "../../../environments/environment"
import { firstValueFrom } from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient)

  constructor() {}

  async getRankings(isMens: boolean) {
    return firstValueFrom(this.http.get(`${environment.apiUrl}/${isMens ? 'mru': 'wru'}?language=en`))
  }

}
