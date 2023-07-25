import Event from './Event';

export const eventsProviders = [
  {
    provide: 'EVENTS_REPOSITORY',
    useValue: Event,
  },
];
