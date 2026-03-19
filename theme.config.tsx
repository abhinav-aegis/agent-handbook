import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: 700, fontSize: '1.2rem' }}>Enterprise AI Safety Handbook</span>,
  footer: {
    text: 'Enterprise AI Safety Handbook',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Enterprise AI Safety Handbook'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Enterprise AI Safety Handbook" />
      <meta property="og:description" content="A comprehensive guide to building safe AI systems in enterprise environments" />
    </>
  ),
  primaryHue: 210,
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    backToTop: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  gitTimestamp: null,
}

export default config
