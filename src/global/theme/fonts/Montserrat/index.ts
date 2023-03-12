import { css } from 'styled-components';

import { type FontFormat } from '../interfaces';

import Montserrat from './Montserrat.ttf';

export const FONTS: FontFormat = {
  THIN: css`
    font-family: 'Montserrat';
    src: url(${Montserrat});
    font-weight: 100;
  `,
  LIGHT: css`
    font-family: 'Montserrat';
    src: url(${Montserrat});
    font-weight: 300;
  `,
  REGULAR: css`
    font-family: 'Montserrat';
    src: url(${Montserrat});
    font-weight: 400;
  `,
  MEDIUM: css`
    font-family: 'Montserrat';
    src: url(${Montserrat});
    font-weight: 500;
  `,
  SEMI_BOLD: css`
    font-family: 'Montserrat';
    src: url(${Montserrat});
    font-weight: 600;
  `,
  BOLD: css`
    font-family: 'Montserrat';
    src: url(${Montserrat});
    font-weight: 700;
  `,
};
