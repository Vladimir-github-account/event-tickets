import { Sequelize } from 'sequelize-typescript';
import Ticket from '../ticket/Ticket';
import Event from '../event/Event';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'concert_tickets',
      });
      sequelize.addModels([Ticket, Event]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
