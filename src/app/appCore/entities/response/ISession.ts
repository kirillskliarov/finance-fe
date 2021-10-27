import { IUser } from './IUser';

export interface ISession {
  uuid: string;
  user: IUser;
  createdAt: string;
  updatedAt: string;
}
