import { css } from 'styled-components';

import { type FontFormat } from './interfaces';

export const FONTS: FontFormat = {
  THIN: css`
    font-weight: 100;
    font-family: 'Lora';
  `,
  LIGHT: css`
    font-weight: 300;
    font-family: 'Lora';
  `,
  REGULAR: css`
    font-weight: 400;
    font-family: 'Lora';
  `,
  MEDIUM: css`
    font-weight: 500;
    font-family: 'Lora';
  `,
  SEMI_BOLD: css`
    font-weight: 600;
    font-family: 'Lora';
  `,
  BOLD: css`
    font-weight: 700;
    font-family: 'Lora';
  `,
};
