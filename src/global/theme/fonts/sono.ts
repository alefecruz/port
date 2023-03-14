import { css } from 'styled-components';

import { type FontFormat } from './interfaces';

export const FONTS: FontFormat = {
  THIN: css`
    font-weight: 100;
    font-family: 'Sono';
  `,
  LIGHT: css`
    font-weight: 300;
    font-family: 'Sono';
  `,
  REGULAR: css`
    font-weight: 400;
    font-family: 'Sono';
  `,
  MEDIUM: css`
    font-weight: 500;
    font-family: 'Sono';
  `,
  SEMI_BOLD: css`
    font-weight: 600;
    font-family: 'Sono';
  `,
  BOLD: css`
    font-weight: 700;
    font-family: 'Sono';
  `,
};
