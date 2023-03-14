import styled, { css } from 'styled-components';

import { type Props, type typeScaleInterface } from './interfaces';

const typeScaleMap = {
  h1: css`
    font-size: ${({ theme }) => theme.SIZES.HUGE};
    font-family: ${({ theme }) => theme.FONTS.BOLD};
  `,
  h2: css`
    font-size: ${({ theme }) => theme.SIZES.XXLARGE};
    font-family: ${({ theme }) => theme.FONTS.BOLD};
  `,
  h3: css`
    font-size: ${({ theme }) => theme.SIZES.XLARGE};
    font-family: ${({ theme }) => theme.FONTS.BOLD};
  `,
  h4: css`
    font-size: ${({ theme }) => theme.SIZES.LARGE};
    font-family: ${({ theme }) => theme.FONTS.SEMI_BOLD};
  `,
  h5: css`
    font-size: ${({ theme }) => theme.SIZES.MEDIUM};
    font-family: ${({ theme }) => theme.FONTS.SEMI_BOLD};
  `,
  h6: css`
    font-size: ${({ theme }) => theme.SIZES.SMALL};
    font-family: ${({ theme }) => theme.FONTS.SEMI_BOLD};
  `,
  p: css`
    font-size: ${({ theme }) => theme.SIZES.SMALL};
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  `,
  span: css`
    font-size: ${({ theme }) => theme.SIZES.SMALL};
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
  `,
};

const letterCaseMap = {
  upper: css`
    text-transform: uppercase;
  `,
  lower: css`
    text-transform: lowercase;
  `,
  capitalize: css`
    text-transform: capitalize;
  `,
};

const textAlignMap = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
};

export const TextComponent = styled.h1.attrs(
  ({ typeScale }: typeScaleInterface) => ({
    as: typeScale === undefined && 'span',
  })
)<Props>`
  ${({ typeScale }) =>
    typeScale !== undefined ? typeScaleMap[typeScale] : 'span'}
  ${({ color, theme }) => (color !== undefined ? theme.COLORS[color] : 'DARK')}
  ${({ letterCase }) => letterCase !== undefined && letterCaseMap[letterCase]}
  ${({ textAlign }) => textAlign !== undefined && textAlignMap[textAlign]}
`;
