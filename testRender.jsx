import { JSDOM } from 'jsdom';
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
global.window = dom.window;
global.document = dom.window.document;
global.navigator = { userAgent: 'node.js' };

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HowTimeFlowsArticle } from './src/pages/library/HowTimeFlowsArticle.jsx';

try {
  const html = renderToString(
    <StaticRouter location="/library/how-time-flows-in-sanatana-dharma">
      <HowTimeFlowsArticle />
    </StaticRouter>
  );
  console.log("Rendered successfully!");
} catch (e) {
  console.error("Caught an error during render!");
  console.error(e.message);
  console.error(e.stack);
}
