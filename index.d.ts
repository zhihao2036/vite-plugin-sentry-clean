import type { Plugin } from 'vite'

/*
  Common types
*/

import type {
  SentryCliCommitsOptions,
  SentryCliUploadSourceMapsOptions,
  SentryCliNewDeployOptions
} from '@sentry/cli'

export interface ViteSentryPluginOptionsCommitsOptions
  extends SentryCliCommitsOptions {}
export interface ViteSentryPluginOptionsSourceMapsOptions
  extends SentryCliUploadSourceMapsOptions {}
export interface ViteSentryPluginOptionsNewDeployOptions
  extends SentryCliNewDeployOptions {}

export interface ViteSentryCliOptions {

  /**
   * Path to sentry cli config file
   */
  configFile?: string

  /**
   * Dry run mode
   * @default false
   */
  dryRun?: boolean

  /**
   * Url of sentry installation
   */
  url?: string

  /**
   * Authentication token for API
   */
  authToken?: string

  /**
   * Organization slug
   */
  org?: string

  /**
   * Project slug
   */
  project?: string

  /**
   * VCS remote name
   */
  vcsRemote?: string

  /**
   * If true, all sentry-cli logs are suppressed
   * @default false
   */
  silent?: boolean
}

export interface ViteSentryCliReleaseOptions {

  /**
   * Unique name for release
   * defaults to sentry-cli releases propose version (requires access to GIT and root directory to be repo)
   */
  release?: string
}

/**
 * Plugin input options
 */
export interface ViteSentryPluginOptions
  extends ViteSentryCliOptions,
    ViteSentryCliReleaseOptions {

  /**
   * Show debug messages during run
   * @default false
   */
  debug?: boolean

  /**
   * Force enable sourcemaps uploading
   * @default false
   */
  skipEnvironmentCheck?: boolean

  /**
   * Enable error handling like in <= 1.1.8 versions
   * When we getting error from Sentry - just warn about and continue
   * @default false
   */
  legacyErrorHandlingMode?: boolean

  /**
   * When is `true` - will drop sourcemap files from resulting bundle
   * @default false
   */
  cleanSourcemapsAfterUpload?: boolean

  /**
   * Remove all artifacts in the release befire upload
   * @default false
   */
  cleanArtifacts?: boolean

  /**
   * Determines whether processed release should be automatically finalized after artifacts upload
   * @default false
   */
  finalize?: boolean

  /**
   * Deployment settings
   */
  deploy?: ViteSentryPluginOptionsNewDeployOptions

  /**
   * Source maps settings
   */
  sourceMaps: ViteSentryPluginOptionsSourceMapsOptions

  /**
   * Commits settings
   */
  setCommits?: ViteSentryPluginOptionsCommitsOptions
}

/*
  Vite plugin function declaration
*/
export default function (options: ViteSentryPluginOptions): Plugin
