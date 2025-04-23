# xml-docgen

**xml-docgen** is a lightweight utility library for transforming XML strings into structured Markdown documentation.

It parses XML into JavaScript objects, recursively extracts key paths and values for nested objects, and generates Markdown tables for clear and human-readable documentation.

---

Installation
===============

```bash
npm install xml-docgen
```

Methods
===============

| Method                              | Description                                                                 |
|-------------------------------------|-----------------------------------------------------------------------------|
| `xmlStringToJsObject(xmlString)`    | Parses an XML string into a JavaScript object using `xml2js` library.              |
| `xmlToMarkdown(xmlString, schemaName?)` | Converts XML string into Markdown documentation.              |
| `extractObjectPaths(obj)`           | Recursively extracts all key paths and values from a nested object.        |
| `generateMarkdownDoc(pairs, schemaName?)` | Generates a Markdown table from key-value pairs.                     |
| `getFormattedDate(date)`            | Formats a JavaScript Date object as `YYYY_MM_DD`.                          |
| `createFile(fileName, content)`     | Creates a file with the given name and writes content into it.             |

---

Example usage
===============

```js
import { methods } from './xml-docgen.js';

//Xml example
const xmlExample = `
<company id="001" name="TechCorp">
  <departments>
    <department id="d1" name="Engineering">
      <manager id="u1" name="Alice Smith" />
      <employees>
        <employee id="e1" name="John Doe" role="Developer" />
        <employee id="e2" name="Jane Roe" role="Tester" />
      </employees>
    </department>
    <department id="d2" name="Marketing">
      <manager id="u2" name="Bob Brown" />
      <employees>
        <employee id="e3" name="Tom Black" role="SEO Specialist" />
      </employees>
    </department>
  </departments>
  <projects>
    <project id="p1" title="AI System" status="active">
      <description>Development of internal AI assistant.</description>
      <team>
        <member id="e1" role="Lead Developer" />
        <member id="e2" role="QA" />
      </team>
    </project>
    <project id="p2" title="Website Redesign" status="planning">
      <description></description>
      <team />
    </project>
  </projects>
  <metadata created="2022-01-01" updated="2023-12-31"/>
</company>`;

(async () => {
  const operator = ""; // Insert operator name or ID
  const currentDate = methods.getFormattedDate(new Date());

  // Parse XML to JS object (using xml2js library)
  const json = await methods.xmlStringToJsObject(xmlExample);
  const root = Object.keys(json)[0] || 'Root';

  // Extract keys and values from object. E.g keyValue = [['company.id', '0123'], ['company.name', 'testName'], ...]
  const keyValue = methods.extractObjectPaths(json, root);

  // Generate Markdown file with 2 columns (key & value)
  const markdown = await methods.xmlToMarkdown(xmlExample, root);

  // Create file
  methods.createFile(`./${root}Xml_${operator}_${currentDate}.md`, markdown);
})();

```
***This example was added in 'example.js' file.***

Getting support
===============

Please, if you have a problem with the library, first make sure you read this
README. If you read this far, thanks, you're good. Then, please make sure your
problem really is with `xml-docgen`. It is? Okay, then I'll look at it. Send me an email :)

But if you know you really found a bug, feel free to open an issue instead.

**Feel free to fork, extend, and contribute!**

Alex - *2025*