// library.js
import * as xml from './utils/xml.js';
import * as object from './utils/object.js';
import * as markdown from './utils/markdown.js';
import * as io from './utils/io.js';

export const methods = {
  ...xml,
  ...object,
  ...markdown,
  ...io
};
