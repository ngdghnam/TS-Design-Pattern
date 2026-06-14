export interface IResponse<T> {
  message: string;
  code: number;
  data: T;
}

export interface INotification<T> {
  send(): IResponse<T>;
}
