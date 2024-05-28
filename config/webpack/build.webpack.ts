import { Configuration } from 'webpack';

import { buildLoaders } from './loaders.webpack';
import { buildResolve } from './resolve.webpack';
import { buildDevtool } from './devtools.webpack';
import { buildPlugins } from './plugins.webpack';
import { buildDevServer } from './dev-server.webpack';
import { IWebpackParams } from './typings';

export const buildWebpack = (params: IWebpackParams) => {
  const { isDev, paths } = params;

  const config: Configuration = {
    mode: isDev ? 'development' : 'production',

    entry: paths.entry,

    output: {
      path: paths.output,
      filename: 'js/[name].[contenthash].js',
      chunkFilename: 'js/[name].[contenthash].js',
      assetModuleFilename: 'assets/[hash][ext][query]',
      clean: true,
    },

    module: {
      rules: buildLoaders(params),
    },

    resolve: buildResolve(params),

    plugins: buildPlugins(params),

    devtool: buildDevtool(params),
  };

  if (isDev) {
    config.devServer = buildDevServer(params);
  }

  return config;
};
