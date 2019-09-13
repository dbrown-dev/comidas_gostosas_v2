const getTheme = themeProp => (...styleProps) => ({ theme }) =>
  styleProps.map(prop => theme[themeProp][prop]).join(' ');

export const getColor = getTheme('colors');
export const getFont = getTheme('fonts');
export const getFontWeight = getTheme('fontWeights');
export const getSpacing = getTheme('spacings');

const theme = {
  colors: { primary: '#2a2e36', secondary: '#ffdf59' },
  fonts: {
    primary: '"Montserrat", sans-serif',
    base: '1rem',
    small: '0.875rem',
    xSmall: '0.75rem',
    medium: '1.5rem',
    large: '1.875rem',
    xLarge: '2rem'
  },
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700
  },
  spacings: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '3rem'
  },
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
};

export default theme;
