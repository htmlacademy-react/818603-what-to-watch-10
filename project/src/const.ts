export enum AppRoute {
  Review = '/films/:id/review',
  Film = '/films/:id',
  List = '/mylist',
  Root = '/',
  Player = '/player/:id',
  Login = '/login'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum Tabs {
  Details = 'Details',
  Overviews = 'Overviews',
  Reviews = 'Reviews'
}
