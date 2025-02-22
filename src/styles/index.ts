import { createStitches } from '@stitches/react';
import { colors } from '@/styles/colors';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors,
  },
});
