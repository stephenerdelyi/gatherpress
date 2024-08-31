/**
 * External dependencies
 */
import { defineConfig, devices } from '@playwright/test';

/**
 * WordPress dependencies
 * 
 * Playwright default configuration, that is used & provided by Gutenberg.
 * https://github.com/WordPress/gutenberg/blob/trunk/packages/scripts/config/playwright.config.js
 */
const { ...baseConfig} = require( '@wordpress/scripts/config/playwright.config' );

export default defineConfig({
    ...baseConfig,

    // This directory holds all the test files.
    // https://playwright.dev/docs/api/class-testconfig#test-config-test-dir
    testDir: '.',

	snapshotPathTemplate: './../../../.wordpress-org/{arg}{ext}',

	expect: {
		toHaveScreenshot: {
			// https://playwright.dev/docs/test-snapshots#maxdiffpixels
			maxDiffPixelRatio: 0.1,
			// https://playwright.dev/docs/test-snapshots#stylepath
			stylePath: './ui-adjustments.css'
		},
	},

	// Configure projects for major browsers
    // We can test on different or multiple browsers if needed.
    // https://playwright.dev/docs/test-projects#configure-projects-for-multiple-browsers
    projects: [
		{
		  name: "chromium",
		  use: { ...devices["Desktop Chrome"] },
		},
	],
	// Don't report slow test "files", as we will be running our tests in serial.
	reportSlowTests: null,
	// use: {
	// 	...baseConfig.use,
	// 	baseURL: 'http://127.0.0.1:9400',
	// 	// actionTimeout: 15_000, // 10 seconds +5 seconds to help webkit tests pass.
	// },
	retries: 0,
	webServer: undefined,
});