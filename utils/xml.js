import { parseStringPromise } from 'xml2js';
import { extractObjectPaths } from './object.js';
import { generateMarkdownDoc } from './markdown.js';

/**
 * Parses an XML string into a JavaScript object.
 */
export const xmlStringToJsObject = async (xmlString) => {
  return await parseStringPromise(xmlString, {
    explicitArray: false,
    mergeAttrs: true,
    trim: true,
  });
};

/**
 * Full pipeline: XML -> Markdown documentation
 */
export const xmlToMarkdown = async (xmlString, schemaName = 'XML') => {
  const jsObject = await xmlStringToJsObject(xmlString);
  const paths = extractObjectPaths(jsObject);
  return generateMarkdownDoc(paths, schemaName);
};