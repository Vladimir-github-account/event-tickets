import { Sequelize } from 'sequelize-typescript';
import Ticket from '../ticket/Ticket';
import Event from '../event/Event';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME || 'event_tickets',
      });
      sequelize.addModels([Ticket, Event]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
