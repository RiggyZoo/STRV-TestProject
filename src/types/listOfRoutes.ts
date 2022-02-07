export enum ListOfRoutes {
  events = '/events/:filter(all|future|past)',
  eventDetail = '/events/:id/detail',
  login = '/login',
  errorPage = '/404',
}

export enum EventsFilterType {
  all = 'all',
  future = 'future',
  past = 'past',
}
