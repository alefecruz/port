import styled, { css } from 'styled-components';

import { type Props, type typeScaleInterface } from './interfaces';

export const TextComponent = styled.h1.attrs(
  ({ typeScale }: typeScaleInterface) => ({
    as: typeScale,
  })
)<Props>`
  ${({ typeScale }) =>
    typeScale !== undefined ? typeScaleMap[typeScale] : 'p'}
  ${({ color, theme }) => (color !== undefined ? theme.COLORS[color] : 'DARK')}
  ${({ letterCase }) => letterCase !== undefined && letterCaseMap[letterCase]}
  ${({ textAlign }) => textAlign !== undefined && textAlignMap[textAlign]}
`;

const typeScaleMap = {
  h1: css`
    font-size: ${({ theme }) => theme.SIZES.XHUGE};
    font-family: ${({ theme }) => theme.FONTS.LIGHT};
  `,
  h2: css`
    font-size: ${({ theme }) => theme.SIZES.XHUGE};
    font-family: ${({ theme }) => theme.FONTS.LIGHT};
  `,
  h3: css`
    font-size: ${({ theme }) => theme.SIZES.XHUGE};
    font-family: ${({ theme }) => theme.FONTS.LIGHT};
  `,
  h4: css`
    font-size: ${({ theme }) => theme.SIZES.XHUGE};
    font-family: ${({ theme }) => theme.FONTS.LIGHT};
  `,
  h5: css`
    font-size: ${({ theme }) => theme.SIZES.XHUGE};
    font-family: ${({ theme }) => theme.FONTS.LIGHT};
  `,
  h6: css`
    font-size: ${({ theme }) => theme.SIZES.XHUGE};
    font-family: ${({ theme }) => theme.FONTS.LIGHT};
  `,
  p: css`
    font-size: ${({ theme }) => theme.SIZES.XHUGE};
    font-family: ${({ theme }) => theme.FONTS.LIGHT};
  `,
  span: css`
    font-size: ${({ theme }) => theme.SIZES.XHUGE};
    font-family: ${({ theme }) => theme.FONTS.LIGHT};
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
