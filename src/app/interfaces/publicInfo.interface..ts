export interface PublicHeadInterface {
  icon: string[]
  title: string
}

export interface PublicInfoInterface {
  head: PublicHeadInterface
  job: string
  date: string
  company: string
  page: string
  details: string[]
}
