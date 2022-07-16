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
  Unknown = 'UNKNOWN',
}

export const PROMO_FILM = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  date: 2014
};
