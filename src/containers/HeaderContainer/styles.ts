import styled from 'styled-components';
import { rgba } from 'polished';
import heroImg from '../../resources/images/hero.jpg';

import { colorPrimaryLight, colorPrimaryDark } from '../../styles/themes/theme';

export const Container = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      ${rgba(colorPrimaryLight, 0.8)},
      ${rgba(colorPrimaryDark, 0.8)}
    ),
    url(${heroImg});
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;

  .header__logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }

  .header__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    backface-visibility: hidden;
  }
`;
