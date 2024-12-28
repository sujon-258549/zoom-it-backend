export type TerrorSourse = {
  path: string | number;
  message: string;
}[];

export type TGanaricErrorHandeler = {
  statusCod: number;
  message: string;
  errorSourse: TerrorSourse;
};
