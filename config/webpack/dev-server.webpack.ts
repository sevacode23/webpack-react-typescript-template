import type { Configuration } from 'webpack-dev-server';

import { IWebpackParams } from './typings';

export const buildDevServer = (params: IWebpackParams): Configuration => {
  const { port = 3000 } = params;

  return {
    port,
    open: true,
    hot: true,
    historyApiFallback: true,
  };
};
