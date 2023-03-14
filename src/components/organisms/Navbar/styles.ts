import styled from 'styled-components';

export const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
export const Content = styled.li`
  float: left;
  padding: ${({ theme }) => theme.SPACINGS.LARGE};
`;
