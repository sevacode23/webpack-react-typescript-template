import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import { IWebpackParams } from './typings';

export const buildPlugins = (params: IWebpackParams) => {
  const { isDev, paths } = params;

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: paths.html, favicon: paths.favicon }),
    new ESLintPlugin({ extensions: ['ts', 'tsx', 'js', 'jsx'] }),
  ];

  if (isDev) {
    plugins.push(
      ...[new ReactRefreshWebpackPlugin(), new ForkTsCheckerWebpackPlugin()]
    );
  }

  return plugins;
};