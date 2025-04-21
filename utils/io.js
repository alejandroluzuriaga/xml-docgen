import fs from 'fs';

/**
 * Formats a Date object into a string like 'YYYY_MM_DD'.
 * @param {Date} date
 * @returns {string}
 */
export const getFormattedDate = (date) => {
  const year = date.getFullYear();
  const month = String(1 + date.getMonth()).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}_${month}_${day}`;
};

/**
 * Creates a file with the given name and content.
 * @param {string} fileName
 * @param {string} content
 */
export const createFile = (fileName, content) => {
  fs.writeFile(fileName, content, (err) => {
    if (err) throw err;
    console.log(`✅ File created: ${fileName}`);
  });
};
