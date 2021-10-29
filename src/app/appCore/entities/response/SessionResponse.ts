import { UserResponse } from './UserResponse';

export interface SessionResponse {
  uuid: string;
  user: UserResponse;
  createdAt: string;
  updatedAt: string;
}
