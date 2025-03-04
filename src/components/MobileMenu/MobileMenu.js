/* eslint-disable no-unused-vars */
import React from "react";
import styled, { keyframes, css } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const LINKS = [
  {
    href: "/sale",
    text: "sale",
  },
  {
    href: "/new",
    text: "new release",
  },
  {
    href: "/men",
    text: "men",
  },
  {
    href: "/women",
    text: "women",
  },
  {
    href: "/kids",
    text: "kids",
  },
  {
    href: "/collection",
    text: "collection",
  },
];

const SUBLINKS = [
  {
    href: "/terms",
    text: "Terms and Conditions",
  },
  {
    href: "/privacy",
    text: "Privacy Policy",
  },
  {
    href: "/contact",
    text: "Contact Us",
  },
];
const fadeIn = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to{
    transform: translateX(0%)
  }
  
  `;

const SlideInAnimation = (props) => css`
  ${slideIn} 300ms ${props.animationDelay} both;
`;

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <ContentInner>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Filler />
          <Nav>
            {LINKS.map(({ href, text }, i) => (
              <NavLink delay={i + 1} key={i} href={href}>
                {text}
              </NavLink>
            ))}
          </Nav>
          <Footer>
            {SUBLINKS.map(({ href, text }, i) => (
              <SubLink delay={i + 1} key={i} href={href}>
                {text}
              </SubLink>
            ))}
          </Footer>
        </ContentInner>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms;
`;

const Content = styled(DialogContent)`
  --extra-space: 16px;
  --padding-horizontal: 32px;
  position: relative;
  background: white;
  width: calc(300px + var(--extra-space));
  margin-right: calc(var(--extra-space) * -1);
  height: 100%;
  padding: 24px var(--padding-horizontal);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 300ms 150ms cubic-bezier(0, 0.77, 0.11, 1.08) both;
    will-change: transform;
  }
`;

const ContentInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadeIn} 500ms 250ms both;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--extra-space);
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  --initial-delay: 300ms;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  margin-right: calc(var(--padding-horizontal) * -1);

  &:first-of-type {
    color: var(--color-secondary);
  }
  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 300ms both;
    animation-delay: calc(
      var(--initial-delay) + ${({ delay }) => delay * 50}ms
    );
    will-change: transform;
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  --initial-delay: 600ms;
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
  margin-right: calc(var(--padding-horizontal) * -1);
  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 300ms both;
    animation-delay: calc(
      var(--initial-delay) + ${({ delay }) => delay * 50}ms
    );
    will-change: transform;
  }
`;

export default MobileMenu;
