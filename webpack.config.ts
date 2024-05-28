import { resolve } from 'path';

import { IEnv, IWebpackPaths, buildWebpack } from './config';

export default (env: IEnv) => {
  const { mode, isAnalyzer } = env;

  const srcPath = resolve(__dirname, 'src');
  const publicPath = resolve(__dirname, 'public');

  const paths: IWebpackPaths = {
    src: srcPath,
    entry: resolve(srcPath, 'index.tsx'),
    output: resolve(__dirname, 'build'),
    html: resolve(publicPath, 'index.html'),
    favicon: resolve(publicPath, 'favicon.ico'),
  };

  return buildWebpack({ isDev: mode === 'development', isAnalyzer, paths });
};
