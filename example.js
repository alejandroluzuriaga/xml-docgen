import { methods } from './xml-docgen.js';

//Xml examples
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

  // Parse XML to JS object
  const json = await methods.xmlStringToJsObject(xmlExample);
  const root = Object.keys(json)[0] || 'Root';

  // Generate Markdown doc
  const markdown = await methods.xmlToMarkdown(xmlExample, schemaName);

  // Create markdown file
  methods.createFile(`./${schemaName}Xml_${operator}_${currentDate}.md`, markdown);
})();
