import { IWebpackParams } from './typings';

export const buildDevtool = (params: IWebpackParams): string => {
  const { isDev } = params;

  return isDev ? 'eval-cheap-module-source-map' : 'source-map';
};
