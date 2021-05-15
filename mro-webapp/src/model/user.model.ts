export interface IUser {
  userName?: string | null;
  email?: string | null;
  token?: string | null;
}

export const defaultValue: Readonly<IUser> = {
  userName: null,
  email: null,
  token: null,
};
