import { userRole } from './User.const';

export interface TUser {
  name: string;
  email: string;
  password: string;
  role?: 'admin' | 'user';
  isBlocked: boolean;
}

export type TuserRole = keyof typeof userRole;
