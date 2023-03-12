import { css, type FlattenSimpleInterpolation } from 'styled-components';

import { type FontFormat } from '../interfaces';

import Montserrat from './Montserrat.ttf';

const font: FlattenSimpleInterpolation = css`
  font-family: 'Montserrat';
  src: url(${Montserrat});
`;

export const FONTS: FontFormat = {
  THIN: css`
    ${font}
    font-weight: 100;
  `,
  LIGHT: css`
    ${font}
    font-weight: 300;
  `,
  REGULAR: css`
    ${font}
    font-weight: 400;
  `,
  MEDIUM: css`
    ${font}
    font-weight: 500;
  `,
  SEMI_BOLD: css`
    ${font}
    font-weight: 600;
  `,
  BOLD: css`
    ${font}
    font-weight: 700;
  `,
};
