export interface Countries {
  key: number
  zone: string
  country: string
  city: string
}

export interface Inputs {
  key: number
  id: string
  max: number
  text: string
}

export interface Nav {
  id: number
  name: string
  modified: string
  href: string
}

export interface RoundAndTotalTable {
  roundMinute?: number
  roundSeconds?: number
  roundMicroseconds?: number
  totalMinutes?: number
  totalSeconds?: number
  totalMicroseconds?: number
}
