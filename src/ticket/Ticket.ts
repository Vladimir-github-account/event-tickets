import {
  Table,
  Model,
  Column,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import Event from '../event/Event';

// noinspection JSAnnotator
@Table({
  createdAt: true,
  updatedAt: false,
})
export default class Ticket extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;
  @AllowNull(false)
  @Column(DataType.STRING)
  section: string;
  @AllowNull(false)
  @Column(DataType.STRING)
  row: string;
  @AllowNull(false)
  @Column(DataType.INTEGER)
  price: number;
  @AllowNull(false)
  @Column(DataType.INTEGER)
  seat_number: string;
  @ForeignKey(() => Event)
  @Column
  eventId: number;
  @BelongsTo(() => Event)
  event: Event;
}
