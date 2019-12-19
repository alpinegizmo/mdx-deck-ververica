import React from 'react'
import Provider from '../components/provider'

import { pre, getLanguage } from '@mdx-deck/themes/syntax-highlighter'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism as prismTheme } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const imageHost = process.env.IMAGE_HOST || ''

export const white = '#ffffff'
export const black = '#3a3838'
export const ververicaLight = '#8EB3BB'
export const ververicaVeryLight = '#abd9e4'
export const ververicaBlue = '#2A6576'
export const ververicaDark = '#163A45'
export const blue = ververicaBlue
export const green = '#2b821b'
export const red = '#980608'
export const slideWidth = '88vw'
export const slideHeight = 'calc(9/16 * 88vw)'
export const ribbonHeight = 6
export const font = '"Open Sans", sans-serif'
export const printPaddingTop = '5vh'

const baseFontSize = '1em'

const code = props => {
  const language = getLanguage(props.className)
  return <SyntaxHighlighter style={prismTheme} language={language} {...props} />
}

const Ververica = {
  Provider,
  googleFont: 'https://fonts.googleapis.com/css?family=Open+Sans',
  components: {
    pre,
    code,
  },
  styles: {
    root: {
      '@media screen and (min-width:56em)': { fontSize: baseFontSize },
      '@media screen and (min-width:64em)': { fontSize: baseFontSize },
      '*': { margin: 0, padding: 0 },
      fontFamily: font,
      textAlign: 'left',
      fontSize: baseFontSize,
      'td[align=center]': { textAlign: 'center' },
      'td[align=right]': { textAlign: 'right' },
      '@media print': {
        width: '1600px',
        height: '900px',
      },
      '.slide.printing': {
        paddingTop: printPaddingTop,
      },
      '.printing .fullscreen, .printing .title, .printing .section, .printing .chapter, .printing .brand': {
        top: `-${printPaddingTop}`,
      },
      '.fullscreen, .title, .section, .chapter': {
        'h1, h2': {
          color: white + ' !important',
        },
        'a': {
          color: white + ' !important',
        },
      },
      '.slide a': {
        textDecoration: `underline dotted ${ververicaVeryLight}`,
        color: ververicaBlue,
      },
      '.presenter a': {
        color: black,
      },
      '.presenter .note a': {
        color: ververicaLight,
      },
      '.presenter a:hover': {
        cursor: 'pointer',
      },
      '.note code': {
        color: ververicaLight,
      },
      table: {
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        fontSize: '0.6em',
        marginBottom: '1em',
        'thead tr': {
          backgroundColor: ververicaBlue,
          th: {
            color: white,
          },
        },
        'td, th': {
          color: ververicaBlue,
          padding: '0.25em 0.5em 0.25em 0.5em',
          borderBottom: '1px solid',
          verticalAlign: 'top',
          lineHeight: '1.8',
        },
        'tr.section': {
          backgroundColor: ververicaVeryLight,
        },
        'tr.section td': {
          color: black,
        },
      },
      code: {
        color: ververicaBlue,
        fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
      },
      'pre[class^="language-"]': {
        margin: '1.3em 0 !important',
        backgroundColor: 'rgb(246, 248, 250) !important',
      },
      pre: {
        fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
        fontSize: '0.55em',
        lineHeight: '1.4 !important',
        padding: '0.5em 1em !important',
        tabSize: 4,
      },
      '.cs-layout pre': {
        fontSize: '0.65em',
      },
      'h1, h2, h3, h4, h5, h6': {
        lineHeight: '1.4',
      },
      h1: {
        fontWeight: 600,
        fontSize: '1.5em',
        marginBlockEnd: '0.8em',
        marginBlockStart: '3vh',
        color: ververicaBlue,
      },
      h2: {
        fontSize: '0.75em',
        fontWeight: 'normal',
        color: ververicaBlue,
        marginBlockEnd: '1.2em',
      },
      '.slide h1 + h2': {
        marginBlockStart: '-0.8em',
      },
      '.section h1 + h1': {
        marginBlockStart: '-0.4em',
      },
      h3: {
        fontSize: baseFontSize,
        fontWeight: 'normal'
      },
      h4: {
        fontSize: '0.7em',
      },
      h5: {
        fontSize: '0.6em',
        marginBlockEnd: '0.6em',
      },
      h6: {
        fontSize: '0.5em',
        marginBlockEnd: '0.5em',
      },
      ol: {
        marginBottom: '1em',
        paddingLeft: '1.3em',
        li: {
          marginTop: '0.4em',
          marginBottom: '0.4em',
          fontSize: '0.9em',
          position: 'relative',
          p: {
            marginTop: '0.4em',
          },
        },
      },
      ul: {
        marginBottom: '1em',
        paddingLeft: '1.3em',
        listStyleType: 'none',
        textAlign: 'left',
        li: {
          marginTop: '0.4em',
          marginBottom: '0.4em',
          fontSize: '0.9em',
          position: 'relative',
          p: {
            marginTop: '0.4em',
          },
        },
        'li:before': {
          color: ververicaBlue,
          content: '"\u2022"',
          position: 'absolute',
          marginTop: '-0.2em',
          marginLeft: '-0.8em',
          fontSize: '150%',  
        },
        ul: {
          li: {
            fontSize: '0.8em',
            marginBottom: 0,
          },
          'li:before': {
            color: ververicaBlue,
            content: '"–"',
            position: 'absolute',
            marginTop: '-0.3em',
            marginLeft: '-1em',
          },
          marginBottom: 0,
        },
      },
      p: {
        margin: '0.5em 0',
      },
      button: {
        fontSize: '16px',
        padding: '10px',
        backgroundColor: white,
        margin: '10px',
      },
      
      '.slide > .cs-layout': {
        margin: '1.3em 0 !important',
      },

      '.cs-layout code': {
        color: black,
        fontSize: '100%',
      },

      '.printing pre.cs-content': {
        backgroundColor: white,
      },

      '.cs-layout, .cs-container, .cs-content': {
        height: 'inherit !important',
      },

      '.slide > .cs-layout .cs-scaled-content > div:first-of-type, .slide > .cs-layout .cs-scaled-content div:last-child': {
        height: '0 !important',
      },

      '.slide > .cs-layout .cs-scaled-content > div:first-of-type, .slide > .cs-layout .cs-scaled-content div': {
        height: 'inherit !important',
      },

      '.cs-scaled-content': {
        width: '100% !important',
        marginLeft: '10px !important',
      },

      '.cs-subtitle': {
        background: ververicaLight + ' !important',
        color: ververicaDark + ' !important',
        textAlign: 'center',
        position: "absolute",
        bottom: 0,
        width: "calc(100% - 2em)",
        boxSizing: "border-box",
        margin: "0.3em 1em",
        padding: "0.5em",     
      },

      '.cs-title': {
        background: ververicaLight + ' !important',
        color: ververicaDark + ' !important',
        fontSize: '1em',
        textAlign: 'center',
        position: "absolute",
        top: 0,
        width: "calc(100% - 2em)",
        boxSizing: "border-box",
        margin: "0.3em 1em",
        padding: "0.5em",     
      },

      '.cs-content, .cs-scaled-content': {
        background: 'rgb(246, 248, 250)',
      },

      '.token-comment, .token-prolog, .token-doctype, .token-cdata': {
        color: 'slategray',
      },

      '.token-punctuation': {
        color: '#999',
      },

      '.token-property, .token-tag, .token-boolean, .token-number, .token-constant, .token-symbol, .token-deleted': {
        color: '#905',
      },

      '.token-selector, .token-attr-name, .token-string,.token-char, .token-builtin, .token-inserted': {
        color: '#690',
      },

      '.token-operator, .token-entity, .token-url, .language-css .token-string, .style .token-string': {
        color: '#9a6e3a',
      	background: 'hsla(0, 0%, 100%, .5)'
      },

      '.token-atrule, .token-attr-value, .token-keyword': {
        color: '#07a',
      },

      '.token-function, .token-class-name': {
        color: '#DD4A68',
      },

      '.token-regex, .token-important, .token-variable': {
        color: '#e90',
      },

      '.token-important, .token-bold': {
        fontWeight: 'bold',
      },

      '.token-italic': {
        fontStyle: 'italic',
      },

      '.token-entity': {
        cursor: 'help',
      },

    },
  },
}

export default Ververica
