/**
 * Escapes pipe characters in strings to prevent breaking Markdown tables.
 * @param {string} str - The string to sanitize for Markdown table output.
 * @returns {string} The escaped string.
 */
const escapeMarkdown = (str) => str.replace(/\|/g, '\\|');

/**
 * Generates a Markdown documentation table from an array of key-value pairs.
 *
 * @param {[string, string][]} pairs - Array of tuples where each tuple contains a key path and its corresponding value.
 * @param {string} [schemaName] - Title of the Markdown document.
 * @returns {string} The generated Markdown as a string.
 */
export const generateMarkdownDoc = (pairs, schemaName) => {
  let md = `# ${schemaName} XML documentation\n\n`;
  md += `| Path to field | Value |\n|-------|--------|\n`;

  for (const [key, value] of pairs) {
    const safeKey = escapeMarkdown(key);
    const safeValue = escapeMarkdown(value ?? '');
    md += `| ${safeKey} | ${safeValue} |\n`;
  }

  return md;
};
