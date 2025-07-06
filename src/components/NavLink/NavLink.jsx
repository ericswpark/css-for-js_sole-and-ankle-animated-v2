import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';

const NavLink = ({children, ...props}) => {
  return (
    <Wrapper {...props}>
      <MainLink>{children}</MainLink>
      <BoldLink aria-hidden={true}>{children}</BoldLink>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  overflow: hidden;
  position: relative;
  display: block;

  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;

  transition: transform 300ms;
  transform: translateY(var(--translate-from));

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    ${Wrapper}:hover &,
    ${Wrapper}:focus & {
      transition: transform 100ms;
      transform: translateY(var(--translate-to));
    }
  }
`;

const MainLink = styled(Text)`
  --translate-from: 0%;
  --translate-to: -100%;

`;

const BoldLink = styled(Text)`
  --translate-from: 100%;
  --translate-to: 0%;

  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  left: 100;
  width: 100%;
  height: 100%;
`;

export default NavLink;
