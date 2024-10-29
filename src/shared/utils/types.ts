export interface IServer {
  name: string;
  distance: number;
}

export interface IServerExpanded {
  name: string;
  distance: number;
  countryCode: string;
}

export type SortOrder = 'desc' | 'asc';
export type CompareFunction = <T>(a: T, b: T, orderBy: keyof T) => number;

export interface IHeadCell {
  id: string;
  title: string;
  position: 'left' | 'right';
  order: SortOrder;
}

export type AuthenticateUserData = {
  username: string;
  password: string;
};

export type AuthenticateUserResponse = {
  token: string;
};

export type GetServersResponse = IServerExpanded[];

export type ApiError = {
  message: string;
};
