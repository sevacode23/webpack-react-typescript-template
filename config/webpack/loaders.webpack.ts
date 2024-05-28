import { ModuleOptions } from 'webpack';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import { loader as miniCssExtractPluginLoader } from 'mini-css-extract-plugin';

import { IWebpackParams } from './typings';

export const buildLoaders = (
  params: IWebpackParams
): ModuleOptions['rules'] => {
  const { isDev } = params;

  const tsLoader = {
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: isDev,
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
        }),
      },
    },
    exclude: /node_modules/,
  };

  const stylesLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      miniCssExtractPluginLoader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  return [tsLoader, stylesLoader];
};
