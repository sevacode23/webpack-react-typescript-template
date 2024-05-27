import { ResolveOptions } from 'webpack';

import { IWebpackParams } from './typings';

export const buildResolve = (params: IWebpackParams): ResolveOptions => {
  const { paths } = params;

  return {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': paths.src,
    },
  };
};
