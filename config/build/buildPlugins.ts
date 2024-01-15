import CopyPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
  apiUrl,
  project,
  emailjs,
}: BuildOptions): webpack.WebpackPluginInstance[] {
  const isProd = !isDev;

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
    new webpack.EnvironmentPlugin({
      EMAILJS_SERVICE_ID: emailjs.serviceId,
      EMAILJS_TEMPLATE_ID: emailjs.templateId,
      EMAILJS_USER_ID: emailjs.userId,
    }),
  ];

  if (isDev) {
    plugins.push(new ReactRefreshWebpackPlugin());
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }));
  }

  if (isProd) {
    plugins.push(new CopyPlugin({
      patterns: [
        { from: paths.locales, to: paths.buildLocales },
      ],
    }));
  }

  return plugins;
}
