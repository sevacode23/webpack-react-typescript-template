export type TMode = 'development' | 'production';

export interface IEnv {
  mode: TMode;
  port?: number;
}

export interface IWebpackPaths {
  src: string;
  entry: string;
  output: string;
  html: string;
  favicon: string;
}

export interface IWebpackParams {
  isDev: boolean;
  paths: IWebpackPaths;
  port?: number;
}
