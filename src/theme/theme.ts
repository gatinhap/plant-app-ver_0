const theme = {
  colors: {
    primaryGreen: '#02383C',
    primaryGreenWithOverlay:
      'linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%), #02383C',
    mediumGreen: '#065F46',
    lightGreen: '#D1FAE5',
    paleGreen: '#ECFDF5',
    lime: '#A7D129',
    cream: '#FFD',
    brown: '#92400E',
    red: '#F87171',
    lightRed: '#FEF2F2',
    lightYellow: '#FFFBEB',
  },
  fonts: {
    primaryFont: "'Ubuntu', Arial, sans-serif",
    accentFont: "'Work Sans', Arial, sans-serif",
  },
  headingSizes: {
    h1: 78,
    h2: 59,
    h3: 44,
    h4: 33,
    h5: 25,
    h6: 18,
  },
  fontSizes: {
    smallParagraph: 14,
    regularParagraph: 15,
    largeParagraph: 16,
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    extraBold: 800,
  },
  lineHeight: {
    heading: 1,
    smallParagraph: 1.66,
    regularParagraph: 1.7,
    largeParagraph: 1.6,
  },
  letterSpacing: {
    h1: -1.17,
    h2: -0.885,
    h3: -0.66,
    h4: -0.495,
    h5: -0.375,
    h6: -0.27,
    smallParagraph: 0.9,
    regularParagraph: 0.8,
    largeParagraph: 1,
  },
  transitions: {
    primaryTransition: 'all .3s ease',
  },
} as const;

export default theme;
