
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const NVM_INC: string;
	export const VERCEL_GIT_COMMIT_AUTHOR_NAME: string;
	export const VERCEL_OIDC_TOKEN: string;
	export const npm_package_devDependencies_prettier: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_homepage: string;
	export const npm_package_scripts_style: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const INIT_CWD: string;
	export const SHELL: string;
	export const TERM: string;
	export const VERCEL_GIT_COMMIT_REF: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_package_devDependencies__rollup_plugin_dsv: string;
	export const HOMEBREW_REPOSITORY: string;
	export const TMPDIR: string;
	export const VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string;
	export const npm_package_scripts_lint: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies_lodash_debounce: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const ZDOTDIR: string;
	export const npm_package_dependencies__vercel_analytics: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const npm_package_dependencies__sveltejs_adapter_vercel: string;
	export const npm_config_registry: string;
	export const VERCEL_GIT_COMMIT_SHA: string;
	export const VERCEL_GIT_REPO_OWNER: string;
	export const VERCEL_GIT_PULL_REQUEST_ID: string;
	export const npm_package_devDependencies_vite_plugin_svgstring: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const VERCEL_PROJECT_SETTINGS_NODE_VERSION: string;
	export const npm_package_scripts_gdoc: string;
	export const npm_package_dependencies_d3_scale: string;
	export const npm_package_dependencies_d3_scale_chromatic: string;
	export const COMMAND_MODE: string;
	export const TURBO_CACHE: string;
	export const npm_package_scripts_deploy: string;
	export const npm_package_devDependencies__sveltejs_adapter_static: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const VSCODE_PROFILE_INITIALIZED: string;
	export const VERCEL_URL: string;
	export const npm_package_devDependencies_postcss: string;
	export const VERCEL_GIT_PROVIDER: string;
	export const npm_package_scripts_predeploy: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_svelte: string;
	export const VERCEL_GIT_PREVIOUS_SHA: string;
	export const VERCEL_TARGET_ENV: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_package_dependencies_d3_geo: string;
	export const PATH: string;
	export const npm_package_devDependencies_archieml: string;
	export const npm_package_devDependencies_bits_ui: string;
	export const npm_package_devDependencies_rollup: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const NOW_BUILDER: string;
	export const PWD: string;
	export const npm_command: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_lucide_svelte: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const npm_package_name: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_package_devDependencies_rollup_plugin_svg: string;
	export const VERCEL: string;
	export const npm_package_engines_node: string;
	export const npm_package_devDependencies_style_dictionary: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const npm_package_devDependencies_d3: string;
	export const npm_package_devDependencies_svelte_copy: string;
	export const VSCODE_INJECTION: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_dependencies_layercake: string;
	export const HOME: string;
	export const SHLVL: string;
	export const npm_package_type: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const HOMEBREW_PREFIX: string;
	export const NX_DAEMON: string;
	export const LOGNAME: string;
	export const npm_package_scripts_format: string;
	export const npm_package_dependencies_topojson_client: string;
	export const npm_package_devDependencies_gh_pages: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const VERCEL_GIT_REPO_ID: string;
	export const TURBO_REMOTE_ONLY: string;
	export const NVM_BIN: string;
	export const TURBO_RUN_SUMMARY: string;
	export const npm_package_dependencies_d3_fetch: string;
	export const npm_config_user_agent: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const TURBO_DOWNLOAD_LOCAL_ENABLED: string;
	export const VERCEL_ENV: string;
	export const npm_package_browserslist: string;
	export const VERCEL_GIT_COMMIT_MESSAGE: string;
	export const __VERCEL_BUILD_RUNNING: string;
	export const COLORTERM: string;
	export const VERCEL_GIT_REPO_SLUG: string;
	export const npm_node_execpath: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		NVM_INC: string;
		VERCEL_GIT_COMMIT_AUTHOR_NAME: string;
		VERCEL_OIDC_TOKEN: string;
		npm_package_devDependencies_prettier: string;
		TERM_PROGRAM: string;
		NODE: string;
		NVM_CD_FLAGS: string;
		npm_package_homepage: string;
		npm_package_scripts_style: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		INIT_CWD: string;
		SHELL: string;
		TERM: string;
		VERCEL_GIT_COMMIT_REF: string;
		npm_package_devDependencies_vite: string;
		npm_package_devDependencies__rollup_plugin_dsv: string;
		HOMEBREW_REPOSITORY: string;
		TMPDIR: string;
		VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string;
		npm_package_scripts_lint: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies_lodash_debounce: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		ZDOTDIR: string;
		npm_package_dependencies__vercel_analytics: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_devDependencies_svelte_preprocess: string;
		npm_package_dependencies__sveltejs_adapter_vercel: string;
		npm_config_registry: string;
		VERCEL_GIT_COMMIT_SHA: string;
		VERCEL_GIT_REPO_OWNER: string;
		VERCEL_GIT_PULL_REQUEST_ID: string;
		npm_package_devDependencies_vite_plugin_svgstring: string;
		USER: string;
		NVM_DIR: string;
		VERCEL_PROJECT_SETTINGS_NODE_VERSION: string;
		npm_package_scripts_gdoc: string;
		npm_package_dependencies_d3_scale: string;
		npm_package_dependencies_d3_scale_chromatic: string;
		COMMAND_MODE: string;
		TURBO_CACHE: string;
		npm_package_scripts_deploy: string;
		npm_package_devDependencies__sveltejs_adapter_static: string;
		PNPM_SCRIPT_SRC_DIR: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		VSCODE_PROFILE_INITIALIZED: string;
		VERCEL_URL: string;
		npm_package_devDependencies_postcss: string;
		VERCEL_GIT_PROVIDER: string;
		npm_package_scripts_predeploy: string;
		npm_execpath: string;
		npm_package_devDependencies_svelte: string;
		VERCEL_GIT_PREVIOUS_SHA: string;
		VERCEL_TARGET_ENV: string;
		npm_config_frozen_lockfile: string;
		npm_package_dependencies_d3_geo: string;
		PATH: string;
		npm_package_devDependencies_archieml: string;
		npm_package_devDependencies_bits_ui: string;
		npm_package_devDependencies_rollup: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		NOW_BUILDER: string;
		PWD: string;
		npm_command: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_lucide_svelte: string;
		npm_lifecycle_event: string;
		LANG: string;
		npm_package_name: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_package_devDependencies_rollup_plugin_svg: string;
		VERCEL: string;
		npm_package_engines_node: string;
		npm_package_devDependencies_style_dictionary: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		npm_package_devDependencies_d3: string;
		npm_package_devDependencies_svelte_copy: string;
		VSCODE_INJECTION: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_dependencies_layercake: string;
		HOME: string;
		SHLVL: string;
		npm_package_type: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		HOMEBREW_PREFIX: string;
		NX_DAEMON: string;
		LOGNAME: string;
		npm_package_scripts_format: string;
		npm_package_dependencies_topojson_client: string;
		npm_package_devDependencies_gh_pages: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		VERCEL_GIT_REPO_ID: string;
		TURBO_REMOTE_ONLY: string;
		NVM_BIN: string;
		TURBO_RUN_SUMMARY: string;
		npm_package_dependencies_d3_fetch: string;
		npm_config_user_agent: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		TURBO_DOWNLOAD_LOCAL_ENABLED: string;
		VERCEL_ENV: string;
		npm_package_browserslist: string;
		VERCEL_GIT_COMMIT_MESSAGE: string;
		__VERCEL_BUILD_RUNNING: string;
		COLORTERM: string;
		VERCEL_GIT_REPO_SLUG: string;
		npm_node_execpath: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
