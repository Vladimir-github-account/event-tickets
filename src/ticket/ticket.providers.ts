import Ticket from './Ticket';

export const ticketsProviders = [
  {
    provide: 'TICKETS_REPOSITORY',
    useValue: Ticket,
  },
];
