/**
 * Represents the rugby rankings
 * @author AdamJ335
 */

export class RanksResponse {

  label: string | undefined
  entries: RankEntry[] | undefined
  effective: LastUpdated | undefined
}

export class LastUpdated {
  millis: number | undefined
  gmtOffset: number | undefined
  label: string | undefined
}

export class RankEntry {
  pos: number | undefined
  previousPos: number | undefined
  pts: number | undefined
  previousPts: number | undefined
  team: RugbyTeam | undefined
}

export class RugbyTeam {
  id: string | undefined
  altId: string | undefined
  name: string | undefined
  abbreviation: string | undefined
  countryCode: string | undefined
  annotations: string | undefined
  metadata: any[] | undefined
}
