export const colors = {
  primary: '#22D486',
  primaryHover: '#20BD78',
  secondary: '#FF4081',
  secondaryHover: '#E73370',
  grey: '#D9DCE1',
  greyHover: '#C4C9D1',
  inputNormal: '#DAE1E7',
  inputLabel: '#C9CED3',
  inputValue: '#323C46',
  white: '#FFFFFF',
  greyThird: '#7D7878',
  green: '#1BE38B',
  black: '#000000',
  inputError: '#FF4081',
  greySecondary: '#949EA8',
  linkButtonNonActive: '#A9AEB4',
  eventBoxDateField: '#CACDD0',
  transparent: 'transparent',
  navbar: 'rgba(76, 16, 112, 0.7)',
}

export const shadows = {
  hover: '0px 15px 25px -5px rgba(darken(black, 40%))',
  active: '0px 15px 25px -5px rgba(darken(black, 40%))',
}

export type Color = keyof typeof colors
export type Shadows = keyof typeof shadows
