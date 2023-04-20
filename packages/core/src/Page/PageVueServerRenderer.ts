/* eslint-disable import/no-import-module-exports */
/*
  Note: the function `requireFromString` causes eslint to detect a false-positive
  due to the usage of `module`. Hence, the use of the above `eslint-disable`.
*/
// import { createSSRApp } from 'vue';
import path from 'path';
import fs from 'fs-extra';
// import { renderToString } from '@vue/server-renderer';
import * as logger from '../utils/logger';
import type { PageConfig, PageAssets } from './PageConfig';
import type { Page } from '.';
/* eslint-enable import/no-import-module-exports */
// let bundle = require('@markbind/core-web/dist/js/vueCommonAppFactory.min');

interface PageEntry {
  page: Page;
  pageContent: string;
  pageNav: string;
}

// hold the mapping of sourcePath to latest built pages (for hot-reload dev purposes)
const pageEntries: Record<string, PageEntry> = {};

/**
 * Sets page content into javascript file so that it can be retrieved by the browser.
 *
 * @param content Page content to be compiled into Vue app
 */
async function setsPageContent(
  content: string, pageConfig: PageConfig, pageAsset: PageAssets): Promise<void> {
  // Set up script content
  const jsFileContent = `const pageContent =  \`${content}\`;`;

  // Get script file name
  const pageHtmlFileName = path.basename(pageConfig.resultPath, '.html');
  const scriptFileName = `${pageHtmlFileName}.page-vue-render.js`;

  /*
   * Add the script file path for this page's render function to the page's assets (to populate page.njk).
   * The script file path is the same as the page's file path.
   */
  pageAsset.pageContent = scriptFileName;

  // Get script's absolute file path to output script file
  const dirName = path.dirname(pageConfig.resultPath);
  const filePath = path.join(dirName, scriptFileName);
  await fs.outputFile(filePath, jsFileContent);
}

/**
 * Renders Vue page app into html string (Vue SSR).
 * This function will install the MarkBindVue plugin and render the built Vue page content into html string.
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function renderVuePage(code: String) {
  // const { MarkBindVue, appFactory } = bundle;
  //
  // const { components, directives } = MarkBindVue;
  // const app = createSSRApp({
  //   template: code,
  //   components,
  //   directives,
  //   ...appFactory(),
  // });
  //
  // return await renderToString(app);
  // TODO: implement Vue SSR
  return Promise.resolve('<div id="app"></div>');
}

/**
 * Referenced from stackOverflow:
 * https://stackoverflow.com/questions/17581830/load-node-js-module-from-string-in-memory
 *
 * Credits to Dominic
 */
// function requireFromString(src: string, filename: string) {
//   const m = new (module.constructor as any)();
//   m.paths = module.paths; // without this, we won't be able to require Vue in the string module
//   m._compile(src, filename);
//   return m.exports;
// }

/**
 * Retrieves the latest updated MarkBindVue bundle from webpack compiler watcher,
 * re-render all the built pages, and output the page html files.
 * This function will only be used in development mode (for MarkBindVue bundle hot-reloading purposes).
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function updateMarkBindVueBundle(newBundle: string): Promise<void> {
  logger.info(`Changes detected in MarkBind Vue Source Files:
Bundle is regenerated by webpack and built pages are re-rendered with the latest bundle.`);

  // reassign the latest updated MarkBindVue bundle
  // bundle = requireFromString(newBundle, '');

  Object.values(pageEntries).forEach(async (pageEntry) => {
    const { page, pageContent } = pageEntry;
    const renderedVuePageContent = await renderVuePage(pageContent);
    page.outputPageHtml(renderedVuePageContent);
  });
}

export const pageVueServerRenderer = {
  setsPageContent,
  renderVuePage,
  updateMarkBindVueBundle,
  pageEntries,
};
