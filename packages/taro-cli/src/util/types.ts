import * as webpack from 'webpack'
import * as webpackDevServer from 'webpack-dev-server'
import * as t from 'babel-types'

import { BUILD_TYPES, IMINI_APP_FILE_TYPE } from './constants'
import { IBabelOptions } from '../config/babel'

export interface IInstallOptions {
  dev: boolean,
  peerDependencies?: boolean
}

export interface INpmConfig {
  dir: string,
  name: string
}

export interface IResolvedCache  {
  [key: string]: {
    main: string,
    files: string[]
  }
}

export interface IPrettierConfig {
  printWidth?: number,
  tabWidth?: number,
  useTabs?: boolean,
  semi?: boolean,
  singleQuote?: boolean,
  jsxSingleQuote?: boolean,
  trailingComma?: 'none' | 'es5' | 'all',
  bracketSpacing?: boolean,
  jsxBracketSameLine?: boolean,
  arrowParens?: 'avoid' | 'always',
  rangeStart?: number,
  rangeEnd?: number,
  parser?: 'babel' | 'babylon' | 'flow' | 'typescript' | 'css' | 'scss' | 'less' | 'json' | 'json5' | 'json-stringify' | 'graphql' | 'markdown' | 'mdx' | 'html' | 'vue' | 'angular' | 'yaml',
  filepath?: string,
  requirePragma?: boolean,
  insertPragma?: boolean,
  proseWrap?: 'always' | 'never' | 'preserve',
  htmlWhitespaceSensitivity?: 'css' | 'strict' | 'ignore',
  endOfLine?: 'auto' | 'lf' | 'crlf' | 'cr'
}

export interface IBuildOptions {
  type?: BUILD_TYPES,
  watch?: boolean,
  platform?: string,
  port?: number,
  release?: boolean
}

export interface IMiniAppBuildConfig {
  adapter: BUILD_TYPES,
  watch?: boolean,
  envHasBeenSet?: boolean,
  port?: number,
  release?: boolean
}

export interface IOption {
  [key: string]: any
}
