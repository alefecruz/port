import styled from 'styled-components';
import Image from '../../atoms/Image';
import Navbar from '../../organisms/Navbar';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  height: 100vh;
  display: flex;
`;

export const ImageComponent = styled(Image)`
  padding-top: ${({ theme }) => theme.SPACINGS.XLARGE};
  height: 100%;
  mix-blend-mode: lighten;
  opacity: 0.81;
`;

export const ContentInfo = styled.div`
  width: 100%;
  justify-content: center;
`;

export const NavbarComponent = styled(Navbar)``;
