export interface IResponse<T> {
  message: string;
  code: number;
  data: T;
}

export interface INotificationFactory<T> {
  send(): IResponse<T>;
}
