// Exact copy from https://docs.astro.build/en/guides/integrations-guide/markdoc/#syntax-highlighting

import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config'

export default defineMarkdocConfig({
  nodes: {
    heading: {
      ...nodes.heading, // Preserve default anchor link generation
      render: component('./src/components/Heading.astro'),
    },
  },
})
