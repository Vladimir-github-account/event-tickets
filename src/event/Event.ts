import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
  HasMany,
} from 'sequelize-typescript';
import Ticket from '../ticket/Ticket';

// noinspection JSAnnotator
@Table({
  createdAt: true,
  updatedAt: false,
})
export default class Event extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;
  @AllowNull(false)
  @Column(DataType.STRING)
  title: string;
  @HasMany(() => Ticket)
  ticket: Ticket;
}
