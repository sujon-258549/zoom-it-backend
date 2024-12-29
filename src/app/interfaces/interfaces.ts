export type TerrorSourse = {
  path: string | number;
  message: string;
}[];

export type TGanaricErrorHandeler = {
  statusCod: number;
  message: string;
  errorSourse: TerrorSourse;
};

export type TErrorSources = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
};
