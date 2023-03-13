import styled from 'styled-components';

import { type TypeStyle } from './interfaces';
export const ButtonComponent = styled.button.attrs(
  ({ typeStyle }: TypeStyle) => ({
    as: typeStyle === 'link' ? 'a' : 'button',
    ...(typeStyle === 'link' && { type: 'button' }),
  })
)``;
