import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import { IuserAttributes, IuserInput } from "../enrichUser/interface";

@Table({ tableName: "users" })
class User
  extends Model<IuserAttributes, IuserInput>
  implements IuserAttributes
{
  @PrimaryKey
  @AutoIncrement
  @Column({ type: DataType.INTEGER, allowNull: false })
  public id!: number;

  @Column(DataType.STRING)
  public name!: string;

  @Column(DataType.STRING)
  public gender!: string;

  @Column(DataType.STRING)
  public address!: string;

  @Column(DataType.STRING)
  public email!: string;

  @Column(DataType.DATE)
  public dob!: string;

  @Column(DataType.INTEGER)
  public age!: number;

  @Column(DataType.STRING)
  public phone!: string;

  @Column(DataType.INTEGER)
  public score!: number;

  @Column(DataType.DATE)
  public readonly createdAt!: Date;

  @Column(DataType.DATE)
  public readonly updatedAt!: Date;

  @Column(DataType.DATE)
  public readonly deletedAt!: Date;
}

export default User;
